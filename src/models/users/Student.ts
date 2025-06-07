
import { User, Role } from "./User";
import { Subject } from "../academics/Subject";
import { Timetable } from "../academics/Timetable";
import { Assignment } from "../academics/Assignment";
import { Grade } from "../academics/Grade";
import { Exam } from "../academics/Exam";
import { Fee } from "../operations/Fee";
import { Result } from "../operations/Result";
import { Feedback } from "../academics/Feedback";
import { Teacher } from "./Teacher";


export class Student extends User {
  public timetables: any[] = [];

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    super(id, name, email, role, password);
  }

  viewTimetable(day?: string): Timetable[] {
    const subject = new Subject("1", "Mathematics", "MATH101", "Basic math course", 3);
    return [new Timetable(1, "10:00 AM", day || "Monday", "Room A", subject)];
  }
   private fees: Fee[] = []; // 👈 Add this

  // existing constructor and methods...

  public addFee(fee: Fee): void {
    this.fees.push(fee);
  }

  public getFees(): Fee[] {
    return this.fees;
  }

  public payFee(fee: Fee): void {
    console.log(`${this.getName()} paid fee of ${fee.getAmount()}`);
    // Assuming Fee has a method to mark as paid, e.g., markAsPaid()
    if (typeof (fee as any).markAsPaid === "function") {
      (fee as any).markAsPaid();
    } else {
      // If not, set the paid property directly if accessible
      (fee as any).paid = true;
    }
  }

  public submitAssignment(assignment: any): void {
    // Simulated submission
  }

  // Removed duplicate payFee method

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

  viewResult(): Result[] {
    console.log(`${this.getName()}'s results displayed`);
    return [
      new Result(1, this.getId(), 101, 90, new Date("2025-05-01")),
      new Result(2, this.getId(), 102, 85, new Date("2025-05-02"))
    ];
  }
}
