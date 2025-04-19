class InventoryItem {
    itemId: string;
    location: number;
    amount?: number;
    extraData?: string[];

    constructor(
        itemId: string,
        location: number,
        amount?: number,
        extraData?: string[]
    ) {
        this.itemId = itemId;
        this.location = location;
        this.amount = amount;
        this.extraData = extraData;
    }
}

export default InventoryItem;