import Email from './email';
import Sms from './sms';

export const MensagensTipo: any = { Email, Sms };

export enum TipoCanal {
    EMAIL = 'Email',
    SMS = 'Sms'
}

export default class Mensageiro {
    private _canal: TipoCanal = TipoCanal.EMAIL;

    public set canal(canal: TipoCanal) {
        this._canal = canal;
    }

    public get canal() {
        return this._canal;
    }

    enviarToken(): string {
        const obj = new MensagensTipo[TipoCanal.EMAIL]();
        return obj.enviar();
    }

}