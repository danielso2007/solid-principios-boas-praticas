export class Dados {

    id: number = 0;
    fistName: string = '';
    lastName: string = '';
    email: string = '';

    constructor(
        id: number,
        fistName: string,
        lastName: string,
        email: string
    ) {
        this.id = id;
        this.fistName = fistName;
        this.lastName = lastName;
        this.email = email;
    }

}