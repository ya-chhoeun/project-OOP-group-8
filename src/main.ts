import { Teacher } from "./models/users/Teacher";   


const teacher1 = new Teacher("Teacher1", "Mrr. Sophy", "emsophy.@gmail.com", "password123", "555-0101", "123 Faculty St", 1001, "Computer Science");
console.log(`Teacher: ${teacher1.getName()} (ID: ${teacher1.getId()})`);



