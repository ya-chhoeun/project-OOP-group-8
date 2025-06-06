import { Teacher } from "../users/Teacher";
import { Student } from "../users/Student";
import { StudyMaterial } from "../academics/StudyMateria";
import { Assignment } from "./Assignment";
import { Fee } from "../operations/Fee";
import { Feedback } from "./Feedback";
import { Timetable } from "./Timetable";
import { Classroom } from "./Classroom";
import { Enrollment } from "./Enrollment";

export class Subject {
  private id: string;
  private subject_name: string;
  private subject_code: string;
  private description: string;
  private credits: number;
  private teachers: Teacher[] = [];
  private students: Student[] = [];
  private studyMaterials: StudyMaterial[] = [];
  private assignments: Assignment[] = [];
  private fees: Fee[] = [];
  private feedbacks: Feedback[] = [];
  private timetables: Timetable[] = [];
  private classrooms: Classroom[] = [];
  private enrollments: Enrollment[] = [];

  constructor(
    subject_id: string,
    subject_name: string,
    subject_code: string,
    description: string,
    credits: number
  ) {
    this.id = subject_id;
    this.subject_name = subject_name;
    this.subject_code = subject_code;
    this.description = description;
    this.credits = credits;
  }

  // Basic getters
  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.subject_name;
  }

  public getCode(): string {
    return this.subject_code;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCredits(): number {
    return this.credits;
  }

  // Teacher relationships
  public addTeacher(teacher: Teacher): void {
    if (!this.teachers.some(t => t.getId() === teacher.getId())) {
      this.teachers.push(teacher);
      teacher.addSubject(this);
    }
  }

  public removeTeacher(teacher: Teacher): void {
    this.teachers = this.teachers.filter(t => t.getId() !== teacher.getId());
  }

  public getTeachers(): Teacher[] {
    return this.teachers;
  }

  // Student relationships
  public enrollStudent(student: Student): void {
    if (!this.students.some(s => s.getId() === student.getId())) {
      this.students.push(student);
    }
  }

  public unenrollStudent(student: Student): void {
    this.students = this.students.filter(s => s.getId() !== student.getId());
  }

  public getEnrolledStudents(): Student[] {
    return this.students;
  }

  // Study Material relationships
  public addStudyMaterial(material: StudyMaterial): void {
    if (!this.studyMaterials.some(m => m.getId() === material.getId())) {
      this.studyMaterials.push(material);
    }
  }

  public removeStudyMaterial(material: StudyMaterial): void {
    this.studyMaterials = this.studyMaterials.filter(m => m.getId() !== material.getId());
  }

  public getStudyMaterials(): StudyMaterial[] {
    return this.studyMaterials;
  }

  // Assignment relationships
  public createAssignment(assignment: Assignment): void {
    if (!this.assignments.some(a => a.getId() === assignment.getId())) {
      this.assignments.push(assignment);
    }
  }

  public removeAssignment(assignment: Assignment): void {
    this.assignments = this.assignments.filter(a => a.getId() !== assignment.getId());
  }

  public getAssignments(): Assignment[] {
    return this.assignments;
  }

  public getActiveAssignments(): Assignment[] {
    return this.assignments.filter(a => a.getDueDate() > new Date());
  }

  // Fee relationships
  public addFee(fee: Fee): void {
    if (!this.fees.some(f => f.getId() === fee.getId())) {
      this.fees.push(fee);
    }
  }

  public getFees(): Fee[] {
    return this.fees;
  }

  

  public getPendingFees(): Fee[] {
    return this.fees.filter(fee => fee.getDueDate() > new Date());
  }

  // Feedback relationships
  public addFeedback(feedback: Feedback): void {
    if (!this.feedbacks.some(f => f.getId() === feedback.getId())) {
      this.feedbacks.push(feedback);
    }
  }

  public getFeedbacks(): Feedback[] {
    return this.feedbacks;
  }

  public getAverageRating(): number {
    if (this.feedbacks.length === 0) return 0;
    const total = this.feedbacks.reduce((sum, feedback) => sum + feedback.getRating(), 0);
    return total / this.feedbacks.length;
  }

  // Timetable relationships
  public addTimetable(timetable: Timetable): void {
    // Check for conflicts
    const hasConflict = this.timetables.some(t => 
      t.getDay() === timetable.getDay() && 
      t.getTime() === timetable.getTime()
    );
    
    if (!hasConflict) {
      this.timetables.push(timetable);
    } else {
      throw new Error("Timetable slot conflict detected");
    }
  }

  public getTimetables(): Timetable[] {
    return this.timetables;
  }

  public getTimetableByDay(day: string): Timetable[] {
    return this.timetables.filter(t => t.getDay().toLowerCase() === day.toLowerCase());
  }

  // Classroom relationships
  public assignClassroom(classroom: Classroom): void {
    if (!this.classrooms.some(c => c.getId() === classroom.getId())) {
      this.classrooms.push(classroom);
      classroom.addSubject(this);
    }
  }

  public getClassrooms(): Classroom[] {
    return this.classrooms;
  }

  // Enrollment relationships
  public addEnrollment(enrollment: Enrollment): void {
    if (!this.enrollments.some(e => e.getId() === enrollment.getId())) {
      this.enrollments.push(enrollment);
    }
  }

  public getEnrollments(): Enrollment[] {
    return this.enrollments;
  }

  // Utility methods
  public getTotalEnrolledStudents(): number {
    return this.students.length;
  }

  public getUpcomingAssignments(): Assignment[] {
    const now = new Date();
    return this.assignments.filter(a => a.getDueDate() > now);
  }

  public isStudentEnrolled(student: Student): boolean {
    return this.students.some(s => s.getId() === student.getId());
  }

  public isTeacherAssigned(teacher: Teacher): boolean {
    return this.teachers.some(t => t.getId() === teacher.getId());
  }

  public toString(): string {
    return `${this.subject_name} (${this.subject_code}) - ${this.credits} credits`;
  }

  public getDetails(): string {
    return `
      Subject Details:
      ID: ${this.id}
      Name: ${this.subject_name}
      Code: ${this.subject_code}
      Description: ${this.description}
      Credits: ${this.credits}
      Teachers: ${this.teachers.length}
      Students: ${this.students.length}
      Assignments: ${this.assignments.length}
      Study Materials: ${this.studyMaterials.length}
    `;
  }
}