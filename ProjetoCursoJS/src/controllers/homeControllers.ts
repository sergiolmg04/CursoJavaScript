//importando as bibliotecas e types necessários
import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";

//exportando a funçao GetHome para a página principal do servidor
export const FuncaoGetHome = async (req:Request, res:Response)=>{

//A variável HTML recebe todo o conteúdo HTML do URL em forma de string
const HTML = await axios.get('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
  console.log(HTML); //apenas para ver como a HTML foi recebida

//Utilizando a lib Cheerio para quebrar o string HTML e poder fazer pesquisas
const $ = cheerio.load(HTML.data);

//Varia´vel que vai receber todos os itens que contem a classe caption
const notebook:any = $('.caption');

//variável que vai receber o array dos notebooks da lenovo
let NotebooksLenovo:any = [];

//apenas para ver o valor que notebook recebeu
console.log(notebook);

//loop para criar o objeto com os dados do notebook
for(let i of notebook){
  console.log(i); //mostrar o valor que i está recebendo

//declaração da variável que vai receber o objeto com os dados Preço, Link e Nome de todos os notebooks
let dadosNotebooks = {
  Preco: parseFloat(i.children[1].children[0].data.replace("$","")),
  Link: "https://webscraper.io"+i.childNodes[3].childNodes[1].attribs.href,
  Nome: i.childNodes[3].childNodes[1].attribs.title
}

//deixando o title maiúsculo
dadosNotebooks.Nome = dadosNotebooks.Nome.toUpperCase()

//apenas para ver como o objeto foi criado
  console.log("oi");

console.log(dadosNotebooks.Nome.includes("ASUS"));
//comparação para separar os notebooks que são lenovo dos outros
if(dadosNotebooks.Nome.includes("LENOVO")){ //falta ordenar pelo preço
  let x=1; //apenas para saber se o if está funcionando
  NotebooksLenovo.push(dadosNotebooks);
  console.log(x); //para saber se x recebendo 1
  console.log(NotebooksLenovo);//ver notebooks lenovo
}
else {
  let y=2; //apenas para saber se o else está funcionando
  console.log(y); //para saber se y recebendo 2
}

//Ordenar o array


}; //fecha o for
};// fecha a FuncaoGetHome

    //res.render("pages/home");
    //console.log("Se deu certo, vai aparecer " );
    /*let user:string = "Sérgio";
    let menu:string[] = ["Constrole de Materiais", "Aderência da Programação", "Andamento das Avaliações"];
    let query:string = "Ainda não recebi nada";
    /*, funcao); //manda informações para a página*/
   
    //query = req.query.nome as string;*/
//};