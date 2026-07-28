import InventoryItem from "./submodels/InventoryItem.ts";
import { minecraftPackString } from "../../requests/GetAutocomplete.ts";

class InventoryRequest {
    inventoryItems: InventoryItem[];
    rows?: number;
    columns?: number;
    hoveredItemString?: string;
    containerName?: string;
    renderBorder?: boolean;
    texturePack?: string;
    tooltipStyle?: string;

    constructor(
        inventoryItems: InventoryItem[] = [],
        rows: number = 1,
        slotsPerRow: number = 9,
        hoveredItemString?: string,
        containerName: string = "Inventory",
        renderBorder: boolean = true,
        texturePack: string = minecraftPackString,
        tooltipStyle?: string,
    ) {
        this.inventoryItems = inventoryItems;
        this.rows = rows;
        this.columns = slotsPerRow;
        this.hoveredItemString = hoveredItemString;
        this.containerName = containerName;
        this.renderBorder = renderBorder;
        this.texturePack = texturePack;
        this.tooltipStyle = tooltipStyle;
    }
}

export default InventoryRequest;