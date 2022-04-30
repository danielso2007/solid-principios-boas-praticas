import * as uuid from 'uuid';
import IMensagemToken from './mensagem.interface';

export default class Sms implements IMensagemToken {

    enviar(): string {
        const token = uuid.v4();
        return `SMS: seu token é ${token}`;
    }

}