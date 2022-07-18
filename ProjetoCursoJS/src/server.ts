//importando as bibliotecas necessárias pra rodar o server
import express, {Request, Response} from 'express'; //importando as funções de server e os tipos de variáveis 
import path from 'path'; //biblioteca que vem junto com o express para poder definir o dirname
import mustache from 'mustache-express'; //biblioteca que vou usar pra mostrar o resultado
import dotenv from 'dotenv'; //lib que permite eu escolher a porta que vou hospedar meu host
import MainRoutes from './routes/routes'; //importando a variável router p/ poder usar as minhas rotas

//configurando o dotenv
dotenv.config(); 

//criando o server
const server = express(); 

//habilitando o mustache
server.set('view engine', 'mustache'); 
server.set('views', path.join(__dirname,'views')); //mostrando qual a pasta que vou salvar
server.engine('mustache', mustache());

server.use(express.urlencoded({extended:true}))

//habilitando as rotas do meu arquivo separado no server
server.use(MainRoutes);

//mostra o caminho para a pasta
server.use(express.static(path.join(__dirname,'../public'))); 

//configurando o error 404
server.use((req:Request, res:Response)=>{ 
    res.status(404).send("Página não encontrada");
});

//configurando a porta do local host
server.listen(process.env.PORT); 

//Exibindo uma mensagem que abre o server no click
console.log("O server pode ser acessado através da porta " + process.env.PORT);
