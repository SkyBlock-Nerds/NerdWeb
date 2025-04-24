import {useState} from "react";
import postGetImg from "../../../api-client/requests/PostGetImg.ts";
import GenerateButton from "../../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../../components/generator/OutputDisplay.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import AbiphoneField from "../../../components/input-fields/impl/checkbox/AbiphoneField.tsx";
import MultiDialogueRequest, {
    defaultMultiDialogueRequest
} from "../../../api-client/api-models/generator/MultiDialogueRequest.ts";
import NpcNameListField from "../../../components/input-fields/impl/custom/list/NpcNameListField.tsx";
import MultiNpcDialogueLineListField
    from "../../../components/input-fields/impl/custom/list/MultiNpcDialogueLineListField.tsx";

function MultiDialogueGenerator() {
    const [currentRequest, setCurrentRequest] = useState<MultiDialogueRequest>(defaultMultiDialogueRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            setOutput(await postGetImg("/generator/dialogue/multi", currentRequest));
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
                        <NpcNameListField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, npcNames: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <MultiNpcDialogueLineListField
                            npcNames={currentRequest.npcNames}
                            setValue={(value) =>{
                                setCurrentRequest((prev) => ({...prev, dialogue: value}))
                            }}
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
                        <AbiphoneField
                            value={currentRequest.abiphone}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, abiphone: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <SkinTextureField
                            value={currentRequest.skinValue}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, skinValue: value}))
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
    );
}

export default MultiDialogueGenerator;