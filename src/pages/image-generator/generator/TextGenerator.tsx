import BaseGenerator from "../BaseGenerator.tsx";
import TextRequest from "../../../api-client/api-models/generator/TextRequest.ts";
import AlphaField from "../../../components/input-fields/impl/number/AlphaField.tsx";
import PaddingField from "../../../components/input-fields/impl/number/PaddingField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import CenteredField from "../../../components/input-fields/impl/checkbox/CenteredField.tsx";
import RenderBorderField from "../../../components/input-fields/impl/checkbox/RenderBorderField.tsx";
import BigTextField from "../../../components/input-fields/BigTextField.tsx";
import StyleCodeParser from "../../../components/style-code-parser/StyleCodeParser.tsx";
import { useLocation } from "react-router-dom";

function TextGenerator() {
    const location = useLocation();
    const recoveredRequest = location.state?.recoveredRequest
        ? Object.assign(new TextRequest(), location.state.recoveredRequest)
        : null;

    return (
        <BaseGenerator<TextRequest>
            defaultRequest={recoveredRequest || new TextRequest()}
            endpoint="/generator/text"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
                    <div className="mb-3">
                        <BigTextField
                            value={currentRequest.text}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new TextRequest();
                                    Object.assign(updatedRequest, prev, { text: value });
                                    return updatedRequest;
                                })
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
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new TextRequest();
                                    Object.assign(updatedRequest, prev, { centered: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <AlphaField
                            value={currentRequest.alpha}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new TextRequest();
                                    Object.assign(updatedRequest, prev, { alpha: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <PaddingField
                            value={currentRequest.padding}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new TextRequest();
                                    Object.assign(updatedRequest, prev, { padding: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <MaxLineLengthField
                            value={currentRequest.maxLineLength}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new TextRequest();
                                    Object.assign(updatedRequest, prev, { maxLineLength: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <RenderBorderField
                            value={currentRequest.renderBorder}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new TextRequest();
                                    Object.assign(updatedRequest, prev, { renderBorder: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                </>
            )}
        </BaseGenerator>
    );
}

export default TextGenerator;