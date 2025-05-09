import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/generator/submodels/InventoryItem.ts";
import ItemListField from "./list/ItemListField.tsx";

function RecipeField({setValue, value = []}: {
    setValue: (value: InventoryItem[]) => void;
    value?: InventoryItem[];
}) {
    return (
        <>
            <ItemListField
                setValue={setValue}
                formTitle={"Inventory:"}
                value={value}
            />
        </>
    );
}

export default RecipeField;