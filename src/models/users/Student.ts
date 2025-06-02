import { User } from "./User";
enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin"
}
class Student extends User {
  private studentId: number;

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    super(id, name, email, role, password);
    this.studentId = id;
  }

    // public viewTimetable(day?: string): Timetable[] {
    //   const timetableEntry = day ? `Timetable for ${day}` : "Default Timetable";
    //   return [new Timetable([timetableEntry])];
    // }

    // public submitAssignment(assignment: Assignment): Assignment {
    //   console.log(`Assignment submitted by ${this.name}`);
    //   return assignment;
    // }

    // public viewGrade(): void {
    //   console.log(`${this.name}'s grades displayed`);
    // }

    // public viewExamSchedule(): void {
    //   console.log(`${this.name}'s exam schedule displayed`);
    // }

    // public giveFeedback(subject: Subject, teacher: Teacher): void {
    //   console.log(`Feedback given by ${this.name} for ${subject.getName()} taught by ${teacher.getName()}`);
    // }
}