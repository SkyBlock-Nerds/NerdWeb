import ItemLocation from "./ItemLocation.ts";

class InventoryItem {
    itemId: string;
    location: ItemLocation[]; // rename back to locations when backend gets fixed
    amount?: number;
    extraData?: string;

    constructor(
        itemId: string,
        location: ItemLocation,
        amount?: number,
        extraData?: string
    ) {
        this.itemId = itemId;
        this.location = [location];
        this.amount = amount;
        this.extraData = extraData;
    }
}

export default InventoryItem;