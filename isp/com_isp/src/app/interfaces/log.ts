import Log from "../componentes/log";

export default interface ILog {
    registrarLog(log: Log): void;
}