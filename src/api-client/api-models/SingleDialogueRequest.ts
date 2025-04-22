class SingleDialogueRequest {
    npcName: string;
    dialogue: string[];
    maxLineLength?: number;
    abiphone?: boolean;
    skinValue?: string;

    constructor(
        npcName: string,
        dialogue: string[],
        maxLineLength?: number,
        abiphone?: boolean,
        skinValue?: string
    ) {
        this.npcName = npcName;
        this.dialogue = dialogue;
        this.maxLineLength = maxLineLength;
        this.abiphone = abiphone;
        this.skinValue = skinValue;
    }
}

export const defaultSingleDialogueRequest = new SingleDialogueRequest(
    "",
    [],
    55,
    false,
    undefined
);

export default SingleDialogueRequest;