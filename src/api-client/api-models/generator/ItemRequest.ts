class ItemRequest {
    itemId: string;
    skinValue?: string;
    hoverEffect?: boolean;
    enchanted?: boolean;
    data?: string;

    constructor(
        itemId: string = "",
        skinValue?: string,
        hoverEffect: boolean = false,
        enchanted: boolean = false,
        data?: string
    ) {
        this.itemId = itemId;
        this.skinValue = skinValue;
        this.hoverEffect = hoverEffect;
        this.enchanted = enchanted;
        this.data = data;
    }
}

export default ItemRequest;