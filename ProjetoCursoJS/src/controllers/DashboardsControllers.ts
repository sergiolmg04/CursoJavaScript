import { Request, Response } from "express";
import * as puppeteer from "./exemple"
export const SemDash = (req: Request, res: Response)=>{//rota de daa página para direcionar outro conteúdo
    let ok = puppeteer.pupp;
    console.log(ok);
    res.send("Colocar Dashboard na página"); //estudar
    


};