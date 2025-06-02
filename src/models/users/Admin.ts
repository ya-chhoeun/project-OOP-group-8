import { User } from './User';

enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin"
}
class Admin extends User {
  private adminId: number;

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    super(id, name, email, role, password);
    this.adminId = id;
  }

//   public assignTeacherToSubject(teacher: Teacher, subject: Subject): void {
//     console.log(${teacher.getName()} assigned to teach ${subject.getName()});
//   }

//   public enrollStudentInSubject(student: Student, subject: Subject): void {
//     console.log(${student.getName()} enrolled in ${subject.getName()});
//   }
}