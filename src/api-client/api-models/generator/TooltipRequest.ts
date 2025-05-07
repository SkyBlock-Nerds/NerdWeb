import InventoryItem from "./submodels/InventoryItem.ts";

class TooltipRequest {
    itemName?: string;
    itemLore?: string;
    itemType?: string;
    rarity?: string;
    itemId?: string;
    skinValue?: string;
    recipe?: InventoryItem[];
    alpha?: number;
    padding?: number;
    disableRarityLineBreak?: boolean;
    enchanted?: boolean;
    centered?: boolean;
    paddingFirstLine?: boolean;
    maxLineLength?: number;
    toolTipSide?: string;
    renderBorder?: boolean;

    constructor(
        itemName: string = "",
        itemLore: string = "",
        itemType: string = "",
        rarity: string = "",
        itemId: string = "",
        skinValue: string = "",
        recipe: InventoryItem[] = [],
        alpha: number = 245,
        padding: number = 0,
        disableRarityLineBreak: boolean = false,
        enchanted: boolean = false,
        centered: boolean = false,
        paddingFirstLine: boolean = true,
        maxLineLength: number = 36,
        toolTipSide: TooltipSide = TooltipSide.LEFT,
        renderBorder: boolean = true
    ) {
        this.itemName = itemName;
        this.itemLore = itemLore;
        this.itemType = itemType;
        this.rarity = rarity;
        this.itemId = itemId;
        this.skinValue = skinValue;
        this.recipe = recipe;
        this.alpha = alpha;
        this.padding = padding;
        this.disableRarityLineBreak = disableRarityLineBreak;
        this.enchanted = enchanted;
        this.centered = centered;
        this.paddingFirstLine = paddingFirstLine;
        this.maxLineLength = maxLineLength;
        this.toolTipSide = toolTipSide;
        this.renderBorder = renderBorder;
    }
}

export enum TooltipSide {
    LEFT = "left",
    RIGHT = "right",
}

export default TooltipRequest;