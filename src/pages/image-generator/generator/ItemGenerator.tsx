import BaseGenerator from "../BaseGenerator.tsx";
import ItemIdField from "../../../components/input-fields/impl/dropdown/ItemIdField.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import ItemRequest from "../../../api-client/api-models/generator/ItemRequest.ts";
import EnchantedField from "../../../components/input-fields/impl/checkbox/EnchantedField.tsx";
import HoverEffectField from "../../../components/input-fields/impl/checkbox/HoverEffectField.tsx";
import { useLocation } from "react-router-dom";

function ItemGenerator() {
    const location = useLocation();
    const recoveredRequest = location.state?.recoveredRequest;

    return (
        <BaseGenerator<ItemRequest>
            defaultRequest={recoveredRequest || new ItemRequest()}
            endpoint="/generator/item"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
                    <div className="mb-3">
                        <ItemIdField
                            value={currentRequest.itemId}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new ItemRequest();
                                    Object.assign(updatedRequest, prev, { itemId: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <SkinTextureField
                            value={currentRequest.skinValue}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new ItemRequest();
                                    Object.assign(updatedRequest, prev, { skinValue: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <EnchantedField
                            value={currentRequest.enchanted}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new ItemRequest();
                                    Object.assign(updatedRequest, prev, { enchanted: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <HoverEffectField
                            value={currentRequest.hoverEffect}
                            setValue={(value) =>
                                setCurrentRequest((prev) => {
                                    const updatedRequest = new ItemRequest();
                                    Object.assign(updatedRequest, prev, { hoverEffect: value });
                                    return updatedRequest;
                                })
                            }
                        />
                    </div>
                </>
            )}
        </BaseGenerator>
    );
}

export default ItemGenerator;