import { Enrollment } from "./Enrollment"
import { Subject } from "./Subject"
import { Student } from "../users/Student"
export class Classroom {
  private id: string
  private roomNumber: string
  private capacity: number
  private location: string
    private subjects: Subject[] = []       
  private enrollments: Enrollment[] = []

  constructor(id: string, roomNumber: string, capacity: number, location: string) {
    this.id = id
    this.roomNumber = roomNumber
    this.capacity = capacity
    this.location = location
  }

  public getId(): string {
    return this.id
  }

  public getRoomNumber(): string {
    return this.roomNumber
  }

  public getCapacity(): number {
    return this.capacity
  }

  public getLocation(): string {
    return this.location
  }

  public setCapacity(capacity: number): void {
    this.capacity = capacity
  }

  public setLocation(location: string): void {
    this.location = location
  }

   /** Adds a subject to the classroom if not already added */
  public addSubject(subject: Subject): void {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject)
    }
  }

  /** Returns all subjects assigned to this classroom */
  public getSubjects(): Subject[] {
    return this.subjects
  }

  /** Adds a student enrollment to the classroom, enforcing capacity and no duplicates */
  public addEnrollment(enrollment: Enrollment): void {
    if (this.enrollments.length >= this.capacity) {
      throw new Error("Classroom is at full capacity")
    }

    const alreadyEnrolled = this.enrollments.some(
      e => e.getStudent().getId() === enrollment.getStudent().getId()
    )

    if (!alreadyEnrolled) {
      this.enrollments.push(enrollment)
    }
  }

  /** Returns all enrollments in the classroom */
  public getEnrollments(): Enrollment[] {
    return this.enrollments
  }

  /** Returns all students enrolled in the classroom */
  public getEnrolledStudents(): Student[] {
    return this.enrollments.map(e => e.getStudent())
  }

  /** Finds an enrollment by student ID */
  public getEnrollmentByStudentId(studentId: string): Enrollment | undefined {
    return this.enrollments.find(e => String(e.getStudent().getId()) === studentId)
  }
}
