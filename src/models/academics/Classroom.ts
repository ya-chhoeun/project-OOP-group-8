export class Classroom {
    private id : number;
    private roomNumber : string;
    private capacity : number;
    private location : string;


    constructor(id: number, roomNumber: string, capacity: number, location: string) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.capacity = capacity;
        this.location = location;
    }
    
}