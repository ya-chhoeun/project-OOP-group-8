import { Student } from './models/users/Student';
import { Teacher } from './models/users/Teacher';
import { Admin } from './models/users/Admin';
import { Subject } from './models/academics/Subject';
import { Assignment } from './models/academics/Assignment';
import { Timetable } from './models/academics/Timetable';
import { Enrollment } from './models/academics/Enrollment';
import { StudyMaterial } from './models/academics/StudyMateria'; // Corrected typo
import { Feedback } from './models/academics/Feedback';
import { Attendance } from './models/operations/Attendance';
import { Fee } from './models/operations/Fee';
import { Parents } from './models/operations/Parents';
import { Role } from './models/users/User';
import { Classroom } from './models/academics/Classroom';
import { Exam } from './models/academics/Exam';
import { Result } from './models/operations/Result';

// Utility function to format logs with timestamp and data
function logWithTimestamp(message: string, data: any = null): void {
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  if (data !== null) {
    console.log(`[${timestamp}] ${message}\n${JSON.stringify(data, null, 2)}`);
  } else {
    console.log(`[${timestamp}] ${message}`);
  }
}

// Function to find the top student based on average grades
function findTopStudent(results: Result[], students: Student[]): string {
  if (results.length === 0 || students.length === 0) {
    return "No results or students available.";
  }

  const averageGrades: { studentId: number; average: number }[] = [];
  students.forEach(student => {
    const studentResults = results.filter(result => result.getStudentId() === student.getId());
    if (studentResults.length > 0) {
      const average = studentResults.reduce((sum, result) => sum + result.getGrade(), 0) / studentResults.length;
      averageGrades.push({ studentId: student.getId(), average });
    }
  });

  if (averageGrades.length === 0) {
    return "No grades available.";
  }

  const topStudent = averageGrades.reduce((top, current) => current.average > top.average ? current : top);
  const student = students.find(s => s.getId() === topStudent.studentId);
  return `Top student: ${student?.getName()} with average grade ${topStudent.average.toFixed(2)}`;
}

function main(): void {
  try {
    logWithTimestamp("Starting School Management System Demo with Results Array");

    // Initialize result structure
    const result = {
      subjects: [] as Subject[],
      teachers: [] as Teacher[],
      students: [] as Student[],
      admins: [] as Admin[],
      enrollments: [] as Enrollment[],
      assignments: [] as Assignment[],
      grades: [] as any[], // Assuming Grade class exists
      timetables: [] as Timetable[],
      studyMaterials: [] as StudyMaterial[],
      feedback: [] as Feedback[],
      attendanceRecords: [] as any[], // Assuming Attendance record type
      fees: [] as Fee[],
      parents: [] as Parents[],
      authEvents: [] as any[],
      studentRecords: {} as { [key: string]: any },
      assignmentStatus: {} as { [key: string]: any },
      results: [] as Result[] // Added for exam results
    };

    const currentDate = new Date("2025-06-07T01:16:00+07:00").toISOString();
    logWithTimestamp(`Current date: ${currentDate}`);

    // === Create Subjects ===
    const OOP = new Subject("OOP", "OOP", "OOP", "Advanced OOP Course", 4);
    const PL = new Subject("PL", "PL", "PL", "Introduction to PL", 3);
    const LOGIC = new Subject("LOGIC01", "LOGIC", "LOGIC01", "Basic LOGIC", 3);
    result.subjects.push(OOP, PL, LOGIC);
    logWithTimestamp("Created subjects:", [
      { id: OOP.getId(), name: OOP.getName(), credits: OOP.getCredits() },
      { id: PL.getId(), name: PL.getName(), credits: PL.getCredits() },
      { id: LOGIC.getId(), name: LOGIC.getName(), credits: LOGIC.getCredits() }
    ]);


    // === Create Teachers ===
    const OOPTeacher = new Teacher(
      101,
      "Mr. Sophy Em",
      "sophy.em@student.passerellesnumeriques.org",
      "1234567",
      "+885-967-841-659",
      "#371 2004 St, Phnom Penh",
      1001,
      "OOP"
    );
    const PLTeacher = new Teacher(
      102,
      "Yaa Chhoun",
      "yaa.chhoun@student.passerellesnumeriques.org",
      "password456",
      "+855-123-456-789",
      "456 Science Ave, Education City",
      1002,
      "PL"
    );
    result.teachers.push(OOPTeacher, PLTeacher);
    logWithTimestamp("Created teachers:", [
      { id: OOPTeacher.getId(), name: OOPTeacher.getName(), specialization: OOPTeacher.specialization, teacherId: OOPTeacher.teacherId },
      { id: PLTeacher.getId(), name: PLTeacher.getName(), specialization: PLTeacher.specialization, teacherId: PLTeacher.teacherId }
    ]);

    // === Create Students ===
    const student1 = new Student(201, "Sophy", "sophy.em@student.passerellesnumeriques.org", Role.STUDENT, "studentpass1");
    const student2 = new Student(202, "Yaa", "yaa.student@example.com", Role.STUDENT, "studentpass2");
    const student3 = new Student(203, "Reachna", "reachna.student@example.com", Role.STUDENT, "studentpass3");
    result.students.push(student1, student2, student3);
    logWithTimestamp("CREATED STUDENTS:", [
      { id: student1.getId(), name: student1.getName(), email: student1.getEmail() },
      { id: student2.getId(), name: student2.getName(), email: student2.getEmail() },
      { id: student3.getId(), name: student3.getName(), email: student3.getEmail() }
    ]);

    // === Create Admin ===
    const admin = new Admin(301, "Admin Phy", "admin.phy@example.com", Role.ADMIN, "1234567", 3001);
    result.admins.push(admin);
    logWithTimestamp("CREATED ADMIN:", [
      { id: admin.getId(), name: admin.getName(), adminId: admin.getAdminId() }
    ]);

    // === Create Classrooms ===
    const OOPClassroom = new Classroom("CR001", "OOP Classroom", 40, "Building A");
    const PLClassroom = new Classroom("CR002", "PL Classroom", 35, "Building B");
    OOPClassroom.addSubject(OOP);
    PLClassroom.addSubject(PL);
    logWithTimestamp("Created classrooms:", [
      { id: OOPClassroom.getId(), roomNumber: OOPClassroom.getRoomNumber(), capacity: OOPClassroom.getCapacity(), location: OOPClassroom.getLocation() },
      { id: PLClassroom.getId(), roomNumber: PLClassroom.getRoomNumber(), capacity: PLClassroom.getCapacity(), location: PLClassroom.getLocation() }
    ]);

    // === Admin Actions ===
    admin.assignTeacherToSubject(OOPTeacher, OOP);
    admin.assignTeacherToSubject(PLTeacher, PL);
    logWithTimestamp(`Assigned ${OOPTeacher.getName()} to ${OOP.getName()} and ${PLTeacher.getName()} to ${PL.getName()}`);

    // === Enroll Students ===
    const enrollment1 = new Enrollment("E001", student1, OOP, OOPClassroom);
    const enrollment2 = new Enrollment("E002", student2, OOP, OOPClassroom);
    const enrollment3 = new Enrollment("E003", student3, PL, PLClassroom);
    result.enrollments.push(enrollment1, enrollment2, enrollment3);
    logWithTimestamp(`Enrolled ${student1.getName()}, ${student2.getName()} in ${OOP.getName()}, and ${student3.getName()} in ${PL.getName()}`);

    // === Assignment Management ===
    const assignment1 = new Assignment(
      1,
      "OOP Project",
      "Implement a class hierarchy",
      new Date("2025-06-15"),
      100,
      OOP,
      OOPTeacher
    );
    OOPTeacher.addAssignment(assignment1);
    OOP.createAssignment(assignment1);
    assignment1.addStudent(student1);
    assignment1.addStudent(student2);
    assignment1.publish();
    result.assignments.push(assignment1);
    logWithTimestamp(`Published assignment: ${assignment1.getSummary()}`);


    student1.submitAssignment(assignment1);
    assignment1.markSubmitted();
    assignment1.assignGrade(85, 85, "Good implementation.");
    result.grades.push({ studentId: student1.getId(), assignmentId: 1, score: 85 });
    logWithTimestamp(`Assigned grade ${assignment1.getGrade()?.getScore()} to ${student1.getName()}`);

    // === Study Material Management ===
    const studyMaterial = new StudyMaterial(
      "M001",
      "OOP Notes",
      "Chapter 1: Classes and Objects",
      OOP,
      OOPTeacher,
      "http://example.com/oop-notes.pdf",
      "pdf"
    );
    OOPTeacher.uploadMaterial(OOP, studyMaterial);
    OOP.addStudyMaterial(studyMaterial);
    result.studyMaterials.push(studyMaterial);
    logWithTimestamp(`Uploaded study material: ${studyMaterial.getSummary()}`);

    // === Timetable Management ===
    const timetable = new Timetable(1, "10:00 AM", "Monday", "OOP Classroom", OOP);
    OOP.addTimetable(timetable);
    result.timetables.push(timetable);
    logWithTimestamp(`Added timetable: ${timetable.toString()}`);

    // === Feedback Submission ===
    const feedback = student1.giveFeedback(OOP, OOPTeacher, 4, "Excellent course!");
    OOP.addFeedback(feedback);
    result.feedback.push(feedback);
    logWithTimestamp(`Feedback submitted: ${feedback.toString()}`);
    logWithTimestamp(`Average rating for ${OOP.getName()}: ${OOP.getAverageRating()}`);

    // === Fee Management ===
    const parent = new Parents("P001", "Parent Sophy", "parent@example.com", "099999999", "Phnom Penh", "Father");
    parent.addStudent(student1);
    result.parents.push(parent);
    const fee1 = new Fee("F001", 200, new Date("2025-06-20"), OOP, student1, parent);
    student1.addFee(fee1);
    OOP.addFee(fee1);
    result.fees.push(fee1);
    logWithTimestamp(`Created fee: ${fee1.toString()}`);
    parent.payChildFee(student1.getId(), Number(fee1.getId()));
    logWithTimestamp(`Fee status for ${student1.getName()}: ${fee1.getStatus()}`);

    // === Attendance Tracking ===
    Attendance.mark(student1, new Date("2025-06-07"), "Present", OOP, "Attended session");
    const attendanceRecords = Attendance.getAttendanceForStudent(student1);
    result.attendanceRecords.push(attendanceRecords[0]);
    logWithTimestamp(`Attendance for ${student1.getName()}: ${attendanceRecords[0].getStatus()}`);

    // === Exam and Result Management ===
    const exam1 = new Exam(new Date("2025-06-25"), 0, "OOP Classroom", 100);
    const exam2 = new Exam(new Date("2025-06-27"), 0, "PL Classroom", 100);
    exam1.addStudent(student1);
    exam1.addStudent(student2);
    exam2.addStudent(student3);
    logWithTimestamp(`Created exams on ${exam1.getExamDate().toDateString()} and ${exam2.getExamDate().toDateString()}`);

    const result1 = new Result(1, student1.getId(), 1, 90, new Date("2025-06-25"));
    const result2 = new Result(2, student2.getId(), 1, 80, new Date("2025-06-25"));
    const result3 = new Result(3, student3.getId(), 2, 85, new Date("2025-06-27"));
    result.results.push(result1, result2, result3);
    logWithTimestamp(`Added ${result.results.length} results to the results array`);

    // Display all results
    logWithTimestamp("Displaying all results:", result.results.map((res, index) => ({
      [`Result ${index + 1}`]: res.getSummary()
    })));

    // Filter and display passing results
    const passingResults = result.results.filter(res => res.isPassed());
    logWithTimestamp("Passing results:", passingResults.map((res, index) => ({
      [`Passing Result ${index + 1}`]: res.getSummary()
    })));

    // Calculate average grade for a student
    const student1Results = result.results.filter(res => res.getStudentId() === student1.getId());
    const averageGrade = student1Results.length > 0
      ? student1Results.reduce((sum, res) => sum + res.getGrade(), 0) / student1Results.length
      : 0;
    logWithTimestamp(`Average grade for ${student1.getName()}: ${averageGrade.toFixed(2)}`);


    // Find top student
    const topStudentMessage = findTopStudent(result.results, result.students);
    logWithTimestamp(topStudentMessage);

    // === Display Student Results ===
    const studentResults = student1.viewResult();
    logWithTimestamp("Results from student1.viewResult():", studentResults.map((res, index) => ({
      [`Result ${index + 1}`]: res.getSummary()
    })));

    // === Final Timestamp ===
    logWithTimestamp("School Management System Demo Completed");

  } catch (error: any) {
    logWithTimestamp(`Error occurred: ${error.message}`);
  }
}

// Execute the main function
main();
