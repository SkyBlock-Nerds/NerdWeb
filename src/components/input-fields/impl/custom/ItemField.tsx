import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import InventoryItem from "../../../../api-client/api-models/submodels/InventoryItem.ts";
import {useEffect, useState} from "react";
import {getItemIdAutoComplete} from "../../../../api-client/requests/GetAutocomplete.ts";


function ItemField({inventoryItem, setInventoryItem, onRemove}: { inventoryItem: InventoryItem; setInventoryItem: (value: InventoryItem) => void; onRemove: () => void }) {
    const [itemIdOptions, setItemIdOptions] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await getItemIdAutoComplete();
            setItemIdOptions(result);
        };
        fetchOptions();
    }, []);

    return (
        <>
            <label className="form-label">Item:</label>
            <div className="mb-3">
                <div className="input-group  align-items-start">
                    <select
                        name="itemId"
                        className="form-select"
                        required={false}
                        onChange={(e) => {
                            inventoryItem.itemId = e.target.value;
                            setInventoryItem(inventoryItem);
                        }}
                    >
                        <option disabled selected>Select an Item ID</option>
                        {itemIdOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option.replace(/_/g, " ")}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="From Location"
                        required={true}
                        value={inventoryItem.location[0]}
                        onChange={(e) => {
                            const parsedInt = parseInt(e.target.value);
                            if (isNaN(parsedInt)) return;
                            
                            inventoryItem.location[0] = parsedInt;
                            setInventoryItem(inventoryItem);
                        }}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="To Location"
                        required={true}
                        value={inventoryItem.location[1]}
                        onChange={(e) => {
                            const parsedInt = parseInt(e.target.value);
                            if (isNaN(parsedInt)) return;

                            inventoryItem.location[1] = parsedInt;
                            setInventoryItem(inventoryItem);
                        }}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Amount"
                        required={true}
                        min={0}
                        max={64}
                        value={inventoryItem.amount}
                        onChange={(e) => {
                            const parsedInt = parseInt(e.target.value);
                            if (isNaN(parsedInt)) return;

                            inventoryItem.amount = Math.min(64, Math.max(0, parsedInt));
                            setInventoryItem(inventoryItem);
                        }}
                    />
                    <input
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