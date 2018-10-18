import { IEmployee } from "./IEmployee"

export interface Manager extends IEmployee {
    department: string;
    teamCount: number;
    scheduleMeeting: (topic: string) => void;
}