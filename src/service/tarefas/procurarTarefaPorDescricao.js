import { procurarTarefaPorDescricao } from "../../repository/tarefasRepository.js";

export default async function procurarTarefaPorDescricaoService(descricao) {
    
    let results = await procurarTarefaPorDescricao(descricao);

    if(results == 0){
        throw new Error("Nenhuma tarefa com esta descrição.")
    }

    let tarefa = results[0];

    return tarefa;

}