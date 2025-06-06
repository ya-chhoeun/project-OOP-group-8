import { Student } from './models/users/Student';
import { Teacher } from './models/users/Teacher';
import { Subject } from './models/academics/Subject';
import { Assignment } from './models/academics/Assignment';
import { Grade } from './models/academics/Grade';
import { Timetable } from './models/academics/Timetable';
import { Enrollment } from './models/academics/Enrollment';
import { StudyMaterial } from './models/academics/StudyMateria';
import { Feedback } from './models/academics/Feedback';
import { Attendance } from './models/operations/Attendance';
import { Fee } from './models/operations/Fee';
import { Parents } from './models/operations/Parents';
import { Role } from './models/users/User';

// Main execution function
function main() {
  const result = {
    subjects: [] as { name: string; credits: number }[],
    teachers: [] as { name: string; specialization: string }[],
    students: [] as { name: string; id: number }[],
    enrollments: [] as { student: string; subject: string }[],
    assignments: [] as { title: string; dueDate: string; grade?: number }[],
    timetable: [] as { subject: string; day: string; time: string; room: string }[],
    studyMaterials: [] as { title: string; materialType: string; uploadedBy: string }[],
    attendanceRecords: [] as { student: string; status: string; subject: string; remarks?: string }[],
    feedback: [] as { fromStudent: string; toTeacher: string; rating: number; comment: string }[],
    parents: [] as { name: string; relationship: string; contact: string; children: string[] }[],
    fees: [] as { amount: number; dueDate: string; status?: string }[],
    studentRecords: {} as Record<string, any>,
    assignmentStatus: {} as Record<string, any>
  };

  // Create Subjects
  const mathematics = new Subject("MATH101", "Mathematics", "MATH101", "Advanced Mathematics Course", 4);
  const physics = new Subject("PHYS101", "Physics", "PHYS101", "Introduction to Physics", 3);
  const chemistry = new Subject("CHEM101", "Chemistry", "CHEM101", "Basic Chemistry", 3);

  result.subjects.push(
    { name: mathematics.getName(), credits: mathematics.getCredits() },
    { name: physics.getName(), credits: physics.getCredits() },
    { name: chemistry.getName(), credits: chemistry.getCredits() }
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

  const physicsTeacher = new Teacher(
    102,
    "Prof. Michael Chen",
    "michael.chen@school.edu",
    "password456",
    "+1-555-0102",
    "456 Science Ave, Education City",
    1002,
    "Physics"
  );

  result.teachers.push(
    { name: mathTeacher.getName(), specialization: mathTeacher.specialization },
    { name: physicsTeacher.getName(), specialization: physicsTeacher.specialization }
  );

  // Assign subjects to teachers
  mathTeacher.addSubject(mathematics);
  physicsTeacher.addSubject(physics);

  // Create Students
  const student1 = new Student(201, "Alice Smith", "alice.smith@student.edu", Role.STUDENT, "studentpass1");
  const student2 = new Student(202, "Bob Wilson", "bob.wilson@student.edu", Role.STUDENT, "studentpass2");
  const student3 = new Student(203, "Carol Davis", "carol.davis@student.edu", Role.STUDENT, "studentpass3");

  result.students.push(
    { name: student1.getName(), id: student1.getId() },
    { name: student2.getName(), id: student2.getId() },
    { name: student3.getName(), id: student3.getId() }
  );

  // Create Enrollments
  const enrollment1 = new Enrollment("ENR001", student1, mathematics);
  const enrollment2 = new Enrollment("ENR002", student1, physics);
  const enrollment3 = new Enrollment("ENR003", student2, mathematics);

  result.enrollments.push(
    { student: enrollment1.getStudent().getName(), subject: enrollment1.getSubject().getName() },
    { student: enrollment2.getStudent().getName(), subject: enrollment2.getSubject().getName() },
    { student: enrollment3.getStudent().getName(), subject: enrollment3.getSubject().getName() }
  );

  // Create Assignments
  const mathAssignment = new Assignment(
    1,
    "Calculus Problem Set",
    "Solve differential equations from chapter 5",
    new Date("2025-01-15"),
    100,
    mathematics,
    mathTeacher
  );

  const physicsAssignment = new Assignment(
    2,
    "Newton's Laws Lab Report",
    "Write a comprehensive lab report on Newton's three laws",
    new Date("2025-01-20"),
    80,
    physics,
    physicsTeacher
  );

  result.assignments.push(
    { title: mathAssignment.getTitle(), dueDate: mathAssignment.getDueDate().toDateString() },
    { title: physicsAssignment.getTitle(), dueDate: physicsAssignment.getDueDate().toDateString() }
  );

  // Publish assignments
  mathAssignment.publish();
  physicsAssignment.publish();

  // Add students to assignments
  mathAssignment.addStudent(student1);
  mathAssignment.addStudent(student2);
  physicsAssignment.addStudent(student1);

  // Students submit assignments
  student1.submitAssignment(mathAssignment);
  mathAssignment.markSubmitted();
  student1.submitAssignment(physicsAssignment);
  physicsAssignment.markSubmitted();

  // Grade assignments
  mathAssignment.assignGrade(85, 85);
  physicsAssignment.assignGrade(72, 90);

  result.assignments[0].grade = mathAssignment.getGrade()?.getScore();
  result.assignments[1].grade = physicsAssignment.getGrade()?.getScore();

  // Create Timetable
  const mathClass = new Timetable(1, "09:00 AM", "Monday", "Room 101", mathematics);
  const physicsClass = new Timetable(2, "11:00 AM", "Monday", "Room 201", physics);

  result.timetable.push(
    { subject: mathClass.getSubject().getName(), day: mathClass.getDay(), time: mathClass.getTime(), room: mathClass.getRoom() },
    { subject: physicsClass.getSubject().getName(), day: physicsClass.getDay(), time: physicsClass.getTime(), room: physicsClass.getRoom() }
  );

  // Create Study Materials
  const mathMaterial = new StudyMaterial(
    "MAT001",
    "Calculus Textbook Chapter 5",
    "Essential reading for differential equations",
    mathematics,
    mathTeacher,
    "/materials/calculus-ch5.pdf",
    "pdf"
  );

  result.studyMaterials.push({
    title: mathMaterial.getTitle(),
    materialType: mathMaterial.getMaterialType().toUpperCase(),
    uploadedBy: mathMaterial.getTeacher().getName()
  });

  // Create Attendance Records
  const attendance1 = new Attendance(
    "ATT001",
    student1,
    mathematics,
    new Date("2025-01-08"),
    "present"
  );

  const attendance2 = new Attendance(
    "ATT002",
    student2,
    mathematics,
    new Date("2025-01-08"),
    "late",
    "Arrived 10 minutes late"
  );

  result.attendanceRecords.push(
    { student: attendance1.getStudent().getName(), status: attendance1.getStatus(), subject: attendance1.getSubject().getName() },
    { student: attendance2.getStudent().getName(), status: attendance2.getStatus(), subject: attendance2.getSubject().getName(), remarks: attendance2.getRemarks() }
  );

  // Create Feedback
  const feedback = new Feedback(
    "FB001",
    student1,
    mathTeacher,
    mathematics,
    5,
    "Excellent teaching methods and clear explanations!"
  );

  result.feedback.push({
    fromStudent: feedback.getStudent().getName(),
    toTeacher: feedback.getTeacher().getName(),
    rating: feedback.getRating(),
    comment: feedback.getComment()
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
    name: parent1.getName(),
    relationship: parent1.getRelationship(),
    contact: parent1.getPhone(),
    children: parent1.getStudents().map(s => s.getName())
  });

  // Create Fee
//   const tuitionFee = new Fee(1, 5000, new Date("2025-02-01"), "pending");

//   result.fees.push({
//     amount: tuitionFee.getAmount(),
//     dueDate: tuitionFee.getDueDate().toDateString(),
//   });

  // Student pays fee
//   student1.payFee(tuitionFee);
//   result.fees[0].status = tuitionFee.getStatus();

  // Student academic records
  result.studentRecords[student1.getName()] = {
    grades: student1.viewGrade().map(grade => ({ score: grade.getScore() })),
    results: student1.viewResult().map(result => ({ resultId: result, grade: result })),
    timetable: student1.viewTimetable("Monday").map(schedule => ({
      subject: schedule.getSubject().getName(),
      time: schedule.getTime(),
      room: schedule.getRoom()
    }))
  };

  // Assignment status
  result.assignmentStatus = {
    mathAssignment: {
      overdue: mathAssignment.isOverdue(),
      student1Submitted: mathAssignment.hasStudentSubmitted(student1)
    },
    physicsAssignment: {
      overdue: physicsAssignment.isOverdue(),
      student1Submitted: physicsAssignment.hasStudentSubmitted(student1)
    }
  };

  return result;
}

// Run the main function and return the result
const demoResult = main();
console.log(JSON.stringify(demoResult, null, 2));