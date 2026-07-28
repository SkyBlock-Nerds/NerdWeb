import { minecraftPackString } from "../../requests/GetAutocomplete.ts";

class ItemRequest {
    itemId: string;
    skinValue?: string;
    hoverEffect?: boolean;
    enchanted?: boolean;
    data?: string;
    texturePack?: string;

    constructor(
        itemId: string = "",
        skinValue?: string,
        hoverEffect: boolean = false,
        enchanted: boolean = false,
        data?: string,
        texturePack: string = minecraftPackString,
    ) {
        this.itemId = itemId;
        this.skinValue = skinValue;
        this.hoverEffect = hoverEffect;
        this.enchanted = enchanted;
        this.data = data;
        this.texturePack = texturePack;
    }
}

export default ItemRequest;