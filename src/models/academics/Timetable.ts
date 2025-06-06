import { Subject } from "../academics/Subject";
export class Timetable {
    private id: number;
    private time: string;
    private day: string;
    private room: string;
    private subject: Subject;

    constructor(id: number, time: string, day: string, room: string, subject: Subject) {
        this.id = id;
        this.time = time;
        this.day = day;
        this.room = room;
        this.subject = subject;
    }
      public getSubject(): Subject {
        return this.subject;
    }
    public getTime(): string {
        return this.time;
    }

    public getDay(): string {
        return this.day;
    }

    public getRoom(): string {
        return this.room;
    }
    public setTime(time: string): void {
        if (!this.isValidTime(time)) {
            throw new Error("Invalid time format. Use HH:MM AM/PM.");
        }
        this.time = time;
    }

    public setDay(day: string): void {
        if (!this.isValidDay(day)) {
            throw new Error("Invalid day. Must be a valid weekday.");
        }
        this.day = day;
    }

    public setRoom(room: string): void {
        this.room = room;
    }

     private isValidDay(day: string): boolean {
        const validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return validDays.includes(day);
    }

    //This method is now used in setTime()
    private isValidTime(time: string): boolean {
        const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
        return timeRegex.test(time);
    }

     // Check for conflict
    public conflictsWith(other: Timetable): boolean {
        return this.day === other.day &&
               this.time.toLowerCase() === other.time.toLowerCase() &&
               this.room.toLowerCase() === other.room.toLowerCase();
    }

    // Method to get full details
    public toString(): string {
        return `Timetable [ID: ${this.id}, Day: ${this.day}, Time: ${this.time}, Room: ${this.room}]`;
    }
    
}



