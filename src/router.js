import usuarioController from './controller/usuarioController.js';

export default function Router(servidor){

    servidor.use(usuarioController);

}