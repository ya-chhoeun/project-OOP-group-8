enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin"
}

export abstract class User {
  protected id: string
  protected name: string
  protected email: string
  protected password: string
  protected phone: string
  protected address: string

  constructor(id: string, name: string, email: string, password: string, phone: string, address: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.phone = phone
    this.address = address
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

  public getPhone(): string {
    return this.phone
  }

  public getAddress(): string {
    return this.address
  }

  public updateProfile(name: string, email: string, phone: string, address: string): void {
    this.name = name
    this.email = email
    this.phone = phone
    this.address = address
  }

  public changePassword(oldPassword: string, newPassword: string): boolean {
    if (this.password === oldPassword) {
      this.password = newPassword
      return true
    }
    return false
  }

  public abstract getRole(): string
}

