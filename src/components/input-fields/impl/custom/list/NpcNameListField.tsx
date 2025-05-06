import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from "react";
import {v4 as uuid} from 'uuid';
import NpcNameField from '../NpcNameField.tsx';

type LocalLine = {
    id: string;
    data: string;
};

function SingleNpcDialogueLineListField({setValue}: {
    setValue: (value: string[]) => void;
}) {
    const [npcNames, setNpcNames] = useState<LocalLine[]>([]);

    const handleSetInventoryItem = (index: number, updatedLine: string) => {
        const updatedItems = [...npcNames];
        updatedItems[index] = {...updatedItems[index], data: updatedLine};
        setNpcNames(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    const handleRemoveLine = (index: number) => {
        const updatedItems = npcNames.filter((_, i) => i !== index);
        setNpcNames(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    return (
        <>
            <label className="form-label">Npc Names:</label>
            {npcNames.length > 0 ? <br/> : ""}
            {npcNames.map((itemWrapper, index) => (
                <NpcNameField
                    key={itemWrapper.id}
                    value={itemWrapper.data}
                    setValue={(updatedItem) => handleSetInventoryItem(index, updatedItem)}
                    onRemove={() => handleRemoveLine(index)}
                />
            ))}

            {npcNames.length === 0 ? <br/> : ""}
            <button
                className="btn btn-secondary mt-2"
                onClick={() =>
                    setNpcNames([...npcNames, {id: uuid(), data: ""}])
                }
            >
                Add Npc
            </button>
        </>
    );
}

export default SingleNpcDialogueLineListField;