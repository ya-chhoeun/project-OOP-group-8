import { User } from "./User";
import { Subject } from "../academics/Subject";
import { StudyMaterial } from "../academics/StudyMateria";
import { Assignment } from "../academics/Assignment";
import { Student } from "./Student";

enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin"
}

export class Teacher extends User {
  private subjects: Subject[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    public teacherId: number,
    public specialization: string
  ) {
    super(id, name, email, Role.TEACHER, password); 
  }

  public assignSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  public uploadMaterial(subject: Subject, material: StudyMaterial): void {
    if (!this.subjects.includes(subject)) {
      throw new Error("Not authorized to upload for this subject.");
    }
    console.log(`Material uploaded for ${subject.getName}: ${material.getTitle()}`);
  }

  public createAssignment(subject: Subject, assignment: Assignment): void {
    if (!this.subjects.includes(subject)) {
      throw new Error("Not authorized to create assignment for this subject.");
    }
    console.log(`Assignment created: ${assignment.title}`);
  }

  public viewStudentGrade(student: Student, assignment: Assignment): void {
    const grade = assignment.grades.get(student);
    if (grade !== undefined) {
      console.log(`${student.getName()} scored ${grade}`);
    } else {
      console.log(`${student.getName()} has no grade yet.`);
    }
  }

  public getSubjects(): Subject[] {
    return this.subjects;
  }
}
