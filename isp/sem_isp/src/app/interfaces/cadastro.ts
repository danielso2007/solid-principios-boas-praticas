import Log from "../componentes/log";
import Notificacao from "../componentes/notificacao";

export default interface ICadastro {
    sala(): void;
    registrarLog(log: Log): void;
    enviarNotificacao(notificacao: Notificacao): void;
}