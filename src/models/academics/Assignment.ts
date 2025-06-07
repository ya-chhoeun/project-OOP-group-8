// src/models/Assignment.ts
import { Student } from '../users/Student';
import { Grade } from './Grade';
import { Subject } from './Subject';
import { Teacher } from '../users/Teacher';

export class Assignment {
  id: number;
  dueDate: Date;
  submitted: Date | null;
  grade: Grade | null;
  title: string;
  description: string;
  maxMarks: number;
  subject: Subject;
  teacher: Teacher;
  isPublished: boolean;
  students: Student[];

  constructor(
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    maxMarks: number,
    subject: Subject,
    teacher: Teacher,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.maxMarks = maxMarks;
    this.subject = subject;
    this.teacher = teacher;
    this.submitted = null;
    this.grade = null;
    this.isPublished = false;
    this.students = [];
  }

  publish(): void {
    this.isPublished = true;
  }

  unpublish(): void {
    this.isPublished = false;
  }

  isOverdue(): boolean {
    const now = new Date();
    return now > this.dueDate;
  }

  updateDueDate(newDueDate: Date): void {
    if (newDueDate <= new Date()) {
      throw new Error("Due date must be in the future.");
    }
    this.dueDate = newDueDate;
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
  }

  getSummary(): string {
    return `${this.title} (Due: ${this.dueDate.toLocaleDateString()}) - Max Marks: ${this.maxMarks}`;
  }

  addStudent(student: Student): void {
    if (!this.students.find(s => s.getId() === student.getId())) {
      this.students.push(student);
    }
  }

  markSubmitted(): void {
    this.submitted = new Date();
  }

  assignGrade(grade: number, percentage: number, comment: string = ""): void {
    if (grade < 0 || grade > this.maxMarks) {
      throw new Error(`Grade must be between 0 and ${this.maxMarks}.`);
    }
    if (percentage < 0 || percentage > 100) {
      throw new Error("Percentage must be between 0 and 100.");
    }
    this.grade = new Grade(grade, percentage, comment);
  }

  hasStudentSubmitted(student: Student): boolean {
    return this.students.some(s => s.getId() === student.getId()) && this.submitted !== null;
  }
}