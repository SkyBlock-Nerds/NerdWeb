import BaseGenerator from "../BaseGenerator.tsx";
import ItemIdField from "../../../components/input-fields/impl/dropdown/ItemIdField.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import ItemRequest from "../../../api-client/api-models/generator/ItemRequest.ts";
import EnchantedField from "../../../components/input-fields/impl/checkbox/EnchantedField.tsx";
import HoverEffectField from "../../../components/input-fields/impl/checkbox/HoverEffectField.tsx";

function ItemGenerator() {
    return (
        <BaseGenerator<ItemRequest>
            defaultRequest={new ItemRequest()}
            endpoint="/generator/item"
        >
            {(currentRequest, setCurrentRequest) => (
                <>
                    <div className="mb-3">
                        <ItemIdField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, itemId: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <SkinTextureField
                            value={currentRequest.skinValue}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, skinValue: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <EnchantedField
                            value={currentRequest.enchanted}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, enchanted: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <HoverEffectField
                            value={currentRequest.hoverEffect}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, hoverEffect: value}))
                            }
                        />
                    </div>
                </>
            )}
        </BaseGenerator>
    );
}

export default ItemGenerator;