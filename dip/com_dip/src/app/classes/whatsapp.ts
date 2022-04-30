import * as uuid from 'uuid';
import IMensagemToken from './mensagem.interface';

export default class Whatsapp implements IMensagemToken {

    enviar(): string {
        const token = uuid.v4();
        return `Whatsapp: seu token é ${token}`;
    }

}