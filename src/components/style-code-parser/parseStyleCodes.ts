import colorMap from "./ColorCodes.ts";

export interface StyledSegment {
    kind: "text" | "linebreak";
    text?: string;
    style?: {
        color: string;
        fontFamily: string;
        fontWeight: string;
        fontStyle: string;
        textDecoration: string;
    };
}

const FONT_CODES: Record<string, string> = {
    "&g": "MinecraftGalactic",
    "&h": "MinecraftIllageralt",
};

/**
 * Parses Minecraft legacy color, style, and font codes into renderable segments.
 */
export function parseStyleCodes(text: string, defaultCode?: string): StyledSegment[] {
    const parts = text
        .split(/(&[0-9a-hk-or]|\n)/)
        .filter(value => value !== "");

    let currentColor: string | null = defaultCode && colorMap[defaultCode] ? colorMap[defaultCode] : null;
    let currentFont: string | null = null;
    let isBold = false;
    let isItalic = false;
    let isStrikethrough = false;
    let isObfuscated = false;
    let isUnderline = false;

    const resetStyles = (resetFont = false) => {
        currentColor = defaultCode && colorMap[defaultCode] ? colorMap[defaultCode] : null;
        if (resetFont) {
            currentFont = null;
        }
        isBold = false;
        isItalic = false;
        isStrikethrough = false;
        isObfuscated = false;
        isUnderline = false;
    };

    const segments: StyledSegment[] = [];

    parts.forEach((part, index) => {
        const formatConditionalResetStyles = () => {
            const previousPart = parts[index - 1];
            if (!/&[0-9a-hk-o]/.test(previousPart)) {
                resetStyles();
            }
        };

        if (colorMap[part]) {
            formatConditionalResetStyles();
            currentColor = colorMap[part];
            return;
        }

        if (FONT_CODES[part]) {
            currentFont = FONT_CODES[part];
            return;
        }

        if (part === "&k") {
            formatConditionalResetStyles();
            isObfuscated = true;
            return;
        }

        if (part === "&l") {
            formatConditionalResetStyles();
            isBold = true;
            return;
        }

        if (part === "&m") {
            formatConditionalResetStyles();
            isStrikethrough = true;
            return;
        }

        if (part === "&n") {
            formatConditionalResetStyles();
            isUnderline = true;
            return;
        }

        if (part === "&o") {
            formatConditionalResetStyles();
            isItalic = true;
            return;
        }

        if (part === "&r") {
            resetStyles(true);
            return;
        }

        if (part === "\n") {
            segments.push({ kind: "linebreak" });
            return;
        }

        segments.push({
            kind: "text",
            text: isObfuscated ? part.replace(/./g, "[]") : part,
            style: {
                color: currentColor || "inherit",
                fontFamily: currentFont || "inherit",
                fontWeight: isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: [
                    isStrikethrough ? "line-through" : "",
                    isUnderline ? "underline" : "",
                ].join(" "),
            },
        });
    });

    return segments;
}
