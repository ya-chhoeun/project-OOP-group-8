import { Student } from "../users/Student";

export class Attendance {
  private static records: Attendance[] = []; // All attendance records

  constructor(
    private id: string,
    private studentId: number,
    private studentName: string,
    private date: Date,
    private status: string,
    private remarks?: string
  ) {}

  /**
   * Marks attendance for a student
   */
  public static mark(student: Student, date: Date, status: string, remarks?: string): void {
    const attendanceId = `${student.getId()}-${date.toISOString()}`;

    // Check if already marked
    const exists = Attendance.records.some(record =>
      record.studentId === student.getId() &&
      record.date.toDateString() === date.toDateString()
    );

    if (exists) {
      console.warn(`Attendance already marked for ${student.getName()} on ${date.toDateString()}`);
      return;
    }

    // Create and store new record
    const record = new Attendance(
      attendanceId,
      student.getId(),
      student.getName(),
      date,
      status,
      remarks
    );

    Attendance.records.push(record);
    console.log(`✅ Marked ${student.getName()} as '${status}' on ${date.toDateString()}${remarks ? ` (Remarks: ${remarks})` : ""}`);
  }

  /**
   * Returns all attendance records for a student
   */
  public static getAttendanceForStudent(student: Student): Attendance[] {
    return Attendance.records.filter(record => record.studentId === student.getId());
  }

  // --- Getters ---

  public getId(): string {
    return this.id;
  }

  public getStudentId(): number {
    return this.studentId;
  }

  public getStudentName(): string {
    return this.studentName;
  }

  public getDate(): Date {
    return this.date;
  }

  public getStatus(): string {
    return this.status;
  }


  public getRemarks(): string | undefined {
    return this.remarks;
  }
}

