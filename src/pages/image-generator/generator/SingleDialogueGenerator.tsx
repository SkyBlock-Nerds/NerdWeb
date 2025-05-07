import BaseGenerator from "../BaseGenerator.tsx";
import SingleDialogueRequest from "../../../api-client/api-models/generator/SingleDialogueRequest.ts";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import NpcNameField from "../../../components/input-fields/impl/small-text/NpcNameField.tsx";
import AbiphoneField from "../../../components/input-fields/impl/checkbox/AbiphoneField.tsx";
import SingleNpcDialogueLineListField from "../../../components/input-fields/impl/custom/list/SingleNpcDialogueLineListField.tsx";
import { useLocation } from "react-router-dom";

function SingleDialogueGenerator() {
    const location = useLocation();
    const recoveredRequest = location.state?.recoveredRequest;

    return (
        <BaseGenerator<SingleDialogueRequest>
            defaultRequest={recoveredRequest || new SingleDialogueRequest()}
            endpoint="/generator/dialogue/single"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
                    <div className="mb-3">
                        <NpcNameField
                            value={currentRequest.npcName}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new SingleDialogueRequest();
                                    Object.assign(updatedRequest, prev, { npcName: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <SingleNpcDialogueLineListField
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new SingleDialogueRequest();
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
                                    const updatedRequest = new SingleDialogueRequest();
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
                                    const updatedRequest = new SingleDialogueRequest();
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
                                    const updatedRequest = new SingleDialogueRequest();
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

export default SingleDialogueGenerator;