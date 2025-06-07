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

// Define the result structure type for better TypeScript support
function main() {
  const result = {
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

  
  const currentDate = new Date("2025-06-07T01:16:00+07:00").toISOString();

  // Create Subjects
  const OOP = new Subject("OOP", "OOP", "OOP", "Advanced OOP Course", 4);
  const PL = new Subject("PL", "PL", "PL", "Introduction to PL", 3);
  const LOGIC = new Subject("LOGIC01", "LOGIC", "LOGIC01", "Basic LOGIC", 3);

  console.log([
    { id: OOP.getId(), name: OOP.getName(), credits: OOP.getCredits() },
    { id: PL.getId(), name: PL.getName(), credits: PL.getCredits() },
    { id: LOGIC.getId(), name: LOGIC.getName(), credits: LOGIC.getCredits() }
  ]);

  // Create Teachers
  const OOPTeacher = new Teacher(
    101,
    "Mr. Sophy Em",
    "sophy.em@student.passerellesnumeriques.org",
    "1234567",
    "+885-967-841-659",
    "#371 2004 St, Phnom Penh",
    1001,
    "OOPematics"
  );

  const PLTeacher = new Teacher(
    102,
    "Yaa chhoun",
    "yaa.chhoun@student.passerellesnumeriques.org",
    "password456",
    "+855-123-456-789",
    "456 Science Ave, Education City",
    1002,
    "PL"
  );

  console.log([
    { id: OOPTeacher.getId(), name: OOPTeacher.getName(), specialization: OOPTeacher.specialization, teacherId: OOPTeacher.teacherId },
    { id: PLTeacher.getId(), name: PLTeacher.getName(), specialization: PLTeacher.specialization, teacherId: PLTeacher.teacherId }
  ]);

  // Create Students
  const student1 = new Student(201, "sophy", "sophy.em@student.passerellesnumeriques.org", Role.STUDENT, "studentpass1");
  const student2 = new Student(202, "yaa", "sophy.em@student.passerellesnumeriques.org", Role.STUDENT, "studentpass2");
  const student3 = new Student(203, "reachna", "sophy.em@student.passerellesnumeriques.org", Role.STUDENT, "studentpass3");

  console.log([
    { id: student1.getId(), name: student1.getName(), email: student1.getEmail() },
    { id: student2.getId(), name: student2.getName(), email: student2.getEmail() },
    { id: student3.getId(), name: student3.getName(), email: student3.getEmail() }
  ]);

  // Create Admin
  const admin = new Admin(301, "Admin Phy", "sophy.em@student.passerellesnumeriques.org", Role.ADMIN, "1234567", 3001);

  console.log([{
    id: admin.getId(),
    name: admin.getName(),
    adminId: admin.getAdminId()
  }]);

  // Create Classrooms
  const OOPClassroom = new Classroom("CR001", "OOP Classroom", 5, "40");
  const PLClassroom = new Classroom("CR002", "PL Classroom", 201, "35");

    console.log([
      { id: OOPClassroom.getId(), roomNumber: OOPClassroom.getRoomNumber(), capacity: OOPClassroom.getCapacity(), location: OOPClassroom.getLocation() },
      { id: PLClassroom.getId(), roomNumber: PLClassroom.getRoomNumber(), capacity: PLClassroom.getCapacity(), location: PLClassroom.getLocation() }
    ]);
  }
  
  main();