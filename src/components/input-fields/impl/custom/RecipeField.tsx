import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/submodels/InventoryItem.ts";
import ItemListField from "./list/ItemListField.tsx";

function RecipeField({setValue}: { setValue: (value: InventoryItem[]) => void }) {
    return (
        <>
            <ItemListField
                setValue={setValue}
                formTitle={"Recipe:"}
            />
        </>
    );
}

export default RecipeField;