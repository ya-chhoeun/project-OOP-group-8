export class Result {
    private id: number;
    private studentId: number;
    private examId: number;
    private grade: string;
    private date: Date;


    constructor(id: number, studentId: number, examId: number, grade: string, date: Date) {
        this.id = id;
        this.studentId = studentId;
        this.examId = examId;
        this.grade = grade;
        this.date = date;
    }
}