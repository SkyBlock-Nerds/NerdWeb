import BaseGenerator from "../BaseGenerator.tsx";
import SingleDialogueRequest from "../../../api-client/api-models/generator/SingleDialogueRequest.ts";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import NpcNameField from "../../../components/input-fields/impl/small-text/NpcNameField.tsx";
import AbiphoneField from "../../../components/input-fields/impl/checkbox/AbiphoneField.tsx";
import SingleNpcDialogueLineListField from "../../../components/input-fields/impl/custom/list/SingleNpcDialogueLineListField.tsx";

function SingleDialogueGenerator() {
    return (
        <BaseGenerator<SingleDialogueRequest>
            defaultRequest={new SingleDialogueRequest()}
            endpoint="/generator/dialogue/single"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
                    <div className="mb-3">
                        <NpcNameField
                            value={currentRequest.npcName}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, npcName: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <SingleNpcDialogueLineListField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, dialogue: value}))
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
                </>
            )}
        </BaseGenerator>
    );
}

export default SingleDialogueGenerator;