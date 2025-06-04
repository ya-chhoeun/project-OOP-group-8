export class Result {
    private id: number;
    private studentId: number;
    private examId: number;
    private grade: number;
    private date: Date;


    constructor(id: number, studentId: number, examId: number, grade: number, date: Date) {
        this.id = id;
        this.studentId = studentId;
        this.examId = examId;
        this.grade = grade;
        this.date = date;
    }
}
