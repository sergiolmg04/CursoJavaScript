import { Request, Response } from "express";
//import puppeteer from "puppeteer-core";
import * as puppeteer from "./exemple"

export async function SemDash(req: Request, res: Response){
    //console.log(res);
    //let ok = await puppeteer.pupp;
    //console.log("Deu ótimo " + ok);
    //rota de daa página para direcionar outro conteúdo
    res.send("Colocar Dashboard na página"); //estudar
};

    

/*export async function SemDash(req: Request, res: Response) {
    await puppeteer.pupp;
    console.log(puppeteer.pupp);
    res.send("Colocar Dashboard na página");
};*/

/*export const SemDash = (async () => {
    const manda = (req: Request, res: Response) => {
        res.send("Colocar Dashboard na página");
    };
    const browser = await puppeteer.launch({
      executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.microsoftedgeinsider.com');
    await page.screenshot({path: 'example.png'});
  
    await browser.close();
   
    return "deu bom";
  })();*/