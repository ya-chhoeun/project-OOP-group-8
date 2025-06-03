class Exam {
    private examDate: Date;
    private result: number;
    private room: string;
    private maxScore: number;

    constructor(examDate: Date, result: number, room: string, maxScore: number) {
        this.examDate = examDate;
        this.result = result;
        this.room = room;
        this.maxScore = maxScore;
    }

}