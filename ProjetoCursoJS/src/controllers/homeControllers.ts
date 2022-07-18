//importando as bibliotecas e types necessários
import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";
import * as puppeteer from "puppeteer";

//exportando a funçao GetHome para a página principal do servidor
export const FuncaoGetHome = async (req:Request, res:Response)=>{

//A variável HTML recebe todo o conteúdo HTML do URL em forma de string
const HTML = await axios.get('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');

//Utilizando a lib Cheerio para quebrar o string HTML e poder fazer pesquisas
const $ = cheerio.load(HTML.data);

//Variável que vai receber todos os itens que contem a classe caption
const notebook:any = $('.caption');

//variável que vai receber o array dos notebooks da lenovo
let NotebooksLenovo:any = [];

//loop para criar o objeto com os dados do notebook
for(let i of notebook){

//declaração da variável que vai receber o objeto com os dados Preço, Link e Nome de todos os notebooks
let dadosNotebooks = {
  Nome: i.childNodes[3].childNodes[1].attribs.title,
  Preco: parseFloat(i.children[1].children[0].data.replace("$","")),
  Description: i.childNodes[5].childNodes[0].data,
  Link: "https://webscraper.io"+i.childNodes[3].childNodes[1].attribs.href
  
}

//deixando o title maiúsculo
dadosNotebooks.Nome = dadosNotebooks.Nome.toUpperCase()

//comparação para separar os notebooks que são lenovo dos outros
if(dadosNotebooks.Nome.includes("LENOVO")){ //falta ordenar pelo preço
  NotebooksLenovo.push(dadosNotebooks);
  }
}; //fecha o for

//Ordenando o array através de bubble sort
let length = NotebooksLenovo.length; 
  for (let i = 0; i < length; i++) { 
    for (let j = 0; j < (length - i - 1); j++) { 
      if(NotebooksLenovo[j].Preco > NotebooksLenovo[j+1].Preco) {
        let aux = NotebooksLenovo[j]; 
        NotebooksLenovo[j] = NotebooksLenovo[j+1]; 
        NotebooksLenovo[j+1] = aux;
    }
  }        
}

//Abrindo links e pegando conteúdo por notebook
try{
  for(let i in NotebooksLenovo){
  //Variável que vai receber o array de preços por HDD
  let Preco:any = [];
  const browser = await puppeteer.launch({headless:true}); //inicia o chromium
  const page = await browser.newPage();
  await page.goto(NotebooksLenovo[i].Link); //abre o link
  const swats:any = await page.$$('.swatch');
  try{
  await page.waitForSelector("#closeCookieBanner", { //pra fechar o aviso de cookies
    timeout: 20000});
  }
  catch(e){}
  for (let i in swats){
  //clica no preço
  await swats[i].click('[target=_blank]');
  
  //pega o valor do HDD
  const conteudoHDD:any = await swats[i].getProperty('textContent');
  const HDD:any = await conteudoHDD.jsonValue();
  
  //pega o valor do notebook por HDD
  const DivPreco:any = await page.$$('.price');
  const conteudoPreco:any = await DivPreco[0].getProperty('textContent');
  let IndividualPreco:any = await conteudoPreco.jsonValue();

  //criando uma variável com o HDD e o Preço
  
  IndividualPreco = IndividualPreco.replace('$','');
  IndividualPreco = parseFloat(IndividualPreco);
  Preco.push({HDD: HDD, Preco: IndividualPreco});
    } //fecha o for do HDD e Preco    
  await browser.close();
  NotebooksLenovo[i].Preco = Preco;
  } //fecha o for
}
catch(e){
  console.log(e);
}

console.log(NotebooksLenovo);

//retornando para a pag
res.json({Notebooks: NotebooksLenovo});

};// fecha a FuncaoGetHome