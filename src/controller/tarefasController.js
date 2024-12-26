import { Router } from "express";
const endpoints = Router();

import incluirTarefaService from "../service/tarefas/incluirTarefaService.js";
import procurarTarefasService from "../service/tarefas/procurarTarefasService.js";
import procurarTarefaPorIdService from "../service/tarefas/procurarTarefaPorIdService.js";
import editarTarefaService from "../service/tarefas/editarTarefaService.js";
import deletarTarefaService from "../service/tarefas/deletarTarefaService.js";


endpoints.post('/tarefas', async (req, resp) => {

    try {
    
        let tarefa = req.body;

        let id = await incluirTarefaService(tarefa);

        resp.send({

            idTarefa: id

        });

    } 
    catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }

});


endpoints.get('/tarefas', async (req, resp) => {

    try {
    
        let results = await procurarTarefasService();

        resp.send(results);

    }
    catch(err){

        resp.status(400).send({
            erro: err.message
        })

    }

});


endpoints.get('/tarefas/:id', async (req, resp) => {

    try {
       
        let id = req.params.id;

        let results = await procurarTarefaPorIdService(id);

        resp.send(results);

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

});


endpoints.put('/tarefas/:id', async (req, resp) => {

    try {
       
        let id = req.params.id;

        let tarefa = req.body;

        await editarTarefaService(tarefa, id);

        resp.send();

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

});


endpoints.delete('/tarefas/:id', async (req, resp) => {

    try {
       
        let id = req.params.id;

        await deletarTarefaService(id);

        resp.send();

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

});


export default endpoints;