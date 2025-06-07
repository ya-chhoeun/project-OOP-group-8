import { User } from "./User";
import { Subject } from "../academics/Subject";
import { Timetable } from "../academics/Timetable";
import { Assignment } from "../academics/Assignment";
import { Grade } from "../academics/Grade";
import { Exam } from "../academics/Exam";
import { Fee } from "../operations/Fee";
import { Result } from "../operations/Result";
import { Feedback } from "../academics/Feedback";
import { Teacher } from "./Teacher";

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
    const subject = new Subject("1", "Mathematics", "MATH101", "Basic math course", 3);
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
      new Exam(new Date("2023-12-01"), 0, "Room A", 100),
      new Exam(new Date("2023-12-05"), 0, "Room B", 100)
    ];
  }

  giveFeedback(subject: Subject, teacher: Teacher, rating: number, comment: string): Feedback {
    const feedback = new Feedback(
      `${this.getId()}-${subject.getId()}-${teacher.getId()}`,
      this,
      teacher,
      subject,
      rating,
      comment
    );
    console.log(`Feedback submitted: ${feedback.toString()}`);
    return feedback;
  }

  payFee(fee: Fee): void {
    console.log(`${this.getName()} paid fee of ${fee.getAmount()}`);
  }

  viewResult(): Result[] {
    console.log(`${this.getName()}'s results displayed`);
    return [
      new Result(1, this.getId(), 101, 90, new Date("2025-05-01")),
      new Result(2, this.getId(), 102, 85, new Date("2025-05-02"))
    ];
  }
}
