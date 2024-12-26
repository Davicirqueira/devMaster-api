import { editarTarefa } from "../../repository/tarefasRepository.js";

export default async function editarTarefaService(tarefa, id){

    let alterRows = await editarTarefa(tarefa, id);

    if(alterRows == 0){
        throw new Error("Nenhuma tarefa modificada.");
    }

}