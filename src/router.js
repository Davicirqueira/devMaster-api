import usuarioController from './controller/usuarioController.js';
import tarefasController from './controller/tarefasController.js';

export default function Router(servidor){

    servidor.use(usuarioController);
    servidor.use(tarefasController);

}