 export class Fee {
    private id: number;
    private amount: number;
    private dueDate: Date;
    private status: string;

    constructor(id: number, amount: number, dueDate: Date, status: string) {
        this.id = id;
        this.amount = amount;
        this.dueDate = dueDate;
        this.status = status;
    }
}