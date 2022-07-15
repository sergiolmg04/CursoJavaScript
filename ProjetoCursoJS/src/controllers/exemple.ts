//const puppeteer = require('puppeteer-core');
import puppeteer from "puppeteer-core";

export const pupp = (async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.microsoftedgeinsider.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
  let retorna = "Não deu bom";
  function retornando(){
    retorna = "Deu bom";
  }
  return retornando ();
})();