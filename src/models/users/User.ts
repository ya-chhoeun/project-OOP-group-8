export enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin"
}

export abstract class User {
    public id: number;
    private name: string;
    private email: string;
    private role: Role;
    public password: string;
    private isLoggedIn: boolean = false;
    private static existingUsers: User[] = [];

    constructor(id: number, name: string, email: string, role: Role, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }

    public getId(): number {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    protected setLoggedIn(value: boolean): void {
        this.isLoggedIn = value;
    }

    public getName(): string {
        return this.name;
    }
    public login(email: string, password: string): boolean {
        if (this.email === email && this.password === password) {
            console.log(`${this.name} logged in successfully.`);
            return true;
        } else {
            console.log(`Login failed for ${this.name}.`);
            return false;
        }
    }

    public logout(): void {
        console.log(`${this.name} logged out.`);
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            console.log(`${this.name} logged out.`);
        } else {
            console.log(`${this.name} is not logged in.`);
        }
    }

    public register(name: string, email: string, password: string, role: Role): User {
        const userExists = User.existingUsers.some(user => user.getEmail() === email);

        if (userExists) {
            throw new Error(`${email} is already registered. Please log in.`);
        }

        const newUser = new RegisteredUser(Date.now(), name, email, role, password);
        User.existingUsers.push(newUser);
        newUser.setLoggedIn(true);
        console.log(`${name} has been registered and logged in.`);
        return newUser;
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




