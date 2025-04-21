import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/submodels/InventoryItem.ts";
import {useState} from "react";
import ItemField from "./ItemField.tsx";

function RecipeField({setValue}: { setValue: (value: InventoryItem[]) => void }) {
    const [items, setItems] = useState<InventoryItem[]>([]);

    const handleSetInventoryItem = (index: number, updatedItem: InventoryItem) => {
        const updatedItems = [...items];
        updatedItems[index] = updatedItem;
        setItems(updatedItems);
        setValue(updatedItems);
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        setValue(updatedItems);
    };

    return (
        <>
            <label className="form-label">Recipe:</label>
            {items.length > 0 ? <br/> : ""}
            {items.map((item, index) => (
                <ItemField
                    key={index}
                    inventoryItem={item}
                    setInventoryItem={(updatedItem) => handleSetInventoryItem(index, updatedItem)}
                    onRemove={() => handleRemoveItem(index)}
                />
            ))}
            {items.length === 0 ? <br/> : ""}
            <button
                className="btn btn-secondary mt-2"
                onClick={() => setItems([...items, new InventoryItem("", [], 1)])}
            >
                Add Item
            </button>
        </>
    );
}

export default RecipeField;