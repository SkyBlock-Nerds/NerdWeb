import InventoryItem from "./submodels/InventoryItem.ts";

class InventoryRequest {
    inventoryItems: InventoryItem[];
    rows?: number;
    columns?: number;
    hoveredItemString?: string;
    containerName?: string;
    renderBorder?: boolean;

    constructor(
        inventoryItems: InventoryItem[] = [],
        rows: number = 1,
        slotsPerRow: number = 9,
        hoveredItemString?: string,
        containerName: string = "Inventory",
        renderBorder: boolean = true
    ) {
        this.inventoryItems = inventoryItems;
        this.rows = rows;
        this.columns = slotsPerRow;
        this.hoveredItemString = hoveredItemString;
        this.containerName = containerName;
        this.renderBorder = renderBorder;
    }
}

export default InventoryRequest;