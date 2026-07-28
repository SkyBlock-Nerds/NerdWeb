import { minecraftPackString } from "../../requests/GetAutocomplete.ts";

class TextRequest {
    text: string;
    centered?: boolean;
    alpha?: number;
    padding?: number;
    maxLineLength?: number;
    renderBorder?: boolean;
    texturePack?: string;
    tooltipStyle?: string;

    constructor(
        text: string = "",
        centered: boolean = false,
        alpha: number = 245,
        padding: number = 0,
        maxLineLength: number = 91,
        renderBorder: boolean = false,
        texturePack: string = minecraftPackString,
        tooltipStyle?: string,
    ) {
        this.text = text;
        this.centered = centered;
        this.alpha = alpha;
        this.padding = padding;
        this.maxLineLength = maxLineLength;
        this.renderBorder = renderBorder;
        this.texturePack = texturePack;
        this.tooltipStyle = tooltipStyle;
    }
}

export default TextRequest;