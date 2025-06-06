import { User } from "./User";
import { Subject } from "../academics/Subject";
import { StudyMaterial } from "../academics/StudyMateria";
import { Assignment } from "../academics/Assignment";
import { Student } from "../users/Student";


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
    phone: string,
    address: string,
    public teacherId: number,
    public specialization: string
  ) {
    super(id, name, email, Role.TEACHER, password);
    // You may want to initialize phone and address here if needed
  }
  public assignSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  public uploadMaterial(subject: Subject, material: StudyMaterial): void {
    if (!this.subjects.includes(subject)) {
      throw new Error("Not authorized to upload for this subject.");
    }
    console.log(`Material uploaded for ${subject.getName()}: ${material.getTitle()}`);
  }

  private assignments: Assignment[] = [];

public addAssignment(assignment: Assignment): void {
  this.assignments.push(assignment);
  console.log(`Assignment added: ${assignment.title}`);
}


  // Inside Teacher.ts
public viewStudentGrade(student: Student, assignment: Assignment): void {
  const grade = assignment.getGrade();
  if (grade !== null && grade !== undefined) {
    console.log(`${student.getName()} scored ${grade.getScore()}`); // or grade.value or grade.score depending on your Grade class
  } else {
    console.log(`${student.getName()} has no grade yet.`);
  }
}


  public addSubject(subject: Subject): void {
    // Assuming Subject has a public getId() method
    if (!this.subjects.find((s) => s.getId() === subject.getId())) {
      this.subjects.push(subject)
    }
  }

  public getSubjects(): Subject[] {
    return this.subjects;
  }

  public getSpecificRole(): string {
    return Role.TEACHER;
  }
}