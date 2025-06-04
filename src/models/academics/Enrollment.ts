 export class Enrollment {
    private id: number;
    
    constructor(id: number) {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
}