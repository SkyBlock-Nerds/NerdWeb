import TextRequest, {defaultTextRequest} from "../../../api-client/api-models/TextRequest.ts";
import AlphaField from "../../../components/input-fields/impl/number/AlphaField.tsx";
import {useState} from "react";
import PaddingField from "../../../components/input-fields/impl/number/PaddingField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import postGetImg from "../../../api-client/requests/PostGetImg.ts";
import CenteredField from "../../../components/input-fields/impl/checkbox/CenteredField.tsx";
import RenderBorderField from "../../../components/input-fields/impl/checkbox/RenderBorderField.tsx";
import BigTextField from "../../../components/input-fields/BigTextField.tsx";
import GenerateButton from "../../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../../components/generator/OutputDisplay.tsx";
import StyleCodeParser from "../../../components/style-code-parser/StyleCodeParser.tsx";

function TextGenerator() {
    const [currentRequest, setCurrentRequest] = useState<TextRequest>(defaultTextRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            setOutput(await postGetImg("/generator/text", currentRequest));
        } catch (error) {
            console.log(error);
            setError(
                // @ts-expect-error default error type
                new TextDecoder().decode(error.response?.data) ||
                // @ts-expect-error default error type
                error.message ||
                "An error occurred while generating the image."
            );
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2">
                    <h5>Input:</h5>
                    <div className="mb-3">
                        <BigTextField
                            value={currentRequest.text}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, text: value}))
                            }
                            formLabel={"Text:"}
                            formName={"text"}
                            formInfo={"Enter text here"}
                        />
                        <StyleCodeParser textToBeParsed={currentRequest.text}/>
                    </div>
                    <div className="mb-3">
                        <CenteredField
                            value={currentRequest.centered}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, centered: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <AlphaField
                            value={currentRequest.alpha}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, alpha: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <PaddingField
                            value={currentRequest.padding}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, padding: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <MaxLineLengthField
                            value={currentRequest.maxLineLength}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, maxLineLength: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <RenderBorderField
                            value={currentRequest.renderBorder}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, renderBorder: value}))
                            }
                        />
                    </div>

                    <GenerateButton
                        onClick={handleSubmit}
                    />
                </div>
                <div className="col-md-6 mt-2">
                    <OutputDisplay
                        outputImg={output}
                        error={error}
                    />
                </div>
            </div>
        </div>
    )
        ;
}

export default TextGenerator;