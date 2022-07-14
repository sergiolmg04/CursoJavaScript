import { Request, Response } from "express";

export const FuncaoGetHome = (req: Request, res: Response)=>{//página padrão do server
    let user:string = "Sérgio";
    let menu:string[] = ["Constrole de Materiais", "Aderência da Programação", "Andamento das Avaliações"];
    let query:string = "Ainda não recebi nada";
    res.render("pages/home", {user, menu, query}); //manda informações para a página
    console.log("Query string",req.query);
    query = req.query.nome as string;
};