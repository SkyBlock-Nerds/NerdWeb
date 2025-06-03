import ItemLocation from "./ItemLocation.ts";

class InventoryItem {
    itemId: string;
    locations: ItemLocation[];
    amount?: number;
    extraData?: string;

    constructor(
        itemId: string,
        location: ItemLocation,
        amount?: number,
        extraData?: string
    ) {
        this.itemId = itemId;
        this.locations = [location];
        this.amount = amount;
        this.extraData = extraData;
    }
}

export default InventoryItem;