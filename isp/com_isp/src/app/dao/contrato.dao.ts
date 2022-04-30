import log from "../componentes/log";
import DB from "../db/db";
import ICadastro from "../interfaces/cadastro";
import ILog from "../interfaces/log";

export default class ContratoDao extends DB implements ICadastro, ILog {
    sala(): void {
        throw new Error("Method not implemented.");
    }
    registrarLog(log: log): void {
        throw new Error("Method not implemented.");
    }
}