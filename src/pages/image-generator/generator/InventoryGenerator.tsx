import {useState} from "react";
import postGetImg from "../../../api-client/requests/PostGetImg.ts";
import GenerateButton from "../../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../../components/generator/OutputDisplay.tsx";
import InventoryRequest, {defaultInventoryRequest} from "../../../api-client/api-models/InventoryRequest.ts";
import InventoryField from "../../../components/input-fields/impl/custom/InventoryField.tsx";
import RowField from "../../../components/input-fields/impl/number/RowField.tsx";
import ColumnsField from "../../../components/input-fields/impl/number/ColumnsField.tsx";
import HoveredItemString from "../../../components/input-fields/impl/big-text/HoveredItemString.tsx";
import ContainerNameField from "../../../components/input-fields/impl/small-text/ContainerNameField.tsx";
import RenderBorderField from "../../../components/input-fields/impl/checkbox/RenderBorderField.tsx";
import {cleanupLocations} from "../../../api-client/api-models/submodels/InventoryItem.ts";

function TooltipGenerator() {
    const [currentRequest, setCurrentRequest] = useState<InventoryRequest>(defaultInventoryRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            currentRequest.inventoryItems = cleanupLocations(currentRequest.inventoryItems);

            setOutput(await postGetImg("/generator/inventory", currentRequest));
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
                        <InventoryField
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, inventoryItems: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <RowField
                            value={currentRequest.rows}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, rows: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <ColumnsField
                            value={currentRequest.columns}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, columns: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <HoveredItemString
                            value={currentRequest.hoveredItemString}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, hoveredItemString: value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <ContainerNameField
                            value={currentRequest.containerName}
                            setValue={(value) =>
                                setCurrentRequest((prev) => ({...prev, containerName: value}))
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