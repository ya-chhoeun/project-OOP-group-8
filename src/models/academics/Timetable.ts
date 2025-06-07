export class Timetable {
  private id: number;
  private time: string;
  private day: string;
  private room: string;
  private subject: any;

  constructor(id: number, time: string, day: string, room: string, subject: any) {
    this.id = id;
    this.time = time;
    this.day = day;
    this.room = room;
    this.subject = subject;
  }

  public getId(): number {
    return this.id;
  }

  public getSubject(): any {
    return this.subject;
  }

  public getDay(): string {
    return this.day;
  }

  public getTime(): string {
    return this.time;
  }

  public getRoom(): string {
    return this.room;
  }
} 