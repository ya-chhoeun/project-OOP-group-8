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

    // Getters
    getExamDate(): Date {
        return new Date(this.examDate); // Return a copy to prevent external modification
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
        return [...this.grades]; // Return a copy to prevent external modification
    }

    getStudents(): Student[] {
        return [...this.students]; // Return a copy to prevent external modification
    }

    // Setters with validation
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

    // Methods to manage relationships
    addGrade(grade: Grade): void {
        if (!grade || grade.getScore() > this.maxScore) {
            throw new Error("Invalid grade or score exceeds maxScore");
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
        this.students.push(student);
    }

    removeStudent(studentId: number): void {
        this.students = this.students.filter(student => student.getId() !== studentId);
    }

    // Additional useful method
    getAverageGrade(): number {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade.getScore(), 0);
        return Number((sum / this.grades.length).toFixed(2));
    }
    printDetails(): void {
        console.log(`Exam Date: ${this.getExamDate().toLocaleDateString()}`);
        console.log(`Room: ${this.getRoom()}`);
        console.log(`Max Score: ${this.getMaxScore()}`);
        console.log(`Results: ${this.getResults()}`);
        console.log(`Average Grade: ${this.getAverageGrade()}`);
        console.log(`Number of Students: ${this.getStudents().length}`);
    }
}