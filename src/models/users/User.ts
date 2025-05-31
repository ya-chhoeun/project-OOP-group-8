enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin"
}

export abstract class User {
    private id: number;
    private name: string;
    private email: string;
    private role: Role;  
    private password: string;

    constructor(id: number, name: string, email: string, role: Role, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }

    public login(email: string, password: string): boolean {
        return this.email === email && this.password === password;
    }

    public logout(): void {
        console.log(`${this.name} logged out.`);
    }

    public register(name: string, email: string, password: string, role: Role): User {
        return new RegisteredUser(Date.now(), name, email, role, password);
    }

    public displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Role: ${this.role}`);
    }
}

class RegisteredUser extends User {
    constructor(id: number, name: string, email: string, role: Role, password: string) {
        super(id, name, email, role, password);
    }
}
