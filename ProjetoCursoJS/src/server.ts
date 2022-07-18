//importando as bibliotecas necessárias pra rodar o server
import express, {Request, Response} from 'express'; //importando as funções de server e os tipos de variáveis 
import dotenv from 'dotenv'; //lib que permite eu escolher a porta que vou hospedar meu host
import MainRoutes from './routes/routes'; //importando a variável router p/ poder usar as minhas rotas

//configurando o dotenv
dotenv.config(); 

//criando o server
const server = express(); 
server.use(express.urlencoded({extended:true}))

//habilitando as rotas do meu arquivo separado no server
server.use(MainRoutes);

//configurando o error 404
server.use((req:Request, res:Response)=>{ 
    res.status(404).send("Página não encontrada");
});

//configurando a porta do local host
server.listen(process.env.PORT); 

//Exibindo uma mensagem que o server está pronto
console.log("O localhost está pronto para ser acessado!");
