import { Exam } from "../academics/Exam";
import { Assignment } from "../academics/Assignment";
import { Student } from "../users/Student";

export interface Grade {
    getId(): number;
    getScore(): number;
    getComment(): string;
    getStudent(): Student | null;
    getExam(): Exam | null;
    getAssignment(): Assignment | null;
}

export class Grade implements Grade {
    private id: number;
    private score: number;
    private comment: string;
    private student: Student | null;
    private exam: Exam | null;
    private assignment: Assignment | null;

    constructor(id: number, score: number, comment: string, student?: Student, exam?: Exam, assignment?: Assignment) {
        if (id <= 0 || !Number.isInteger(id)) {
            throw new Error("Invalid ID: must be a positive integer");
        }
        if (score < 0 || !Number.isFinite(score)) {
            throw new Error("Invalid score: must be a non-negative number");
        }
        if (!comment || typeof comment !== "string") {
            throw new Error("Invalid comment: must be a non-empty string");
        }

        this.id = id;
        this.score = score;
        this.comment = comment;
        this.student = student || null;
        this.exam = exam || null;
        this.assignment = assignment || null;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getScore(): number {
        return this.score;
    }

    getComment(): string {
        return this.comment;
    }

    getStudent(): Student | null {
        return this.student;
    }

    getExam(): Exam | null {
        return this.exam;
    }

    getAssignment(): Assignment | null {
        return this.assignment;
    }

    // Setters
    setScore(score: number): void {
        if (score < 0 || !Number.isFinite(score)) {
            throw new Error("Invalid score: must be a non-negative number");
        }
        if (this.exam && score > this.exam.getMaxScore()) {
            throw new Error(`Score exceeds exam max score of ${this.exam.getMaxScore()}`);
        }
        // Removed assignment validation since we cannot access getMaxMarks() without modifying Assignment
        this.score = score;
    }

    setComment(comment: string): void {
        if (!comment || typeof comment !== "string") {
            throw new Error("Invalid comment: must be a non-empty string");
        }
        this.comment = comment;
    }

    setStudent(student: Student | null): void {
        this.student = student;
    }

    setExam(exam: Exam | null): void {
        this.exam = exam;
    }

    setAssignment(assignment: Assignment | null): void {
        this.assignment = assignment;
    }
}