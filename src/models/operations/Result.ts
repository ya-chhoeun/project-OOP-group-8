class Result {
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
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public getStudentId(): number {
        return this.studentId;
    }
    public setStudentId(studentId: number): void {
        this.studentId = studentId;
    }
    public getExamId(): number {
        return this.examId;
    }
    public setExamId(examId: number): void {
        this.examId = examId;
    }
    public getGrade(): string {
        return this.grade;
    }
    public setGrade(grade: string): void {
        this.grade = grade;
    }
    public getDate(): Date {
        return this.date;
    }
    public setDate(date: Date): void {
        this.date = date;
    }
}