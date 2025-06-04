class Timetable {
    private id: number;
    private time: string;
    private day: string;
    private room: string;


    constructor(id: number, time: string, day: string, room: string) {
        this.id = id;
        this.time = time;
        this.day = day;
        this.room = room;
    }
}
