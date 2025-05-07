class TextRequest {
    text: string;
    centered?: boolean;
    alpha?: number;
    padding?: number;
    maxLineLength?: number;
    renderBorder?: boolean;

    constructor(
        text: string = "",
        centered: boolean = false,
        alpha: number = 245,
        padding: number = 0,
        maxLineLength: number = 91,
        renderBorder: boolean = false
    ) {
        this.text = text;
        this.centered = centered;
        this.alpha = alpha;
        this.padding = padding;
        this.maxLineLength = maxLineLength;
        this.renderBorder = renderBorder;
    }
}

export default TextRequest;