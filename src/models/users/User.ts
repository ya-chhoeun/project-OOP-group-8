export enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN"
}

export class User {
  protected id: number;
  protected name: string;
  protected email: string;
  protected password: string;
  protected role: Role;
  protected isLoggedIn: boolean;

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
    this.isLoggedIn = false;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRole(): Role {
    return this.role;
  }

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Register a new user (simulated, in reality you'd save to a database)
  public register(): { success: boolean; message: string } {
    if (!this.email || !this.password) {
      return { success: false, message: "Email and password are required for registration." };
    }
    // Simulate registration by setting isLoggedIn to true (in reality, check for duplicates in DB)
    this.isLoggedIn = true;
    return { success: true, message: `User ${this.email} registered successfully as ${this.role}.` };
  }

  // Login user
  public login(email: string, password: string): { success: boolean; message: string } {
    if (this.isLoggedIn) {
      return { success: false, message: `User ${this.email} is already logged in.` };
    }
    if (this.email !== email || this.password !== password) {
      return { success: false, message: "Invalid email or password." };
    }
    this.isLoggedIn = true;
    return { success: true, message: `User ${this.email} logged in successfully.` };
  }

  // Logout user
  public logout(): { success: boolean; message: string } {
    if (!this.isLoggedIn) {
      return { success: false, message: `User ${this.email} is not logged in.` };
    }
    this.isLoggedIn = false;
    return { success: true, message: `User ${this.email} logged out successfully.` };
  }
}