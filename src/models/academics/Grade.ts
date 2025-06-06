export class Grade {
    private id: number;
    private score: number;
    private comments: string;

    constructor(id: number, score: number, comments: string) {
        this.id = id;
        this.score = score;
        this.comments = comments;
    }

    getId(): number {
        return this.id;
    }

    getScore(): number {
        return this.score;
    }
}