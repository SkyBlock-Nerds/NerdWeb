class TextRequest {
    text: string;
    centered?: boolean;
    alpha?: number;
    padding?: number;
    maxLineLength?: number;
    renderBorder?: boolean;

    constructor(
        text: string,
        centered?: boolean,
        alpha?: number,
        padding?: number,
        maxLineLength?: number,
        renderBorder?: boolean
    ) {
        this.text = text;
        this.centered = centered;
        this.alpha = alpha;
        this.padding = padding;
        this.maxLineLength = maxLineLength;
        this.renderBorder = renderBorder;
    }
}

export const defaultTextRequest = new TextRequest(
    "",
    false,
    255,
    0,
    91,
    false
);

export default TextRequest;