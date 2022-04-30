import * as uuid from 'uuid';
import IMensagemToken from './mensagem.interface';

export default class Email implements IMensagemToken {

    enviar(): string {
        const token = uuid.v4();
        return `E-mail: seu token é ${token}`;
    }

}