

import { Subject } from "../academics/Subject";
import { Assignment } from "../academics/Assignment";
import { User, Role } from "./User";
import { Teacher } from "./Teacher";
import { Student } from "./Student";


export class Admin extends User {
  private adminId: number;
  private teacherAssignments: Map<number, Subject> = new Map();
  private studentEnrollments: Map<number, Set<Subject>> = new Map();

  constructor(id: number, name: string, email: string, role: Role, password: string, adminId: number) {
    super(id, name, email, role, password);
    this.adminId = adminId;
  }

  public assignTeacherToSubject(teacher: Teacher, subject: Subject): void {
    if (!teacher || !subject) {
      console.error("Teacher or subject cannot be null");
      return;
    }
    this.teacherAssignments.set(teacher.getId(), subject);
    teacher.addSubject(subject); 
    console.log(`Assigned teacher ${teacher.getName()} to subject ${subject.getName()}`);
  }

  public enrollStudentInSubject(student: Student, subject: Subject): void {
    if (!student || !subject) {
      console.error("Student or subject cannot be null");
      return;
    }
    if (!this.studentEnrollments.has(student.getId())) {
      this.studentEnrollments.set(student.getId(), new Set());
    }
    this.studentEnrollments.get(student.getId())!.add(subject);
    console.log(`Enrolled student ${student.getName()} in subject ${subject.getName()}`);
  }

  public getAdminId(): number {
    return this.adminId;
  }
}

(() => {
const math = new Subject("S001", "Mathematics", "MATH101", "Basic Mathematics", 3);


 const teacher = new Teacher(
  2,
  "Mr. John",
  "john@example.com",
  "pass123",
  "098888888",
  "Phnom Penh",
  1002,
  "Mathematics"
);

  const student = new Student(3, "Alice", "alice@example.com", Role.STUDENT, "pass456");

  const admin = new Admin(1, "Admin Jane", "admin@example.com", Role.ADMIN, "adminpass", 1001);

  const assignment = new Assignment(
    1,
    "Math Homework",
    "Complete exercises 1-10",
    new Date("2025-06-10"),
    100,
    math,
    teacher
  );

  // Actions
  admin.assignTeacherToSubject(teacher, math); 
  teacher.addAssignment(assignment);           
  admin.enrollStudentInSubject(student, math); 

  // Timestamp
  const currentDate = new Date("2025-06-03T20:42:00+07:00").toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
  });

  console.log(`Current Date: ${currentDate}`);
  
})();