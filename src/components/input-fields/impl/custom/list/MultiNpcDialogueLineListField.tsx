import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from "react";
import {v4 as uuid} from 'uuid';
import MultiNpcDialogueLineField from "../MultiNpcDialogueLineField.tsx";
import MultiDialogueLine from "../../../../../api-client/api-models/generator/submodels/MultiDialogueLine.ts";

type LocalLine = {
    id: string;
    data: MultiDialogueLine;
};

function MultiNpcDialogueLineListField({setValue, npcNames, value = []}: {
    npcNames: string[];
    setValue: (value: MultiDialogueLine[]) => void;
    value?: MultiDialogueLine[];
}) {
    const [lines, setLines] = useState<LocalLine[]>(
        value.map((line) => ({ id: uuid(), data: line }))
    );

    const handleSetInventoryItem = (index: number, updatedLine: MultiDialogueLine) => {
        const updatedItems = [...lines];
        updatedItems[index] = {...updatedItems[index], data: updatedLine};
        setLines(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    const handleRemoveLine = (index: number) => {
        const updatedItems = lines.filter((_, i) => i !== index);
        setLines(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    return (
        <>
            <label className="form-label">Dialogue lines:</label>
            {lines.length > 0 ? <br/> : ""}
            {lines.map((itemWrapper, index) => (
                <MultiNpcDialogueLineField
                    key={itemWrapper.id}
                    dialogueLine={itemWrapper.data}
                    setDialogueLine={(updatedItem) => handleSetInventoryItem(index, updatedItem)}
                    onRemove={() => handleRemoveLine(index)}
                    npcNames={npcNames}
                />
            ))}

            {lines.length === 0 ? <br/> : ""}
            <button
                className="btn btn-secondary mt-2"
                onClick={() =>
                    setLines([...lines, {id: uuid(), data: new MultiDialogueLine(lines.length, "")}])
                }
            >
                Add Line
            </button>
        </>
    );
}

export default MultiNpcDialogueLineListField;