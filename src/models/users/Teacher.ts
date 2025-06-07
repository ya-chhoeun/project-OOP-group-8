import { User } from "./User";
import { Subject } from "../academics/Subject";
import { StudyMaterial } from "../academics/StudyMaterial";
import { Assignment } from "../academics/Assignment";
import { Student } from "../users/Student";

enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}

export class Teacher extends User {
  private subjects: Subject[] = [];
  private assignments: Assignment[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    public teacherId: number,
    public specialization: string
  ) {
    super(id, name, email, Role.TEACHER, password);
    this.phone = phone; // Assuming User class has a phone property
    this.address = address; // Assuming User class has an address property
  }

  // Consolidated method to add a subject, checking for duplicates
  public addSubject(subject: Subject): void {
    if (!this.subjects.find((s) => s.getId() === subject.getId())) {
      this.subjects.push(subject);
      console.log(`Subject ${subject.getName()} assigned to teacher ${this.getName()}`);
    } else {
      console.log(`Subject ${subject.getName()} is already assigned to teacher ${this.getName()}`);
    }
  }

  // Upload study material for a subject
  public uploadMaterial(subject: Subject, material: StudyMaterial): void {
    if (!this.subjects.find((s) => s.getId() === subject.getId())) {
      throw new Error("Not authorized to upload for this subject.");
    }
    console.log(`Material uploaded for ${subject.getName()}: ${material.getTitle()}`);
  }

  // Add an assignment with validation
  public addAssignment(assignment: Assignment): void {
    if (!this.subjects.find((s) => s.getId() === assignment.subject.getId())) {
      throw new Error("Not authorized to add assignment for this subject.");
    }
    if (!this.assignments.find((a) => a.id === assignment.id)) {
      this.assignments.push(assignment);
      console.log(`Assignment added: ${assignment.title}`);
    } else {
      console.log(`Assignment ${assignment.title} is already added.`);
    }
  }

  // View a student's grade for an assignment
  public viewStudentGrade(student: Student, assignment: Assignment): void {
    // Check if the teacher is authorized for the assignment's subject
    if (!this.subjects.find((s) => s.getId() === assignment.subject.getId())) {
      throw new Error("Not authorized to view grades for this assignment's subject.");
    }
    // Check if the student is assigned to the assignment
    if (!assignment.students.find((s) => s.getId() === student.getId())) {
      throw new Error(`${student.getName()} is not assigned to this assignment.`);
    }
    const grade = assignment.getGrade();
    if (grade !== null && grade !== undefined) {
      console.log(`${student.getName()} scored ${grade.grade} (${grade.percentage}%) on ${assignment.title}`);
      if (grade.comment) {
        console.log(`Comment: ${grade.comment}`);
      }
    } else {
      console.log(`${student.getName()} has no grade yet for ${assignment.title}.`);
    }
  }

  // Get the list of subjects
  public getSubjects(): Subject[] {
    return this.subjects;
  }

  // Get the teacher's role
  public getSpecificRole(): string {
    return Role.TEACHER;
  }
}