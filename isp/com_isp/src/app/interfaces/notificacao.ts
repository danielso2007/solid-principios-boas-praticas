import Notificacao from "../componentes/notificacao";

export default interface INotificacao {
    enviarNotificacao(notificacao: Notificacao): void;
}