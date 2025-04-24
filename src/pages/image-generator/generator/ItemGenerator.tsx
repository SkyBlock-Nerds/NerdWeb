import {useState} from "react";
import postGetImg from "../../../api-client/requests/PostGetImg.ts";
import ItemIdField from "../../../components/input-fields/impl/dropdown/ItemIdField.tsx";
import GenerateButton from "../../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../../components/generator/OutputDisplay.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import ItemRequest, {defaultItemRequest} from "../../../api-client/api-models/generator/ItemRequest.ts";
import EnchantedField from "../../../components/input-fields/impl/checkbox/EnchantedField.tsx";
import HoverEffectField from "../../../components/input-fields/impl/checkbox/HoverEffectField.tsx";

function ItemGenerator() {
    const [currentRequest, setCurrentRequest] = useState<ItemRequest>(defaultItemRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            setOutput(await postGetImg("/generator/item", currentRequest));
        } catch (error) {
            console.log(error);
            setError(
                // @ts-expect-error default error type
                new TextDecoder().decode(error.response?.data) ||
                // @ts-expect-error default error type
                error.message ||
                "An error occurred while generating the image."
            );
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2">
                    <h5>Input:</h5>
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

                    <GenerateButton
                        onClick={handleSubmit}
                    />
                </div>
                <div className="col-md-6 mt-2">
                    <OutputDisplay
                        outputImg={output}
                        error={error}
                    />
                </div>
            </div>
        </div>
    );
}

export default ItemGenerator;