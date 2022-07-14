import express, {Request, Response} from 'express'; //importando as funções de server e os tipos de vriáveis da biblioteca express
import path from 'path'; // importando da biblioteca que vem junto com o express para poder definir o dirname
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import MainRoutes from './routes/routes'; //importando a variável router p/ poder usar as minhas rotas

dotenv.config(); //configurando o dotenv

const server = express(); //criando o server

server.set('view engine', 'mustache'); //habilitando o mustache
server.set('views', path.join(__dirname,'views')); //mostrando qual a pasta que vou salvar
server.engine('mustache', mustache());

server.use(express.urlencoded({extended:true}))

server.use(MainRoutes);// habilitando as rotas do meu arquivo separado no server

server.use(express.static(path.join(__dirname,'../public'))); //mostra o caminho para a pasta

server.use((req:Request, res:Response)=>{
    res.status(404).send("Página não encontrada");
});

server.listen(process.env.PORT); //criando o server e mostrando a porta do local host














console.log("deu certo");
