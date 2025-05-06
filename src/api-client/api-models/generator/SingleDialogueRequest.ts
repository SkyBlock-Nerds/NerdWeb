class SingleDialogueRequest {
    npcName: string;
    dialogue: string[];
    maxLineLength?: number;
    abiphone?: boolean;
    skinValue?: string;

    constructor(
        npcName: string = "",
        dialogue: string[] = [],
        maxLineLength: number = 91,
        abiphone: boolean = false,
        skinValue?: string
    ) {
        this.npcName = npcName;
        this.dialogue = dialogue;
        this.maxLineLength = maxLineLength;
        this.abiphone = abiphone;
        this.skinValue = skinValue;
    }
}

export default SingleDialogueRequest;