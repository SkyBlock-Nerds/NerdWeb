class MultiDialogueLine {
    npcIndex: number;
    line: string;

    constructor(
        npcIndex: number,
        line: string
    ) {
        this.npcIndex = npcIndex;
        this.line = line;
    }
}

export default MultiDialogueLine;