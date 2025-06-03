import { User } from "./User"
import { Subject } from "../academics/Subject"
import { Assignment } from "../academics/Assignment"
import { Role } from "./User"

export class Teacher extends User {
  private teacherId: number
  private specialization: string
  private subjects: Subject[] = []
  private assignments: Assignment[] = []

  constructor(
    id: number,
    name: string,
    email: string,
    role: Role,
    password: string,
    teacherId: number,
    specialization: string,
  ) {
    super(id, name, email, role, password)
    this.teacherId = teacherId
    this.specialization = specialization
  }

  // ...rest of the code remains unchanged...
}