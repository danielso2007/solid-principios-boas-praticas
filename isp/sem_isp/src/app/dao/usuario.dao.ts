import log from "../componentes/log";
import DB from "../db/db";
import ICadastro from "../interfaces/cadastro";

export default class UsuarioDao extends DB implements ICadastro {
    sala(): void {
        throw new Error("Method not implemented.");
    }
    registrarLog(log: log): void {
        throw new Error("Method not implemented.");
    }
    enviarNotificacao(notificacao: Notification): void {
        throw new Error("Method not implemented.");
    }
}
