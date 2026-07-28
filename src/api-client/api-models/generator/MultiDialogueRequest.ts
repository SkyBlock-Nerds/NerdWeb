import MultiDialogueLine from "./submodels/MultiDialogueLine.ts";
import { minecraftPackString } from "../../requests/GetAutocomplete.ts";

class MultiDialogueRequest {
    npcNames: string[];
    dialogue: MultiDialogueLine[];
    maxLineLength?: number;
    abiphone?: boolean;
    skinValue?: string;
    texturePack?: string;

    constructor(
        npcNames: string[] = [],
        dialogue: MultiDialogueLine[] = [],
        maxLineLength: number = 91,
        abiphone: boolean = false,
        skinValue?: string,
        texturePack: string = minecraftPackString,
    ) {
        this.npcNames = npcNames;
        this.dialogue = dialogue;
        this.maxLineLength = maxLineLength;
        this.abiphone = abiphone;
        this.skinValue = skinValue;
        this.texturePack = texturePack;
    }
}

export default MultiDialogueRequest;