import { Grade } from "../academics/Grade";
import { Student } from "../users/Student";

export class Exam {
    private examDate!: Date;
    private results!: number;
    private room !: string;
    private maxScore !: number;
    private grades: Grade[] = [];
    private students: Student[] = [];

    constructor(examDate: Date, results: number, room: string, maxScore: number) {
        this.setExamDate(examDate);
        this.setResults(results);
        this.setRoom(room);
        this.setMaxScore(maxScore);
    }


    getExamDate(): Date {
        return new Date(this.examDate);
    }

    getResults(): number {
        return this.results;
    }

    getRoom(): string {
        return this.room;
    }

    getMaxScore(): number {
        return this.maxScore;
    }

    getGrades(): Grade[] {
        return [...this.grades];
    }

    getStudents(): Student[] {
        return [...this.students];
    }

    
    setExamDate(examDate: Date): void {
        if (!(examDate instanceof Date) || isNaN(examDate.getTime())) {
            throw new Error("Invalid exam date");
        }
        this.examDate = new Date(examDate);
    }

    setResults(results: number): void {
        if (results < 0 || results > this.maxScore) {
            throw new Error("Results must be between 0 and maxScore");
        }
        this.results = results;
    }

    setRoom(room: string): void {
        if (!room || typeof room !== "string") {
            throw new Error("Room must be a non-empty string");
        }
        this.room = room;
    }

    setMaxScore(maxScore: number): void {
        if (maxScore <= 0) {
            throw new Error("Max score must be positive");
        }
        this.maxScore = maxScore;
    }


    addGrade(grade: Grade): void {
        if (!grade || grade.getScore() > this.maxScore) {
            throw new Error("Invalid grade or score exceeds maxScore");
        }
        if (this.gradeExists(grade.getId())) {
            throw new Error("Grade with this ID already exists");
        }
        this.grades.push(grade);
    }

    removeGrade(gradeId: number): void {
        this.grades = this.grades.filter(grade => grade.getId() !== gradeId);
    }

    addStudent(student: Student): void {
        if (!student) {
            throw new Error("Invalid student");
        }
        if (this.isStudentEnrolled(student.getId())) {
            throw new Error("Student already enrolled in this exam");
        }
        this.students.push(student);
    }

    removeStudent(studentId: number): void {
        this.students = this.students.filter(student => student.getId() !== studentId);
    }

    // Calculates and returns the average grade score.
    getAverageGrade(): number {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade.getScore(), 0);
        return Number((sum / this.grades.length).toFixed(2));
    }

    // Checks if a student is already enrolled in the exam.
    isStudentEnrolled(studentId: number): boolean {
        return this.students.some(student => student.getId() === studentId);
    }
    // Returns a grade by its ID, or undefined if not found.
    gradeExists(gradeId: number): boolean {
        return this.grades.some(grade => grade.getId() === gradeId);
    }

    // Checks if a grade with the given ID exists.
    getStudentById(studentId: number): Student | undefined {
        return this.students.find(student => student.getId() === studentId);
    }

    // Returns a student by their ID, or undefined if not found.
    getGradeById(gradeId: number): Grade | undefined {
        return this.grades.find(grade => grade.getId() === gradeId);
    }

    clearAllStudents(): void {
        this.students = [];
    }

    clearAllGrades(): void {
        this.grades = [];
    }

    getStudentCount(): number {
        return this.students.length;
    }

    getGradeCount(): number {
        return this.grades.length;
    }
}
