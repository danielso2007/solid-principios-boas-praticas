import DB from "../db/db";
import ICadastro from "../interfaces/cadastro";
import INotificacao from "../interfaces/notificacao";

export default class LeadDao extends DB implements ICadastro, INotificacao {
    sala(): void {
        throw new Error("Method not implemented.");
    }
    enviarNotificacao(notificacao: Notification): void {
        throw new Error("Method not implemented.");
    }
}
