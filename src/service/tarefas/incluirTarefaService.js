import { incluirTarefa } from "../../repository/tarefasRepository.js";

export default async function incluirTarefaService(tarefa){
    
    let id = await incluirTarefa(tarefa);

    return id;
    
}