import "./StyleCodeParser.css";
import { parseStyleCodes } from "./parseStyleCodes.ts";

function StyleCodeParser({ textToBeParsed }: { textToBeParsed: string | undefined }) {
    return (
        <>
            {textToBeParsed && parseStyleCodes(textToBeParsed, "&7").map((segment, index) => {
                if (segment.kind === "linebreak") {
                    return <br key={index} />;
                }

                return (
                    <span key={index} style={segment.style}>
                        {segment.text}
                    </span>
                );
            })}
        </>
    );
}

export default StyleCodeParser;
