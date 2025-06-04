class Grade {
    private id: number;
    private score: number;
    private comments: string;

    constructor(id: number, score: number, comments: string) {
        this.id = id;
        this.score = score;
        this.comments = comments;
    }
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public getScore(): number {
        return this.score;
    }
    public setScore(score: number): void {
        this.score = score;
    }
    public getComments(): string {
        return this.comments;
    }
    public setComments(comments: string): void {
        this.comments = comments;
    }
}