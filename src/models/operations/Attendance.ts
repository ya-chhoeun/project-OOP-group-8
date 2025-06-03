class Attendance {
    private id: string;
    private date: Date;
    private studentName: string;
    private status: string; 

    constructor(id: string, date: Date, studentName: string, status: string) {
        this.id = id;
        this.date = date;
        this.studentName = studentName;
        this.status = status;
    }
}