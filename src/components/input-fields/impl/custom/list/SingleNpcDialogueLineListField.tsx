import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from "react";
import {v4 as uuid} from 'uuid';
import SingleNpcDialogueLineField from "../SingleNpcDialogueLineField.tsx";

type LocalLine = {
    id: string;
    data: string;
};

function SingleNpcDialogueLineListField({setValue}: {
    setValue: (value: string[]) => void;
}) {
    const [lines, setLines] = useState<LocalLine[]>([]);

    const handleSetInventoryItem = (index: number, updatedLine: string) => {
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
                <SingleNpcDialogueLineField
                    key={itemWrapper.id}
                    dialogueLine={itemWrapper.data}
                    setDialogueLine={(updatedItem) => handleSetInventoryItem(index, updatedItem)}
                    onRemove={() => handleRemoveLine(index)}
                />
            ))}

            {lines.length === 0 ? <br/> : ""}
            <button
                className="btn btn-secondary mt-2"
                onClick={() =>
                    setLines([...lines, {id: uuid(), data: ""}])
                }
            >
                Add Line
            </button>
        </>
    );
}

export default SingleNpcDialogueLineListField;