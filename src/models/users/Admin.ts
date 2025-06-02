import { User } from "./User"

export class Admin extends User {
  private adminLevel: string
  private permissions: string[] = []

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    adminLevel: string,
  ) {
    super(id, name, email, password, phone, address)
    this.adminLevel = adminLevel
  }

  public getRole(): string {
    return "Admin"
  }

  public getAdminLevel(): string {
    return this.adminLevel
  }

  public addPermission(permission: string): void {
      this.permissions.push(permission)
    
  }

  public getPermissions(): string[] {
    return this.permissions
  }

  public hasPermission(permission: string): void {
    this.permissions.push(permission)
  }
}
