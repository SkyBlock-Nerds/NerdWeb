import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/generator/submodels/InventoryItem.ts";
import ItemListField from "./list/ItemListField.tsx";

function RecipeField({setValue, value = [], texturePack}: {
    setValue: (value: InventoryItem[]) => void;
    value?: InventoryItem[];
    texturePack?: string;
}) {
    return (
        <>
            <ItemListField
                setValue={setValue}
                formTitle={"Inventory:"}
                value={value}
                texturePack={texturePack}
            />
        </>
    );
}

export default RecipeField;
