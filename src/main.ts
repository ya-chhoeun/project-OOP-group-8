import { User, Role } from "./models/users/User"
import { Student } from "./models/users/Student"
import { Teacher } from "./models/users/Teacher"
import { Admin } from "./models/users/Admin"
import { Subject } from "./models/academics/Subject"
import { Assignment } from "./models/academics/Assignment"
import { Classroom } from "./models/academics/Classroom"
import { Enrollment } from "./models/academics/Enrollment"
import { Exam } from "./models/academics/Exam"
import { Feedback } from "./models/academics/Feedback"
import { Grade } from "./models/academics/Grade"
import { StudyMaterial } from "./models/academics/StudyMateria"
import { Timetable } from "./models/academics/Timetable"
import { Attendance } from "./models/operations/Attendance"
import { Fee } from "./models/operations/Fee"
import { Parents } from "./models/operations/Parents"
import { Result } from "./models/operations/Result"

console.log("School Management System")

const mathSubject = new Subject("PL01", "English", "MATH", 3, "learn about vocabulary and grammar")
const classroom = new Classroom("ClassRoom01", "Room B32", 130, "Top Floor")

// Register users
try {
  const student = User.registerUser(
    "Yaa chhourn",
    "Ya chhourn@gmail.com",
    "yaa",
    "098-123-4567",
    "2004 Street, Phnom Penh",
    Role.STUDENT,
  ) as Student

  const teacher = User.registerUser(
    "Reachna chom",
    "naa@gmail.com",
    "88888",
    "096-123-4567",
    "tikal Street, Phnom Penh",
    Role.TEACHER,
  ) as Teacher

  const admin = User.registerUser(
    "Sophy Em",
    "sophy@gmail.com",
    "sophy123",
    "096-987-6543",
    "371 Street, Phnom Penh",
    Role.ADMIN,
  ) as Admin

  // Display user information
  student.displayInfo()
  teacher.displayInfo()
  admin.displayInfo()

  // Enroll student in subject
  student.enrollInSubject(mathSubject)
  teacher.addSubject(mathSubject)

  // Create an assignment
  const assignment = new Assignment(
    "ASSIGN001",
    "Algebra Homework",
    "Complete exercises 1-10",
    new Date("2024-01-15"),
    100,
    mathSubject,
    teacher,
  )

  teacher.createAssignment(assignment)
  student.addAssignment(assignment)

  console.log("Created successfully!")
} catch (error) {
  console.error("Error login accound", error)
}

export {
  User,
  Role,
  Student,
  Teacher,
  Admin,
  Subject,
  Assignment,
  Classroom,
  Enrollment,
  Exam,
  Feedback,
  Grade,
  StudyMaterial,
  Timetable,
  Attendance,
  Fee,
  Parents,
  Result,
}




