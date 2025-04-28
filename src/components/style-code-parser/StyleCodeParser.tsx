import colorMap from "./ColorCodes";

function StyleCodeParser({textToBeParsed}: { textToBeParsed: string | undefined }) {
    const parseTextWithStyles = (
        text: string, defaultCode?: string
    ) => {
        const parts =
            text
                .split(/(&[0-9a-fk-or]|\n)/)
                .filter(value => value !== "");

        let currentColor: string | null = defaultCode && colorMap[defaultCode] ? colorMap[defaultCode] : null;
        let isBold = false;
        let isItalic = false;
        let isStrikethrough = false;
        let isObfuscated = false;
        let isUnderline = false;

        const resetStyles = () => {
            currentColor = defaultCode && colorMap[defaultCode] ? colorMap[defaultCode] : null;
            isBold = false;
            isItalic = false;
            isStrikethrough = false;
            isObfuscated = false;
            isUnderline = false;
        };

        return parts.map((part, index) => {
            const formatConditionalResetStyles = () => {
                const previousPart = parts[index - 1];
                if (!/&[0-9a-fk-o]/.test(previousPart)) {
                    resetStyles();
                }
            }

            if (colorMap[part]) {
                formatConditionalResetStyles();
                currentColor = colorMap[part];
                return null;
            }

            if (part === "&k") {
                formatConditionalResetStyles();
                isObfuscated = true;
                return null;
            }

            if (part === "&l") {
                formatConditionalResetStyles();
                isBold = true;
                return null;
            }

            if (part === "&m") {
                formatConditionalResetStyles();
                isStrikethrough = true;
                return null;
            }

            if (part === "&n") {
                formatConditionalResetStyles();
                isUnderline = true;
                return null;
            }

            if (part === "&o") {
                formatConditionalResetStyles();
                isItalic = true;
                return null;
            }

            if (part === "&r") {
                resetStyles();
                return null;
            }

            if (part === "\n") {
                return <br key={index}/> //TODO: find something that actually works here
            }

            const style = {
                color: currentColor || "inherit",
                fontWeight: isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: [
                    isStrikethrough ? "line-through" : "",
                    isUnderline ? "underline" : ""
                ].join(" "),
            };

            return (
                <span key={index} style={style}>
                    {isObfuscated ? part.replace(/./g, "[]") : part}
                </span>
            );
        });
    };

    return (
        <>
            {textToBeParsed && parseTextWithStyles(textToBeParsed, "&7")}
        </>
    );
}

export default StyleCodeParser;