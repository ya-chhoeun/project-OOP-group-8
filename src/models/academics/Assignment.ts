import { Student } from '../users/Student'; 
import { Grade } from './Grade'; 
import { Subject } from './Subject';
import { Teacher } from '../users/Teacher';


// Define the Teacher class (as per constructor requirement)

export class Assignment {
  id: number;
  dueDate: Date;
  submitted: Date | null; // Can be null if not submitted yet
  grade: Grade | null; // Use Grade class; null if not graded yet
  title: string;
  description: string;
  maxMarks: number;
  subject: Subject;
  teacher: Teacher;
  isPublished: boolean;
  students: Student[]; // List of students assigned to this assignment

  constructor(
    assignment_id: number,
    title: string,
    description: string,
    dueDate: Date,
    maxMarks: number,
    subject: Subject,
    teacher: Teacher,
  ) {
    this.id = assignment_id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.maxMarks = maxMarks;
    this.subject = subject;
    this.teacher = teacher;
    this.submitted = null; // Initially not submitted
    this.grade = null; // Initially not graded
    this.isPublished = false;
    this.students = []; // Initialize empty student list
  }

  // Publish the assignment
  publish(): void {
    this.isPublished = true;
  }

  // Unpublish the assignment
  unpublish(): void {
    this.isPublished = false;
  }

  // Check if the assignment is overdue compared to current date
  isOverdue(): boolean {
    const now = new Date();
    return now > this.dueDate;
  }

  // Update the due date
  updateDueDate(newDueDate: Date): void {
    if (newDueDate <= new Date()) {
      throw new Error("Due date must be in the future.");
    }
    this.dueDate = newDueDate;
  }

  // Update the description
  updateDescription(newDescription: string): void {
    this.description = newDescription;
  }

  // Get a short summary string of the assignment
  getSummary(): string {
    return `${this.title} (Due: ${this.dueDate.toLocaleDateString()}) - Max Marks: ${this.maxMarks}`;
  }

  // Add a student to the assignment
  addStudent(student: Student): void {
    if (!this.students.find(s => s.getId() === student.getId())) {
      this.students.push(student);
    }
  }

  // Mark the assignment as submitted by a student
  markSubmitted(): void {
    this.submitted = new Date();
  }

  // Assign a grade to the assignment
  assignGrade(grade: number, percentage: number): void {
    if (grade < 0 || grade > this.maxMarks) {
      throw new Error(`Grade must be between 0 and ${this.maxMarks}.`);
    }
    if (percentage < 0 || percentage > 100) {
      throw new Error("Percentage must be between 0 and 100.");
    }
    this.grade = new Grade(grade, percentage, "");
  }

  // Check if a specific student has submitted the assignment
  hasStudentSubmitted(student: Student): boolean {
    return this.students.some(s => s.getId() === student.getId()) && this.submitted !== null;
  }
}