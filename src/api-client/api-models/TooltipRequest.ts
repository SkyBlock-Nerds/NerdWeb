import InventoryItem from "./submodels/InventoryItem.ts";

class TooltipRequest {
    itemName?: string;
    itemLore?: string;
    itemType?: string;
    rarity?: string;
    itemId?: string;
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
        itemName?: string,
        itemLore?: string,
        itemType?: string,
        rarity?: string,
        itemId?: string,
        recipe?: InventoryItem[],
        alpha?: number,
        padding?: number,
        disableRarityLineBreak?: boolean,
        enchanted?: boolean,
        centered?: boolean,
        paddingFirstLine?: boolean,
        maxLineLength?: number,
        toolTipSide?: TooltipSide,
        renderBorder?: boolean
    ) {
        this.itemName = itemName;
        this.itemLore = itemLore;
        this.itemType = itemType;
        this.rarity = rarity;
        this.itemId = itemId;
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

export const defaultTooltipRequest = new TooltipRequest(
    "",
    "",
    "",
    "",
    "",
    [],
    255,
    0,
    false,
    false,
    false,
    true,
    36,
    TooltipSide.LEFT,
    true
);

export default TooltipRequest;