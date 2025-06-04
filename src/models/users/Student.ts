import { User } from "./User";
import { Teacher } from "./Teacher";
import { Subject } from "../academics/Subject";
import { Timetable } from "../academics/Timetable";
import { Assignment } from "../academics/Assignment";
import { Grade } from "../academics/Grade";
import { Exam } from "../academics/Exam";
import { Fee } from "../operations/Fee";
import { Result } from "../operations/Result";
//     

enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin"
}
export class Student extends User {
  private studentId: number;

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    super(id, name, email, role, password);
    this.studentId = id;
  }

  viewTimetable(day?: string): Timetable[] {
    const timetableEntry = day ? `Timetable for ${day}` : "Default Timetable";
    return [new Timetable(1, "10:00 AM", day || "Monday", "Room A")];
  }

  submitAssignment(assignment: Assignment): Assignment {
    console.log(`Assignment submitted by ${this.getName()}`);
    return assignment;
  }

  viewGrade(): Grade[] {
    console.log(`${this.getName()}'s grades displayed`);
    return [
      new Grade(1, 95, "Excellent performance"),
      new Grade(2, 88, "Good understanding of concepts")
    ];
  }

  viewExamSchedule(): Exam[] {
    console.log(`${this.getName()}'s exam schedule displayed`);
    return [
      new Exam(new Date("2023-12-01"), 101, "Room A", 100),
      new Exam(new Date("2023-12-05"), 102, "Room B", 100)
    ];
  }


  giveFeedback(subject: Subject, teacher: User): void {
    console.log(`Feedback given by ${this.getName()} for ${subject.getName()} taught by ${teacher.getName()}`);
  }
  payFee(fee: Fee): void {
    console.log(`${this.getName()} paid fee of ${fee.getAmount()}`);
  }
  viewResult(): Result[] {
    console.log(`${this.getName()}'s results displayed`);
    return [
      new Result(1, this.getId(), 101, 90, new Date('2025-05-01')),
      new Result(2, this.getId(), 102, 85, new Date('2025-05-02'))
    ];
  }
}


