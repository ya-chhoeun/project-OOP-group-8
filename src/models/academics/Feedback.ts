class Feedback {
    private rating: number;
    private comment: string;
    private date: Date;

    constructor(rating: number, comment: string, date: Date) {
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }
}