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
    const [items, setItems] = useState<LocalLine[]>([]);

    const handleSetInventoryItem = (index: number, updatedLine: string) => {
        const updatedItems = [...items];
        updatedItems[index] = {...updatedItems[index], data: updatedLine};
        setItems(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    const handleRemoveLine = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    return (
        <>
            <label className="form-label">Dialogue lines:</label>
            {items.length > 0 ? <br/> : ""}
            {items.map((itemWrapper, index) => (
                <SingleNpcDialogueLineField
                    key={itemWrapper.id}
                    dialogueLine={itemWrapper.data}
                    setDialogueLine={(updatedItem) => handleSetInventoryItem(index, updatedItem)}
                    onRemove={() => handleRemoveLine(index)}
                />
            ))}

            {items.length === 0 ? <br/> : ""}
            <button
                className="btn btn-secondary mt-2"
                onClick={() =>
                    setItems([...items, {id: uuid(), data: ""}])
                }
            >
                Add Item
            </button>
        </>
    );
}

export default SingleNpcDialogueLineListField;