class ItemRequest {
    itemId: string;
    skinValue?: string;
    hoverEffect?: boolean;
    enchanted?: boolean;
    data?: string;

    constructor(
        itemId: string,
        skinValue?: string,
        hoverEffect?: boolean,
        enchanted?: boolean,
        data?: string
    ) {
        this.itemId = itemId;
        this.skinValue = skinValue;
        this.hoverEffect = hoverEffect;
        this.enchanted = enchanted;
        this.data = data;
    }
}

export const defaultItemRequest = new ItemRequest(
    "",
    "",
    false,
    false,
    undefined
);

export default ItemRequest;