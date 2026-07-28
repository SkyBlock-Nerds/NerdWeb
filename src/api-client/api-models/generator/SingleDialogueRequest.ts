import { minecraftPackString } from "../../requests/GetAutocomplete.ts";

class SingleDialogueRequest {
    npcName: string;
    dialogue: string[];
    maxLineLength?: number;
    abiphone?: boolean;
    skinValue?: string;
    texturePack?: string;

    constructor(
        npcName: string = "",
        dialogue: string[] = [],
        maxLineLength: number = 91,
        abiphone: boolean = false,
        skinValue?: string,
        texturePack: string = minecraftPackString,
    ) {
        this.npcName = npcName;
        this.dialogue = dialogue;
        this.maxLineLength = maxLineLength;
        this.abiphone = abiphone;
        this.skinValue = skinValue;
        this.texturePack = texturePack;
    }
}

export default SingleDialogueRequest;