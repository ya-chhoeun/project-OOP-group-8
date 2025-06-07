import { User, Role } from './User';

export class Student extends User {
  public timetables: any[] = [];

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    super(id, name, email, role, password);
  }

  // Placeholder methods from original main.ts
  public submitAssignment(assignment: any): void {
    // Simulated submission
  }

  public payFee(fee: any): void {
    fee.setStatus("paid");
  }

  public viewGrade(): any[] {
    return [{ getId: () => "grade1", getScore: () => 85 }, { getId: () => "grade2", getScore: () => 90 }];
  }

  public viewResult(): any[] {
    return [{ getId: () => "result1", getGrade: () => "A" }];
  }

  public viewTimetable(day: string): any[] {
    return this.timetables || [];
  }
}