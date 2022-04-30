import log from "../componentes/log";
import notificacao from "../componentes/notificacao";
import DB from "../db/db";
import ICadastro from "../interfaces/cadastro";
import ILog from "../interfaces/log";
import INotificacao from "../interfaces/notificacao";

export default class UsuarioDao extends DB implements ICadastro, ILog, INotificacao {
    enviarNotificacao(notificacao: notificacao): void {
        throw new Error("Method not implemented.");
    }
    registrarLog(log: log): void {
        throw new Error("Method not implemented.");
    }
    sala(): void {
        throw new Error("Method not implemented.");
    }
}
