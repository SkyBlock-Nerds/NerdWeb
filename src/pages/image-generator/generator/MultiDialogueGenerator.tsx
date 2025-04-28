import BaseGenerator from "../BaseGenerator.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import AbiphoneField from "../../../components/input-fields/impl/checkbox/AbiphoneField.tsx";
import MultiDialogueRequest, {defaultMultiDialogueRequest} from "../../../api-client/api-models/generator/MultiDialogueRequest.ts";
import NpcNameListField from "../../../components/input-fields/impl/custom/list/NpcNameListField.tsx";
import MultiNpcDialogueLineListField from "../../../components/input-fields/impl/custom/list/MultiNpcDialogueLineListField.tsx";

function MultiDialogueGenerator() {
    return (
        <BaseGenerator<MultiDialogueRequest>
            defaultRequest={defaultMultiDialogueRequest}
            endpoint="/generator/dialogue/multi"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
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

export default MultiDialogueGenerator;