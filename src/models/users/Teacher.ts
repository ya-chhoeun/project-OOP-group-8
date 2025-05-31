export abstract class Teacher {
    private teacherId: string;
    private specialization: string;

    constructor (teacherId: string, specialization: string) {
        this.teacherId = teacherId;
        this.specialization = specialization;
    }
}