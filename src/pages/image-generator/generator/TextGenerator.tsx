import BaseGenerator from "../BaseGenerator.tsx";
import TextRequest, {defaultTextRequest} from "../../../api-client/api-models/generator/TextRequest.ts";
import AlphaField from "../../../components/input-fields/impl/number/AlphaField.tsx";
import PaddingField from "../../../components/input-fields/impl/number/PaddingField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import CenteredField from "../../../components/input-fields/impl/checkbox/CenteredField.tsx";
import RenderBorderField from "../../../components/input-fields/impl/checkbox/RenderBorderField.tsx";
import BigTextField from "../../../components/input-fields/BigTextField.tsx";
import StyleCodeParser from "../../../components/style-code-parser/StyleCodeParser.tsx";

function TextGenerator() {
    return (
        <BaseGenerator<TextRequest>
            defaultRequest={defaultTextRequest}
            endpoint="/generator/text"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
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
                        <StyleCodeParser textToBeParsed={currentRequest.text} />
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
                </>
            )}
        </BaseGenerator>
    );
}

export default TextGenerator;