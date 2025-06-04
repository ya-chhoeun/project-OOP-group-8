import { User, } from "./User"
enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin"
}
export class Admin extends User {
  private adminLevel: string
  private permissions: string[] = []

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    adminLevel: string,
  ) {
    super(id, name, email, Role.TEACHER, password);
    this.adminLevel = adminLevel
  }

  public getSpecificRole(): string {
    return "Admin"
  }

  public getAdminLevel(): string {
    return this.adminLevel
  }

  public addPermission(permission: string): void {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission)
    }
  }

  public getPermissions(): string[] {
    return this.permissions
  }

  public hasPermission(permission: string): boolean {
    return this.permissions.includes(permission)
  }

  public removePermission(permission: string): void {
    this.permissions = this.permissions.filter((p) => p !== permission)
  }
}
