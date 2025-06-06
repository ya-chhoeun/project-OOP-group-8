import { Student } from './models/users/Student';
import { Teacher } from './models/users/Teacher';
import { Admin } from './models/users/Admin';
import { Subject } from './models/academics/Subject';
import { Assignment } from './models/academics/Assignment';
import { Timetable } from './models/academics/Timetable';
import { Enrollment } from './models/academics/Enrollment';
import { StudyMaterial } from './models/academics/StudyMateria'; // Fixed typo
import { Feedback } from './models/academics/Feedback';
import { Attendance } from './models/operations/Attendance';
import { Fee } from './models/operations/Fee';
import { Parents } from './models/operations/Parents';
import { Role } from './models/users/User';

// Define the result structure type for better TypeScript support
interface Result {
  subjects: { id: string; name: string; credits: number }[];
  teachers: { id: number; name: string; specialization: string; teacherId: number; isLoggedIn: boolean }[];
  students: { id: number; name: string; isLoggedIn: boolean }[];
  admins: { id: number; name: string; isLoggedIn: boolean }[];
  enrollments: { id: string; studentId: number; subjectId: string }[];
  assignments: { id: number; title: string; dueDate: string }[];
  grades: { id: string | null; assignmentId: number; studentId: number; score: number | null }[];
  timetables: { id: number; subjectId: string; day: string; time: string; room: string }[];
  studyMaterials: {
    id: string;
    title: string;
    materialType: string;
    uploadedBy: string;
    subjectId: string;
    description: string;
    fileUrl: string;
    uploadDate: string;
    summary: string;
  }[];
  feedback: {
    id: string;
    fromStudentId: number;
    toTeacherId: number;
    subjectId: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  attendanceRecords: { id: string; studentId: number; subjectId: string; status: string; date: string; remarks?: string }[];
  fees: { id: number; amount: number; dueDate: string; status: string }[];
  parents: { id: string; name: string; relationship: string; contact: string; childrenIds: number[] }[];
  authEvents: { action: string; userId: number; role: Role; success: boolean; message: string; timestamp: string }[];
  studentRecords: { [key: number]: { grades: { id: string; score: number }[]; results: { id: string; grade: string }[]; timetable: { id: number; subjectId: string; time: string; room: string }[] } };
  assignmentStatus: { [key: string]: { id: number; overdue: boolean; student1Submitted: boolean } };
}

// Main execution function
function main(): Result {
  const result: Result = {
    subjects: [],
    teachers: [],
    students: [],
    admins: [],
    enrollments: [],
    assignments: [],
    grades: [],
    timetables: [],
    studyMaterials: [],
    feedback: [],
    attendanceRecords: [],
    fees: [],
    parents: [],
    authEvents: [],
    studentRecords: {},
    assignmentStatus: {}
  };

  // Set current date and time (01:16 AM +07, June 07, 2025) in UTC
  const currentDate = new Date("2025-06-07T01:16:00+07:00").toISOString();

  // Create Subjects
  const OOP = new Subject("OOP", "OOP", "OOP", "Advanced OOP Course", 4);
  const PL = new Subject("PL", "PL", "PL", "Introduction to PL", 3);
  const chemistry = new Subject("CHEM101", "Chemistry", "CHEM101", "Basic Chemistry", 3);

  result.subjects.push(
    { id: OOP.getId(), name: OOP.getName(), credits: OOP.getCredits() },
    { id: PL.getId(), name: PL.getName(), credits: PL.getCredits() },
    { id: chemistry.getId(), name: chemistry.getName(), credits: chemistry.getCredits() }
  );

  // Create Teachers
  const mathTeacher = new Teacher(
    101,
    "Dr. Sarah Johnson",
    "sarah.johnson@school.edu",
    "password123",
    "+1-555-0101",
    "123 Academic St, Education City",
    1001,
    "Mathematics"
  );

  const PLTeacher = new Teacher(
    102,
    "Prof. Michael Chen",
    "michael.chen@school.edu",
    "password456",
    "+1-555-0102",
    "456 Science Ave, Education City",
    1002,
    "PL"
  );

  // Register Teachers
  const mathTeacherRegister = mathTeacher.register();
  result.authEvents.push({
    action: "register",
    userId: mathTeacher.getId(),
    role: mathTeacher.getRole(),
    success: mathTeacherRegister.success,
    message: mathTeacherRegister.message,
    timestamp: currentDate
  });

  const PLTeacherRegister = PLTeacher.register();
  result.authEvents.push({
    action: "register",
    userId: PLTeacher.getId(),
    role: PLTeacher.getRole(),
    success: PLTeacherRegister.success,
    message: PLTeacherRegister.message,
    timestamp: currentDate
  });

  // Teachers Login
  const mathTeacherLogin = mathTeacher.login("sarah.johnson@school.edu", "password123");
  result.authEvents.push({
    action: "login",
    userId: mathTeacher.getId(),
    role: mathTeacher.getRole(),
    success: mathTeacherLogin.success,
    message: mathTeacherLogin.message,
    timestamp: currentDate
  });

  const PLTeacherLogin = PLTeacher.login("michael.chen@school.edu", "wrongpassword");
  result.authEvents.push({
    action: "login",
    userId: PLTeacher.getId(),
    role: PLTeacher.getRole(),
    success: PLTeacherLogin.success,
    message: PLTeacherLogin.message,
    timestamp: currentDate
  });

  result.teachers.push(
    { id: mathTeacher.getId(), name: mathTeacher.getName(), specialization: mathTeacher.specialization, teacherId: mathTeacher.teacherId, isLoggedIn: mathTeacher.isAuthenticated() },
    { id: PLTeacher.getId(), name: PLTeacher.getName(), specialization: PLTeacher.specialization, teacherId: PLTeacher.teacherId, isLoggedIn: PLTeacher.isAuthenticated() }
  );

  // Assign subjects to teachers
  mathTeacher.addSubject(OOP);
  PLTeacher.addSubject(PL);

  // Create Students
  const student1 = new Student(201, "Alice Smith", "alice.smith@student.edu", Role.STUDENT, "studentpass1");
  const student2 = new Student(202, "Bob Wilson", "bob.wilson@student.edu", Role.STUDENT, "studentpass2");
  const student3 = new Student(203, "Carol Davis", "carol.davis@student.edu", Role.STUDENT, "studentpass3");

  // Register Students
  const student1Register = student1.register();
  result.authEvents.push({
    action: "register",
    userId: student1.getId(),
    role: student1.getRole(),
    success: student1Register.success,
    message: student1Register.message,
    timestamp: currentDate
  });

  const student2Register = student2.register();
  result.authEvents.push({
    action: "register",
    userId: student2.getId(),
    role: student2.getRole(),
    success: student2Register.success,
    message: student2Register.message,
    timestamp: currentDate
  });

  // Students Login
  const student1Login = student1.login("alice.smith@student.edu", "studentpass1");
  result.authEvents.push({
    action: "login",
    userId: student1.getId(),
    role: student1.getRole(),
    success: student1Login.success,
    message: student1Login.message,
    timestamp: currentDate
  });

  const student2Login = student2.login("bob.wilson@student.edu", "wrongpass");
  result.authEvents.push({
    action: "login",
    userId: student2.getId(),
    role: student2.getRole(),
    success: student2Login.success,
    message: student2Login.message,
    timestamp: currentDate
  });

  result.students.push(
    { id: student1.getId(), name: student1.getName(), isLoggedIn: student1.isAuthenticated() },
    { id: student2.getId(), name: student2.getName(), isLoggedIn: student2.isAuthenticated() },
    { id: student3.getId(), name: student3.getName(), isLoggedIn: student3.isAuthenticated() }
  );

  // Create Admin
  const admin = new Admin(301, "Admin One", "admin@school.edu", "adminpass1");

  // Register and Login Admin
  const adminRegister = admin.register();
  result.authEvents.push({
    action: "register",
    userId: admin.getId(),
    role: admin.getRole(),
    success: adminRegister.success,
    message: adminRegister.message,
    timestamp: currentDate
  });

  const adminLogin = admin.login("admin@school.edu", "adminpass1");
  result.authEvents.push({
    action: "login",
    userId: admin.getId(),
    role: admin.getRole(),
    success: adminLogin.success,
    message: adminLogin.message,
    timestamp: currentDate
  });

  result.admins.push(
    { id: admin.getId(), name: admin.getName(), isLoggedIn: admin.isAuthenticated() }
  );

  // Create Enrollments
  const enrollment1 = new Enrollment("ENR001", student1, OOP);
  const enrollment2 = new Enrollment("ENR002", student1, PL);
  const enrollment3 = new Enrollment("ENR003", student2, OOP);

  result.enrollments.push(
    { id: enrollment1.getId(), studentId: enrollment1.getStudent().getId(), subjectId: enrollment1.getSubject().getId() },
    { id: enrollment2.getId(), studentId: enrollment2.getStudent().getId(), subjectId: enrollment2.getSubject().getId() },
    { id: enrollment3.getId(), studentId: enrollment3.getStudent().getId(), subjectId: enrollment3.getSubject().getId() }
  );

  // Create Assignments
  const mathAssignment = new Assignment(
    1,
    "Calculus Problem Set",
    "Solve differential equations from chapter 5",
    new Date("2025-01-15"),
    100,
    OOP,
    mathTeacher
  );

  const PLAssignment = new Assignment(
    2,
    "Newton's Laws Lab Report",
    "Write a comprehensive lab report on Newton's three laws",
    new Date("2025-01-20"),
    80,
    PL,
    PLTeacher
  );

  result.assignments.push(
    { id: mathAssignment.getId(), title: mathAssignment.getTitle(), dueDate: mathAssignment.getDueDate().toDateString() },
    { id: PLAssignment.getId(), title: PLAssignment.getTitle(), dueDate: PLAssignment.getDueDate().toDateString() }
  );

  // Publish assignments
  mathAssignment.publish();
  PLAssignment.publish();

  // Add students to assignments
  mathAssignment.addStudent(student1);
  mathAssignment.addStudent(student2);
  PLAssignment.addStudent(student1);

  // Students submit assignments
  student1.submitAssignment(mathAssignment);
  mathAssignment.markSubmitted();
  student1.submitAssignment(PLAssignment);
  PLAssignment.markSubmitted();

  // Grade assignments
  mathAssignment.assignGrade(85, 85);
  PLAssignment.assignGrade(72, 90);

  const mathGrade = mathAssignment.getGrade();
  const PLGrade = PLAssignment.getGrade();
  result.grades.push(
    { id: mathGrade?.getId() || null, assignmentId: mathAssignment.getId(), studentId: student1.getId(), score: mathGrade?.getScore() || null },
    { id: PLGrade?.getId() || null, assignmentId: PLAssignment.getId(), studentId: student1.getId(), score: PLGrade?.getScore() || null }
  );

  // Create Timetable
  const mathClass = new Timetable(1, "09:00 AM", "Monday", "Room B05", OOP);
  const PLClass = new Timetable(2, "11:00 AM", "Monday", "Room 201", PL);

  result.timetables.push(
    { id: mathClass.getId(), subjectId: mathClass.getSubject().getId(), day: mathClass.getDay(), time: mathClass.getTime(), room: mathClass.getRoom() },
    { id: PLClass.getId(), subjectId: PLClass.getSubject().getId(), day: PLClass.getDay(), time: PLClass.getTime(), room: PLClass.getRoom() }
  );

  // Ensure Student has a timetables property
  if (!student1.hasOwnProperty('timetables')) {
    (student1 as any).timetables = [];
  }
  student1.timetables.push(mathClass, PLClass);

  // Create Study Materials
  const mathMaterial = new StudyMaterial(
    "MAT001",
    "Calculus Textbook Chapter 5",
    "Essential reading for differential equations",
    OOP,
    mathTeacher,
    "/materials/calculus-ch5.pdf",
    "pdf"
  );

  result.studyMaterials.push({
    id: mathMaterial.getId(),
    title: mathMaterial.getTitle(),
    materialType: mathMaterial.getMaterialType().toUpperCase(),
    uploadedBy: mathMaterial.getTeacher().getName(),
    subjectId: mathMaterial.getSubject().getId(),
    description: mathMaterial.getDescription(),
    fileUrl: mathMaterial.getFileUrl(),
    uploadDate: mathMaterial.getUploadDate().toISOString(),
    summary: mathMaterial.getSummary()
  });

  // Create Attendance Records
  const attendance1 = new Attendance(
    "ATT001",
    student1,
    OOP,
    new Date("2025-01-08"),
    "present"
  );

  const attendance2 = new Attendance(
    "ATT002",
    student2,
    OOP,
    new Date("2025-01-08"),
    "late",
    "Arrived 10 minutes late"
  );

  result.attendanceRecords.push(
    { id: attendance1.getId(), studentId: attendance1.getStudent().getId(), subjectId: attendance1.getSubject().getId(), status: attendance1.getStatus(), date: attendance1.getDate().toISOString() },
    { id: attendance2.getId(), studentId: attendance2.getStudent().getId(), subjectId: attendance2.getSubject().getId(), status: attendance2.getStatus(), date: attendance2.getDate().toISOString(), remarks: attendance2.getRemarks() }
  );

  // Create Feedback
  const feedback = new Feedback(
    "FB001",
    student1,
    mathTeacher,
    OOP,
    5,
    "Excellent teaching methods and clear explanations!"
  );

  result.feedback.push({
    id: feedback.getId(),
    fromStudentId: feedback.getStudent().getId(),
    toTeacherId: feedback.getTeacher().getId(),
    subjectId: feedback.getSubject().getId(),
    rating: feedback.getRating(),
    comment: feedback.getComment(),
    date: feedback.getDate().toISOString()
  });

  // Create Parents
  const parent1 = new Parents(
    "PAR001",
    "John Smith",
    "john.smith@email.com",
    "+1-555-0201",
    "789 Family Lane, Education City",
    "father"
  );

  parent1.addStudent(student1);

  result.parents.push({
    id: parent1.getId(),
    name: parent1.getName(),
    relationship: parent1.getRelationship(),
    contact: parent1.getPhone(),
    childrenIds: parent1.getStudents().map(s => s.getId())
  });

  // Create Fee
  const tuitionFee = new Fee(1, 5000, new Date("2025-02-01"), "pending");

  result.fees.push({
    id: tuitionFee.getId(),
    amount: tuitionFee.getAmount(),
    dueDate: tuitionFee.getDueDate().toDateString(),
    status: tuitionFee.getStatus()
  });

  // Student pays fee
  student1.payFee(tuitionFee);
  result.fees[0].status = tuitionFee.getStatus();

  // Student academic records
  result.studentRecords[student1.getId()] = {
    grades: student1.viewGrade().map(grade => ({ id: grade.getId(), score: grade.getScore() })),
    results: student1.viewResult().map(result => ({ id: result.getId(), grade: result.getGrade() })),
    timetable: student1.viewTimetable("Monday").map(schedule => ({
      id: schedule.getId(),
      subjectId: schedule.getSubject().getId(),
      time: schedule.getTime(),
      room: schedule.getRoom()
    }))
  };

  // Assignment status
  result.assignmentStatus = {
    mathAssignment: {
      id: mathAssignment.getId(),
      overdue: mathAssignment.isOverdue(),
      student1Submitted: mathAssignment.hasStudentSubmitted(student1)
    },
    PLAssignment: {
      id: PLAssignment.getId(),
      overdue: PLAssignment.isOverdue(),
      student1Submitted: PLAssignment.hasStudentSubmitted(student1)
    }
  };

  // Logout Users
  const student1Logout = student1.logout();
  result.authEvents.push({
    action: "logout",
    userId: student1.getId(),
    role: student1.getRole(),
    success: student1Logout.success,
    message: student1Logout.message,
    timestamp: currentDate
  });

  const mathTeacherLogout = mathTeacher.logout();
  result.authEvents.push({
    action: "logout",
    userId: mathTeacher.getId(),
    role: mathTeacher.getRole(),
    success: mathTeacherLogout.success,
    message: mathTeacherLogout.message,
    timestamp: currentDate
  });

  const adminLogout = admin.logout();
  result.authEvents.push({
    action: "logout",
    userId: admin.getId(),
    role: admin.getRole(),
    success: adminLogout.success,
    message: adminLogout.message,
    timestamp: currentDate
  });

  // Update login status in result
  result.students[0].isLoggedIn = student1.isAuthenticated();
  result.teachers[0].isLoggedIn = mathTeacher.isAuthenticated();
  result.admins[0].isLoggedIn = admin.isAuthenticated();

  return result;
}

// Run the main function and return the result
const demoResult = main();
console.log(JSON.stringify(demoResult, null, 2));