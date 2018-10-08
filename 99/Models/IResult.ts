interface IResult {
    playerName: string;
    score: number;
    problemCount: number;
    factor: number;

    formatName(): string;
}

class Result implements IResult {
    playerName: string;
    score: number;
    problemCount: number;
    factor: number;

    formatName(): string {
        return this.playerName.toUpperCase();
    }

    static jobDescription: string = 'Build awesome stuff';
}