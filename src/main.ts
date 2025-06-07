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
import { Classroom } from './models/academics/Classroom';
import { Exam } from './models/academics/Exam';
import { Result } from './models/operations/Result';

// Utility function to format logs with timestamp
function logWithTimestamp(message: string): void {
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  console.log(`[${timestamp}] ${message}`);
}

function main(): void {
  try {
    logWithTimestamp("Starting School Management System Demo");

    // === Initialize Users ===
    const admin = new Admin(1, "Admin Jane", "admin@example.com", Role.ADMIN, "adminpass", 1001);
    logWithTimestamp(admin.register().message);

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
    logWithTimestamp(teacher.register().message);

    const student1 = new Student(3, "Alice", "alice@example.com", Role.STUDENT, "pass456");
    const student2 = new Student(4, "Bob", "bob@example.com", Role.STUDENT, "pass789");
    logWithTimestamp(student1.register().message);
    logWithTimestamp(student2.register().message);

    const parent = new Parents("P001", "Mary Smith", "mary@example.com", "099999999", "Phnom Penh", "Mother");
    parent.addStudent(student1);
    logWithTimestamp(`Parent ${parent.getName()} added student ${student1.getName()}`);

    // === Initialize Academic Entities ===
    const math = new Subject("S001", "Mathematics", "MATH101", "Basic Mathematics", 3);
    const physics = new Subject("S002", "Physics", "PHY101", "Introduction to Physics", 4);
    logWithTimestamp(`Created subjects: ${math.getName()}, ${physics.getName()}`);

    const classroom = new Classroom("C001", "Room A101", 30, "Building A");
    classroom.addSubject(math);
    classroom.addSubject(physics);
    logWithTimestamp(`Created classroom ${classroom.getRoomNumber()} with capacity ${classroom.getCapacity()}`);

    // === Admin Actions ===
    admin.assignTeacherToSubject(teacher, math);
    admin.assignTeacherToSubject(teacher, physics);
    logWithTimestamp(`Teacher ${teacher.getName()} assigned to ${math.getName()} and ${physics.getName()}`);

    // === Enroll Students ===
    const enrollment1 = new Enrollment("E001", student1, math, classroom);
    const enrollment2 = new Enrollment("E002", student2, math, classroom);
    logWithTimestamp(`Enrolled ${student1.getName()} and ${student2.getName()} in ${math.getName()}`);

    // === Assignment Management ===
    const assignment1 = new Assignment(
      1,
      "Math Homework",
      "Complete exercises 1-10",
      new Date("2025-06-10"),
      100,
      math,
      teacher
    );
    teacher.addAssignment(assignment1);
    math.createAssignment(assignment1);
    assignment1.addStudent(student1);
    assignment1.addStudent(student2);
    assignment1.publish();
    logWithTimestamp(`Published assignment: ${assignment1.getSummary()}`);

    student1.submitAssignment(assignment1);
    assignment1.markSubmitted();
    assignment1.assignGrade(85, 85, "Good work, but check question 5.");
    logWithTimestamp(`Assigned grade ${assignment1.getGrade()?.getScore()} to ${student1.getName()}`);

    teacher.viewStudentGrade(student1, assignment1);

    // === Study Material Management ===
    const studyMaterial = new StudyMaterial(
      "M001",
      "Math Chapter 1 Notes",
      "Notes on algebra basics",
      math,
      teacher,
      "http://example.com/math-notes.pdf",
      "pdf"
    );
    teacher.uploadMaterial(math, studyMaterial);
    math.addStudyMaterial(studyMaterial);
    logWithTimestamp(`Uploaded study material: ${studyMaterial.getSummary()}`);

    // === Timetable Management ===
    const timetable = new Timetable(1, "10:00 AM", "Monday", "Room A101", math);
    math.addTimetable(timetable);
    logWithTimestamp(`Added timetable: ${timetable.toString()}`);

    // === Feedback Submission ===
    const feedback = student1.giveFeedback(math, teacher, 4, "Great teaching style!");
    math.addFeedback(feedback);
    logWithTimestamp(`Feedback submitted: ${feedback.toString()}`);
    logWithTimestamp(`Average rating for ${math.getName()}: ${math.getAverageRating()}`);

    // === Fee Management ===
    const fee1 = new Fee("F001", 200, new Date("2025-06-15"), math, student1, parent);
    student1.addFee(fee1);
    math.addFee(fee1);
    logWithTimestamp(`Created fee: ${fee1.toString()}`);

    parent.viewChildrenFees();
    parent.payChildFee(student1.getId(), Number(fee1.getId()));
    logWithTimestamp(`Fee status for ${student1.getName()}: ${fee1.getStatus()}`);

    // === Attendance Tracking ===
    Attendance.mark(student1, new Date("2025-06-03"), "Present", math, "Attended full session");
    const attendanceRecords = Attendance.getAttendanceForStudent(student1);
    logWithTimestamp(`Attendance for ${student1.getName()}: ${attendanceRecords[0].getStatus()}`);

    

    // === Exam and Result Management ===
    const exam = new Exam(new Date("2025-06-20"), 0, "Room A101", 100);
    exam.addStudent(student1);
    const result = new Result(1, student1.getId(), 1, 90, new Date("2025-06-20"));
    logWithTimestamp(`Exam result: ${result.getSummary()}`);

    // === Display Student Results ===
    const results = student1.viewResult();
    results.forEach((res) => logWithTimestamp(res.getSummary()));

    // === Final Timestamp ===
    logWithTimestamp("School Management System Demo Completed");

  } catch (error: any) {
    logWithTimestamp(`Error occurred: ${error.message}`);
  }
}

// Execute the main function
main();