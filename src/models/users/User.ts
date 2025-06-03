export enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}

export abstract class User {
  protected id: string
  protected name: string
  protected email: string
  protected role: Role
  protected password: string
  protected phone: string
  protected address: string
  protected isLoggedIn = false
  private static existingUsers: User[] = []

  constructor(id: string, name: string, email: string, password: string, phone: string, address: string, role: Role) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.phone = phone
    this.address = address
    this.role = role
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getRole(): Role {
    return this.role
  }

  public getPhone(): string {
    return this.phone
  }

  public getAddress(): string {
    return this.address
  }

  protected setLoggedIn(value: boolean): void {
    this.isLoggedIn = value
  }

  public isUserLoggedIn(): boolean {
    return this.isLoggedIn
  }

  public login(email: string, password: string): boolean {
    if (this.email === email && this.password === password) {
      this.setLoggedIn(true)
      console.log(`${this.name} logged in successfully.`)
      return true
    } else {
      console.log(`Login failed for ${this.name}.`)
      return false
    }
  }

  public logout(): void {
    if (this.isLoggedIn) {
      this.isLoggedIn = false
      console.log(`${this.name} logged out.`)
    } else {
      console.log(`${this.name} is not logged in.`)
    }
  }

  public static registerUser(
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    role: Role,
  ): User {
    const userExists = User.existingUsers.some((user) => user.getEmail() === email)

    if (userExists) {
      throw new Error(`${email} is already registered. Please log in.`)
    }

    const id = Date.now().toString()
    let newUser: User

    switch (role) {
      case Role.STUDENT:
        newUser = new Student(id, name, email, password, phone, address)
        break
      case Role.TEACHER:
        newUser = new Teacher(id, name, email, password, phone, address, "", "")
        break
      case Role.ADMIN:
        newUser = new Admin(id, name, email, password, phone, address, "basic")
        break
      default:
        throw new Error("Invalid role specified")
    }

    User.existingUsers.push(newUser)
    newUser.setLoggedIn(true)
    console.log(`${name} has been registered and logged in.`)
    return newUser
  }

  public displayInfo(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Role: ${this.role}, Email: ${this.email}`)
  }

  public abstract getSpecificRole(): string
}

// Import classes that extend User
import { Student } from "./Student"
import { Teacher } from "./Teacher"
import { Admin } from "./Admin"
