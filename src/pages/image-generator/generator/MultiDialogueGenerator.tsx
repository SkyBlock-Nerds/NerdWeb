import BaseGenerator from "../BaseGenerator.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import AbiphoneField from "../../../components/input-fields/impl/checkbox/AbiphoneField.tsx";
import MultiDialogueRequest from "../../../api-client/api-models/generator/MultiDialogueRequest.ts";
import NpcNameListField from "../../../components/input-fields/impl/custom/list/NpcNameListField.tsx";
import MultiNpcDialogueLineListField from "../../../components/input-fields/impl/custom/list/MultiNpcDialogueLineListField.tsx";
import { useLocation } from "react-router-dom";

function MultiDialogueGenerator() {
    const location = useLocation();
    const recoveredRequest = location.state?.recoveredRequest;

    return (
        <BaseGenerator<MultiDialogueRequest>
            defaultRequest={recoveredRequest || new MultiDialogueRequest()}
            endpoint="/generator/dialogue/multi"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
                    <div className="mb-3">
                        <NpcNameListField
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new MultiDialogueRequest();
                                    Object.assign(updatedRequest, prev, { npcNames: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <MultiNpcDialogueLineListField
                            npcNames={currentRequest.npcNames}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new MultiDialogueRequest();
                                    Object.assign(updatedRequest, prev, { dialogue: value });
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
                                    const updatedRequest = new MultiDialogueRequest();
                                    Object.assign(updatedRequest, prev, { maxLineLength: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <AbiphoneField
                            value={currentRequest.abiphone}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new MultiDialogueRequest();
                                    Object.assign(updatedRequest, prev, { abiphone: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <SkinTextureField
                            value={currentRequest.skinValue}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new MultiDialogueRequest();
                                    Object.assign(updatedRequest, prev, { skinValue: value });
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

export default MultiDialogueGenerator;