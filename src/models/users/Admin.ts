import { User, Role } from './User';

export class Admin extends User {
  constructor(id: number, name: string, email: string, password: string) {
    super(id, name, email, Role.ADMIN, password);
  }
}