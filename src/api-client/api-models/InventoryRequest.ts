import InventoryItem from "./submodels/InventoryItem.ts";

class InventoryRequest {
    inventoryItems: InventoryItem[];
    rows?: number;
    columns?: number;
    hoveredItemString?: string;
    containerName?: string;
    renderBorder?: boolean;

    constructor(
        inventoryItems: InventoryItem[],
        rows?: number,
        slotsPerRow?: number,
        hoveredItemString?: string,
        containerName?: string,
        renderBorder?: boolean
    ) {
        this.inventoryItems = inventoryItems;
        this.rows = rows;
        this.columns = slotsPerRow;
        this.hoveredItemString = hoveredItemString;
        this.containerName = containerName;
        this.renderBorder = renderBorder;
    }
}

export const defaultInventoryRequest = new InventoryRequest(
    [],
    1,
    9,
    undefined,
    "Inventory",
    true
);

export default InventoryRequest;