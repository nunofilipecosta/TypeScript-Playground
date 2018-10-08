interface Manager extends IEmployee {
    department: string;
    teamCount: number;
    scheduleMeeting: (topic: string) => void;
}