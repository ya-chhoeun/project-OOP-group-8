export class Classroom {
  private id: string
  private roomNumber: string
  private capacity: number
  private location: string

  constructor(id: string, roomNumber: string, capacity: number, location: string) {
    this.id = id
    this.roomNumber = roomNumber
    this.capacity = capacity
    this.location = location
  }

  public getId(): string {
    return this.id
  }

  public getRoomNumber(): string {
    return this.roomNumber
  }

  public getCapacity(): number {
    return this.capacity
  }

  public getLocation(): string {
    return this.location
  }

  public setCapacity(capacity: number): void {
    this.capacity = capacity
  }

  public setLocation(location: string): void {
    this.location = location
  }
}
