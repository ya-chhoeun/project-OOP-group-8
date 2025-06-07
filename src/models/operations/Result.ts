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

    public getId(): number {
        return this.id;
    }

    public getStudentId(): number {
        return this.studentId;
    }

    public getExamId(): number {
        return this.examId;
    }

    public getGrade(): number {
        return this.grade;
    }

    public getDate(): Date {
        return this.date;
    }
}
