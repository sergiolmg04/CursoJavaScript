import { Request, Response } from "express";
import * as puppeteer from "./exemple"

export const FuncaoGetHome = (req: Request, res: Response)=>{//página padrão do server
    let user:string = "Sérgio";
    let menu:string[] = ["Constrole de Materiais", "Aderência da Programação", "Andamento das Avaliações"];
    let query:string = "Ainda não recebi nada";
    /*const func = funcao;
    function funcao(){
        puppeteer.pupp;
      }*/
    res.render("pages/home", {user, menu, query}/*, funcao*/); //manda informações para a página
    console.log("Query string",req.query);
    query = req.query.nome as string;
};