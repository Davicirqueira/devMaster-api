import { procurarTarefaPorId } from "../../repository/tarefasRepository.js";

export default async function procurarTarefaPorIdService(id) {
    
    let results = await procurarTarefaPorId(id);

    if(results == 0){
        throw new Error("Nenhuma tarefa com encontrada.")
    }

    let tarefa = results[0];

    return tarefa;

}