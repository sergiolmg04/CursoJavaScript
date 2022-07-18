import { Router} from "express"; //Importando para usar as rotas em um arquivo separado do server
import * as homeControllers from "../controllers/homeControllers"; //importando tudo que tem na homeControllers

const router = Router();

router.get('/', homeControllers.FuncaoGetHome); //usando uma função da home controllers

export default router; //exportar a variável router p/ poder usar minhas rotas