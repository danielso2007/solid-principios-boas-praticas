import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmailService {

    constructor() { }

    dispararEmail(): string {
        return 'enviando e-mail de confirmação...';
    }

}