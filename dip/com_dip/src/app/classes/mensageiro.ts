import IMensagemToken from './mensagem.interface';

export default class Mensageiro {
    private canal: IMensagemToken;

    constructor(canal: IMensagemToken) {
        this.canal = canal;
    }

    enviarToken(): string {
        return this.canal.enviar();
    }

}