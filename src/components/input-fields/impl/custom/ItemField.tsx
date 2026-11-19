import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/generator/submodels/InventoryItem.ts";
import ItemIdField from "../search-field/ItemIdField.tsx";
import NumberField from "../../NumberField.tsx";
import SmallTextField from "../../SmallTextField.tsx";

function ItemField({ inventoryItem, setInventoryItem, onRemove, texturePack }: {
    inventoryItem: InventoryItem;
    setInventoryItem: (value: InventoryItem) => void;
    onRemove: () => void;
    texturePack?: string;
}) {
    return (
        <>
            <label className="form-label">Item:</label>
            <div className="mb-3">
                <div className="input-group  align-items-start">
                    <ItemIdField
                        setValue={(value) => {
                            inventoryItem.itemId = value;
                            setInventoryItem(inventoryItem);
                        }}
                        noLabel={true}
                        value={inventoryItem.itemId}
                        texturePack={texturePack}
                    />
                    <NumberField
                        setValue={(value) => {
                            inventoryItem.locations[0].location1 = value ?? 0;
                            setInventoryItem(inventoryItem);
                        }}
                        minValue={0}
                        formInfo="From Location"
                        formName="fromLocation"
                        value={inventoryItem.locations[0].location1}
                    />
                    <NumberField
                        setValue={(value) => {
                            inventoryItem.locations[0].location2 = value ?? 0;
                            setInventoryItem(inventoryItem);
                        }}
                        minValue={inventoryItem.locations[0].location1}
                        formInfo="To Location"
                        formName="toLocation"
                        value={inventoryItem.locations[0].location2}
                    />
                    <NumberField
                        setValue={(value) => {
                            inventoryItem.amount = value;
                            setInventoryItem(inventoryItem);
                        }}
                        minValue={1}
                        maxValue={64}
                        formInfo="Amount"
                        formName="amount"
                        value={inventoryItem.amount}
                    />
                    <SmallTextField
                        value={inventoryItem.extraData?.join(", ") ?? ""}
                        setValue={(value) => {
                            inventoryItem.extraData = value
                                .split(",")
                                .map((entry) => entry.trim())
                                .filter((entry) => entry.length > 0);
                            setInventoryItem(inventoryItem);
                        }}
                        formName="extraData"
                        formInfo="Extra Data (comma-separated)"
                        required={false}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={onRemove}>
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
}

export default ItemField;
