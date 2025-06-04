 export class Parents {
    private id: number;
    private name: string;
    private email: string;
    private phone: string;
    private address: string;

    constructor(id: number, name: string, email: string, phone: string, address: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}