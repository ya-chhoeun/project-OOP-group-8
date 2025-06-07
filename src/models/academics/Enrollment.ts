import { Student } from "../users/Student";
import { Subject } from "../academics/Subject";
import { Classroom } from "./Classroom";

export class Enrollment {
  private id: string;
  private student: Student;
  private subject: Subject;
  private classroom: Classroom;
  private enrollmentDate: Date;
  private isActive: boolean;

  constructor(id: string, student: Student, subject: Subject, classroom: Classroom) {
    this.id = id;
    this.student = student;
    this.subject = subject;
    this.classroom = classroom;
    this.enrollmentDate = new Date();
    this.isActive = true;

    this.validateEnrollment();
    this.registerWithSubjectAndClassroom();
  }

  private validateEnrollment(): void {
    if (!this.classroom.getSubjects().some(s => s.getId() === this.subject.getId())) {
      throw new Error("Subject is not assigned to this classroom.");
    }

    const enrolledCount = this.classroom.getEnrollments().length;
    if (enrolledCount >= this.classroom.getCapacity()) {
      throw new Error("Cannot enroll: classroom is at full capacity.");
    }

    const alreadyEnrolled = this.subject.isStudentEnrolled(this.student);
    if (alreadyEnrolled) {
      throw new Error("Student is already enrolled in this subject.");
    }
  }

  private registerWithSubjectAndClassroom(): void {
    this.subject.enrollStudent(this.student);
    this.subject.addEnrollment(this);
    this.classroom.addEnrollment(this);
  }

  public getId(): string {
    return this.id;
  }

  public getStudent(): Student {
    return this.student;
  }

  public getSubject(): Subject {
    return this.subject;
  }

  public getClassroom(): Classroom {
    return this.classroom;
  }

  public getEnrollmentDate(): Date {
    return this.enrollmentDate;
  }

  public isEnrollmentActive(): boolean {
    return this.isActive;
  }

  public withdraw(): void {
    this.isActive = false;
    this.subject.unenrollStudent(this.student);
    // Optionally remove from classroom if needed
  }

  public toString(): string {
    return `Enrollment [ID: ${this.id}, Student: ${this.student.getName()}, Subject: ${this.subject.getName()}, Classroom: ${this.classroom.getRoomNumber()}, Active: ${this.isActive}]`;
  }
}
