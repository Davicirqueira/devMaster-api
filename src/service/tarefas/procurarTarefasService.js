import { procurarTarefas } from "../../repository/tarefasRepository.js";

export default async function procurarTarefasService() {
    
    let results = await procurarTarefas();

    return results;
    
}