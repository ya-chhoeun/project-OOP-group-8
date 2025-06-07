import { User, Role } from "./User";
import { Subject } from "../academics/Subject";
import { StudyMaterial } from "../academics/StudyMateria"; // Fixed typo
import { Assignment } from "../academics/Assignment";
import { Student } from "../users/Student";

export class Teacher extends User {
  private subjects: Subject[] = [];
  private assignments: Assignment[] = [];
  public phone: string;
  public address: string;

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
    this.phone = phone;
    this.address = address;
  }

  public addSubject(subject: Subject): void {
    if (!this.subjects.find((s) => s.getId() === subject.getId())) {
      this.subjects.push(subject);
      console.log(`Subject ${subject.getName()} assigned to teacher ${this.getName()}`);
    } else {
      console.log(`Subject ${subject.getName()} is already assigned.`);
    }
  }

  public uploadMaterial(subject: Subject, material: StudyMaterial): void {
    if (!this.subjects.find((s) => s.getId() === subject.getId())) {
      throw new Error("Not authorized to upload for this subject.");
    }
    console.log(`Material uploaded for ${subject.getName()}: ${material.getTitle()}`);
  }

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


  public viewStudentGrade(student: Student, assignment: Assignment): void {

    if (!this.subjects.find((s) => s.getId() === assignment.subject.getId())) {
      throw new Error("Not authorized to view grades for this assignment's subject.");
    }
    
    if (!assignment.students.find((s) => s.getId() === student.getId())) {
      throw new Error(`${student.getName()} is not assigned to this assignment.`);
    }
    const grade = assignment.getGrade();
    if (grade !== null && grade !== undefined) {
      console.log(`${student.getName()} scored ${grade.getScore()} on ${assignment.title}`);
      // Uncomment the following lines if 'comment' exists on Grade type
      // if (grade.comment) {
      //   console.log(`Comment: ${grade.comment}`);
      // }
    } else {
      console.log(`${student.getName()} has no grade yet for ${assignment.title}`);
    }
  }


  public getSubjects(): Subject[] {
    return this.subjects;
  }


  public getSpecificRole(): string {
    return Role.TEACHER;
  }
}