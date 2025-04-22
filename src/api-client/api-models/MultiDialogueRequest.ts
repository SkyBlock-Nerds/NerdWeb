import MultiDialogueLine from "./submodels/MultiDialogueLine.ts";

class MultiDialogueRequest {
    npcNames: string[];
    dialogue: MultiDialogueLine[];
    maxLineLength?: number;
    abiphone?: boolean;
    skinValue?: string;

    constructor(
        npcNames: string[],
        dialogue: MultiDialogueLine[],
        maxLineLength?: number,
        abiphone?: boolean,
        skinValue?: string
    ) {
        this.npcNames = npcNames;
        this.dialogue = dialogue;
        this.maxLineLength = maxLineLength;
        this.abiphone = abiphone;
        this.skinValue = skinValue;
    }
}

export const defaultMultiDialogueRequest = new MultiDialogueRequest(
    [],
    [],
    91,
    false,
    undefined
);

export default MultiDialogueRequest;