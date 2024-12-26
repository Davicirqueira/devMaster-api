import { deletarTarefa } from "../../repository/tarefasRepository.js";

export default async function deletarTarefaService(id){

    let alterRows = await deletarTarefa(id);

    if(alterRows == 0){
        throw new Error("Nenhuma tarefa excluída.")
    }

}