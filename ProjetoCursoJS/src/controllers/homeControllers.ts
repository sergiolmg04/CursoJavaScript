import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";

export const FuncaoGetHome = async (req:Request, res:Response)=>{//página padrão do server
    const HTML = await axios.get('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
    console.log(HTML);
    const $ = cheerio.load(HTML.data);
    const notebook:any = $('.caption');
    let NotbooksLenovo = [];
    console.log(notebook);
    for(let i of notebook){
      console.log(i);
   let dadosNotbooks = {
    Preco: parseFloat(i.children[1].children[0].data.replace("$","")),
    Link: "https://webscraper.io"+i.childNodes[3].childNodes[1].attribs.href,
    Nome: i.childNodes[3].childNodes[1].attribs.title
    }
    console.log("oi");
    /*if(dadosNotbooks.Nome contains "Lenovo"){ falta filtrar isso e salvar numa lista que vai ser um array e vou ordenar pelo preço
      x=1;
    }*/
  };
};
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* const browser = await puppeteer.launch({
      executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
    let conteudo:any;
    try{
      conteudo = await page.$$('.caption');
      //const elemento = await page.$eval('childNodes', ele => ele.textContent);
      //console.log("Heading text: "+ elemento);

      /*conteudo = await page.evaluate(() => {
      return {
        title: Array.from(document.querySelectorAll('[title]')).filter(title => Object(title).firstChild.data.toString().toUpperCase().includes('LENOVO'))
      };
    });
    }
  catch(e){
    console.log(e);
  }
    let novoConteudo = Object.values(conteudo);
    await browser.close();
    for (let i in novoConteudo){
    console.log("eba" + novoConteudo[i]);
  }
    //console.log(conteudo.title.length);
    //res.render("pages/home");
    //console.log("Se deu certo, vai aparecer " );
    /*let user:string = "Sérgio";
    let menu:string[] = ["Constrole de Materiais", "Aderência da Programação", "Andamento das Avaliações"];
    let query:string = "Ainda não recebi nada";
    /*, funcao); //manda informações para a página*/
   
    //query = req.query.nome as string;*/
//};