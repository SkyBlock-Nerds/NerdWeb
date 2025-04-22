import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/submodels/InventoryItem.ts";
import ItemIdField from "../dropdown/ItemIdField.tsx";
import NumberField from "../../NumberField.tsx";

function ItemField({inventoryItem, setInventoryItem, onRemove}: {
    inventoryItem: InventoryItem;
    setInventoryItem: (value: InventoryItem) => void;
    onRemove: () => void
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
                    />
                    <NumberField
                        setValue={(value) => {
                            inventoryItem.location[0] = value;
                            setInventoryItem(inventoryItem);
                        }}
                        minValue={0}
                        formInfo="From Location"
                        formName="fromLocation"
                        value={inventoryItem.location[0]}
                    />
                    <NumberField
                        setValue={(value) => {
                            inventoryItem.location[1] = value;
                            setInventoryItem(inventoryItem);
                        }}
                        minValue={0}
                        formInfo="To Location"
                        formName="toLocation"
                        value={inventoryItem.location[1]}
                    />
                    <NumberField
                        setValue={(value) => {
                            inventoryItem.amount = value;
                            setInventoryItem(inventoryItem);
                        }}
                        minValue={1}
                        maxValue={64}
                        formInfo="Amount"
                        formName="toLocation"
                        value={inventoryItem.amount}
                    />
                    <input /*TODO: Probably should make this a <SmallTextField> (When it gets implemented (needs to be disabled={true} for now))*/
                        disabled={true}
                        type="text"
                        className="form-control"
                        placeholder="Extra Data"
                        required={true}
                        onChange={(e) => {
                            inventoryItem.extraData = e.target.value;
                            setInventoryItem(inventoryItem);
                        }}
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