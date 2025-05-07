class InventoryItem {
    itemId: string;
    location: number[]; // array because from - to location (for invs)
    amount?: number;
    extraData?: string;

    constructor(
        itemId: string,
        location: number[],
        amount?: number,
        extraData?: string
    ) {
        this.itemId = itemId;
        this.location = location;
        this.amount = amount;
        this.extraData = extraData;

        if (this.location.length === 1) {
            this.location = [location[0], location[0]];
        } else if (this.location.length > 2) {
            console.warn("Invalid location given to Inventory Item Ctor", location);
            this.location = [location[0], location[1]];
        }
    }
}

export function cleanupLocations(inventoryItems: InventoryItem[]): InventoryItem[] {
    const output: InventoryItem[] = [];
    for (const inventoryItem of inventoryItems) {
        output.push(cleanupLocation(inventoryItem));
    }
    return output;
}

export function cleanupLocation(inventoryItem: InventoryItem): InventoryItem {
    if (inventoryItem.location.length == 0) {
        inventoryItem.location[0] = 0;
    } else if (inventoryItem.location.length == 2) {
        if (inventoryItem.location[0] > inventoryItem.location[1]) {
            inventoryItem.location = [inventoryItem.location[0]];
        }
    }
    return inventoryItem;
}

export default InventoryItem;