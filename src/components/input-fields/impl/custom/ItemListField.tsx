import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/submodels/InventoryItem.ts";
import {useState} from "react";
import ItemField from "./ItemField.tsx";
import {v4 as uuid} from 'uuid';

type LocalItem = {
    id: string;
    data: InventoryItem;
};

function ItemListField({setValue, formTitle}: {
    setValue: (value: InventoryItem[]) => void;
    formTitle: string;
}) {
    const [items, setItems] = useState<LocalItem[]>([]);

    const handleSetInventoryItem = (index: number, updatedItem: InventoryItem) => {
        const updatedItems = [...items];
        updatedItems[index] = {...updatedItems[index], data: updatedItem};
        setItems(updatedItems);
        setValue(updatedItems.map((i) => i.data)); // pass only the InventoryItems up
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        setValue(updatedItems.map((i) => i.data));
    };

    return (
        <>
            <label className="form-label">{formTitle}</label>
            {items.length > 0 ? <br/> : ""}
            {items.map((itemWrapper, index) => (
                <ItemField
                    key={itemWrapper.id}
                    inventoryItem={itemWrapper.data}
                    setInventoryItem={(updatedItem) => handleSetInventoryItem(index, updatedItem)}
                    onRemove={() => handleRemoveItem(index)}
                />
            ))}

            {items.length === 0 ? <br/> : ""}
            <button
                className="btn btn-secondary mt-2"
                onClick={() =>
                    setItems([...items, {id: uuid(), data: new InventoryItem("", [], 1)}])
                }
            >
                Add Item
            </button>
        </>
    );
}

export default ItemListField;