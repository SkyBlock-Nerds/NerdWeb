import MultiDialogueLine from "../../../../api-client/api-models/generator/submodels/MultiDialogueLine";
import DropdownField from "../../DropdownField.tsx";
import SmallTextField from "../../SmallTextField.tsx";
import StyleCodeParser from "../../../style-code-parser/StyleCodeParser.tsx";
import { CreateNpcTag } from "../../../../utils/CreateNpcTag.ts";

function MultiNpcDialogueLineField({npcNames, dialogueLine, setDialogueLine, onRemove, abiphone}: {
    npcNames: string[];
    dialogueLine: MultiDialogueLine;
    setDialogueLine: (value: MultiDialogueLine) => void;
    onRemove: () => void;
    abiphone: boolean;
}) {
    let npcName = "NPC Name";
    if (dialogueLine.npcIndex && dialogueLine.npcIndex < npcNames.length && dialogueLine.npcIndex >= 0) {
        npcName = npcNames[dialogueLine.npcIndex];
    }

    return (
        <>
            <label className="form-label">Line:</label>
            <div className="mb-3">
                <div className="input-group align-items-start">
                    <DropdownField
                        value={npcNames[dialogueLine.npcIndex]}
                        setValue={(selectedValue) => {
                            const npcIndex = npcNames.indexOf(selectedValue);
                            if (npcIndex !== -1) {
                                dialogueLine.npcIndex = npcIndex;
                                setDialogueLine({...dialogueLine});
                            }
                        }}
                        options={npcNames}
                        formName={"npcName"}
                        formInfo={"Npc Name"}
                    />
                    <SmallTextField
                        setValue={(value) => {
                            dialogueLine.line = value;
                            setDialogueLine({...dialogueLine});
                        }}
                        formInfo="Dialogue line"
                        formName="dialogueLine"
                        value={dialogueLine.line}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={onRemove}
                    >
                        Remove
                    </button>
                </div>
                <StyleCodeParser textToBeParsed={`${CreateNpcTag(npcName, abiphone)} &f ${dialogueLine.line}`}/>
            </div>
        </>
    );
}

export default MultiNpcDialogueLineField;