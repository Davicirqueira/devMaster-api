import { Router } from "express";
const endpoints = Router();

import incluirTarefaService from "../service/tarefas/incluirTarefaService.js";
import procurarTarefasService from "../service/tarefas/procurarTarefasService.js";
import editarTarefaService from "../service/tarefas/editarTarefaService.js";
import deletarTarefaService from "../service/tarefas/deletarTarefaService.js";


export default endpoints;