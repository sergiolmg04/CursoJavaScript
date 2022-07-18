//importando as bibliotecas e types necessários
import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";

//exportando a funçao GetHome para a página principal do servidor
export const FuncaoGetHome = async (req:Request, res:Response)=>{

//A variável HTML recebe todo o conteúdo HTML do URL em forma de string
const HTML = await axios.get('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');

//Utilizando a lib Cheerio para quebrar o string HTML e poder fazer pesquisas
const $ = cheerio.load(HTML.data);

//Varia´vel que vai receber todos os itens que contem a classe caption
const notebook:any = $('.caption');

//variável que vai receber o array dos notebooks da lenovo
let NotebooksLenovo:any = [];

//loop para criar o objeto com os dados do notebook
for(let i of notebook){

//declaração da variável que vai receber o objeto com os dados Preço, Link e Nome de todos os notebooks
let dadosNotebooks = {
  Preco: parseFloat(i.children[1].children[0].data.replace("$","")),
  Link: "https://webscraper.io"+i.childNodes[3].childNodes[1].attribs.href,
  Nome: i.childNodes[3].childNodes[1].attribs.title
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

console.log(NotebooksLenovo);

//Abrindo links e pegando conteúdo por notebook


};// fecha a FuncaoGetHome

//res.render("pages/home");
    //console.log("Se deu certo, vai aparecer " );
    /*let user:string = "Sérgio";
    let menu:string[] = ["Constrole de Materiais", "Aderência da Programação", "Andamento das Avaliações"];
    let query:string = "Ainda não recebi nada";
    /*, funcao); //manda informações para a página*/
   
    //query = req.query.nome as string;*/
//};