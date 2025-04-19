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

export const defaultSingleDialogue = new SingleDialogueRequest(
    "",
    [],
    91,
    false,
    undefined
);

export default SingleDialogueRequest;