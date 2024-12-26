import con from "./connection.js";


export async function incluirTarefa(tarefa){

    const command = `
    
        insert into tb_tarefas (descricao, horario, duracao, importancia)
        values (?, ?, ?, ?)
    
    `;

    let response = await con.query(command, [tarefa.descricao, tarefa.horario, tarefa.duracao, tarefa.importancia]);
    
    let information = response[0];

    let id = information.insertId;

    return id;

}


export async function procurarTarefas(){

    const command = `
    
        select
        id_tarefa   idTarefa,
        descricao,
        horario,
        duracao,
        importancia
        from tb_tarefas

    `;

    let response = await con.query(command);

    let results = response[0];

    return results;

}


export async function procurarTarefaPorDescricao(descricao){

    const command = ` 
    
        select
        id_tarefa   idTarefa,
        descricao,
        horario,
        duracao,
        importancia
        from tb_tarefas
        where id_descricao = ?

    `;

    let response = await con.query(command, [descricao]);

    let results = response[0];

    return results;

}


export async function editarTarefa(tarefa, id){

    const command = ` 
    
        update tb_tarefas
        set descricao = ?,
        horario = ?,
        duracao = ?,
        importancia = ?
        where id_tarefa = ?

    `;

    let response = await con.query(command, [tarefa.descricao, tarefa.horario, tarefa.duracao, tarefa.importancia, id]);

    let newInformations = response[0];

    let alterRows = newInformations.affectedRows;

    return alterRows;

}


export async function deletarTarefa(id){

    const command = `
    
        delete from tb_tarefas
        where id_tarefa = ?

    `;

    let response = await con.query(command, [id]);

    let deleted = response[0];

    let alterRows = deleted.affectedRows;

    return alterRows;

}