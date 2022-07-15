import { Router, Request, Response } from "express"; //permite usar as rotas em um arquivo separado do server
import * as DashboardsControllers from "../controllers/DashboardsControllers";
import * as homeControllers from "../controllers/homeControllers"; //importando TUDO que tem na homecontrollers

const router = Router();
//os métodos podem ser GET, POST, PUT e DELETE
router.get('/', homeControllers.FuncaoGetHome); //usando uma função da home controllers
router.get('/TendaA10', DashboardsControllers.SemDash);

//router.get('/AderenciaProgramacao', DashboardsControllers.SemDash);

//router.get('/AndamentoAvaliacoes', DashboardsControllers.SemDash);

export default router; //exportar a variável router p/ poder usar minhas rotas