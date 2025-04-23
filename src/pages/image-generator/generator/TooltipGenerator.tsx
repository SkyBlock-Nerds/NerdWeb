import {useState} from "react";
import postGetImg from "../../../api-client/requests/PostGetImg.ts";
import TooltipRequest, {defaultTooltipRequest} from "../../../api-client/api-models/TooltipRequest.ts";
import RarityField from "../../../components/input-fields/impl/dropdown/RarityField.tsx";
import ItemIdField from "../../../components/input-fields/impl/dropdown/ItemIdField.tsx";
import RecipeField from "../../../components/input-fields/impl/custom/RecipeField.tsx";
import AlphaField from "../../../components/input-fields/impl/number/AlphaField.tsx";
import PaddingField from "../../../components/input-fields/impl/number/PaddingField.tsx";
import DisableRarityLineBreakField
    from "../../../components/input-fields/impl/checkbox/DisableRarityLineBreakField.tsx";
import GenerateButton from "../../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../../components/generator/OutputDisplay.tsx";
import SmallTextField from "../../../components/input-fields/SmallTextField.tsx";
import BigTextField from "../../../components/input-fields/BigTextField.tsx";
import SkinTextureField from "../../../components/input-fields/impl/small-text/SkinTextureField.tsx";
import EnchantedField from "../../../components/input-fields/impl/checkbox/EnchantedField.tsx";
import PaddingFirstLineField from "../../../components/input-fields/impl/checkbox/PaddingFirstLineField.tsx";
import MaxLineLengthField from "../../../components/input-fields/impl/number/MaxLineLengthField.tsx";
import TooltipSideField from "../../../components/input-fields/impl/dropdown/TooltipSideField.tsx";
import RenderBorderField from "../../../components/input-fields/impl/checkbox/RenderBorderField.tsx";
import StyleCodeParser from "../../../components/style-code-parser/StyleCodeParser.tsx";

function TooltipGenerator() {
    const [currentRequest, setCurrentRequest] = useState<TooltipRequest>(defaultTooltipRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            setOutput(await postGetImg("/generator/tooltip", currentRequest));
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
                        <SmallTextField
                            value={currentRequest.itemName}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, itemName: value}))
                            }
                            formLabel={"Item Name:"}
                            formName={"itemName"}
                            formInfo={"Enter the item name here"}
                        />
                    </div>
                    <div className="mb-3">
                        <BigTextField
                            value={currentRequest.itemLore}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, itemLore: value}))
                            }
                            formLabel={"Item Lore:"}
                            formName={"itemLore"}
                            formInfo={"Enter the item lore here"}
                        />
                        <StyleCodeParser textToBeParsed={currentRequest.itemLore}/>
                    </div>
                    <div className="mb-3">
                        <SmallTextField
                            value={currentRequest.itemType}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, itemType: value}))
                            }
                            formLabel={"Item Type:"}
                            formName={"itemType"}
                            formInfo={"Enter the item type here"}
                        />
                    </div>
                    <div className="mb-3">
                        <RarityField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, rarity: value}))
                            }
                        />
                    </div>
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
                        <RecipeField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, recipe: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <AlphaField
                            value={currentRequest.alpha}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, alpha: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <PaddingField
                            value={currentRequest.padding}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, padding: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <DisableRarityLineBreakField
                            value={currentRequest.disableRarityLineBreak}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, disableRarityLineBreak: value}))
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
                        <PaddingFirstLineField
                            value={currentRequest.paddingFirstLine}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, paddingFirstLine: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <MaxLineLengthField
                            value={currentRequest.maxLineLength}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, maxLineLength: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <TooltipSideField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, tooltipSide: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <RenderBorderField
                            value={currentRequest.renderBorder}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, renderBorder: value}))
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

export default TooltipGenerator;