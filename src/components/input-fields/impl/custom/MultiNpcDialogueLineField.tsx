import MultiDialogueLine from "../../../../api-client/api-models/generator/submodels/MultiDialogueLine";
import DropdownField from "../../DropdownField.tsx";
import SmallTextField from "../../SmallTextField.tsx";
import StyleCodeParser from "../../../style-code-parser/StyleCodeParser.tsx";

function MultiNpcDialogueLineField({npcNames, dialogueLine, setDialogueLine, onRemove}: {
    npcNames: string[];
    dialogueLine: MultiDialogueLine;
    setDialogueLine: (value: MultiDialogueLine) => void;
    onRemove: () => void;
}) {
    return (
        <>
            <label className="form-label">Line:</label>
            <div className="mb-3">
                <div className="input-group align-items-start">
                    <DropdownField
                        value={npcNames[dialogueLine.npcIndex]}
                        /*No warranty on this: I wrote this 2 seconds ago and already forgot how it works*/
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
                <StyleCodeParser textToBeParsed={dialogueLine.line}/>
            </div>
        </>
    );
}

export default MultiNpcDialogueLineField;