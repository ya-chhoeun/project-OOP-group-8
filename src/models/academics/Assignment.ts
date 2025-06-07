
// src/models/Assignment.ts
import { Student } from '../users/Student';
import { Grade } from './Grade';
import { Subject } from './Subject';
import { Teacher } from '../users/Teacher';


export class Assignment {
  private id: number;
  private title: string;
  private description: string;
  private dueDate: Date;
  private students: any[];
  private grade: any;
  private submitted: boolean;
  private maxMarks: number;
  private subject: any;
  private teacher: any;
  private isPublished: boolean;

  constructor(id: number, title: string, description: string, dueDate: Date, maxScore: number, subject: any, teacher: any) {

    this.id = id;
    this.title = title;
    this.description = description;

    this.dueDate = dueDate;

    this.maxMarks = maxScore;
    this.subject = subject;
    this.teacher = teacher;
    this.submitted = false;
    this.grade = null;
    this.isPublished = false;
    this.students = [];
  }
   public getSubject(): Subject {
    return this.subject;
  }

  publish(): void {
    this.isPublished = true;
  }
  public getTitle(): string {
    return this.title;
  }
  unpublish(): void {
    this.isPublished = false;
  }
  getGrade(): Grade | null {
  return this.grade;
}
public getDueDate(): Date {
  return this.dueDate;
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
  public getId(): string {
    return this.id.toString(); // convert number id to string
}


  addStudent(student: Student): void {
    if (!this.students.find(s => s.getId() === student.getId())) {
      this.students.push(student);
    }
  }


  markSubmitted(): void {
    this.submitted = true;
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

