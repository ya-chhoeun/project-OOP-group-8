import { User } from "./User";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Subject } from "../academics/Subject";

enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin"
}

export class Admin extends User {
  private adminId: number;
  private teacherAssignments: Map<number, Subject> = new Map();
  private studentEnrollments: Map<number, Set<Subject>> = new Map();

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    adminId: number
  ) {
    super(id, name, email, Role.ADMIN, password); // Pass Role.ADMIN explicitly
    this.adminId = adminId;
  }

  public assignTeacherToSubject(teacher: Teacher, subject: Subject): void {
    this.teacherAssignments.set(teacher.getId(), subject);
    console.log(`Assigned teacher ${teacher.getName()} to subject ${subject.subject_name}`);
  }

  public enrollStudentInSubject(student: Student, subject: Subject): void {
    if (!this.studentEnrollments.has(student.getId())) {
      this.studentEnrollments.set(student.getId(), new Set());
    }
    this.studentEnrollments.get(student.getId())!.add(subject);
    console.log(`Enrolled student ${student.getName()} in subject ${subject.subject_name}`);
  }

  public getAdminId(): number {
    return this.adminId;
  }
}
