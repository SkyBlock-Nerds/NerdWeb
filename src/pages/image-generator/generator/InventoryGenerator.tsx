import BaseGenerator from "../BaseGenerator.tsx";
import InventoryRequest from "../../../api-client/api-models/generator/InventoryRequest.ts";
import InventoryField from "../../../components/input-fields/impl/custom/InventoryField.tsx";
import RowField from "../../../components/input-fields/impl/number/RowField.tsx";
import ColumnsField from "../../../components/input-fields/impl/number/ColumnsField.tsx";
import HoveredItemString from "../../../components/input-fields/impl/big-text/HoveredItemString.tsx";
import ContainerNameField from "../../../components/input-fields/impl/small-text/ContainerNameField.tsx";
import RenderBorderField from "../../../components/input-fields/impl/checkbox/RenderBorderField.tsx";
import {cleanupLocations} from "../../../api-client/api-models/generator/submodels/InventoryItem.ts";
import StyleCodeParser from "../../../components/style-code-parser/StyleCodeParser.tsx";

function InventoryGenerator() {
    return (
        <BaseGenerator<InventoryRequest>
            defaultRequest={new InventoryRequest()}
            endpoint="/generator/inventory"
        >
            {(currentRequest, setCurrentRequest) => {
                currentRequest.inventoryItems = cleanupLocations(currentRequest.inventoryItems);
                return (
                    <>
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
                            <StyleCodeParser textToBeParsed={currentRequest.hoveredItemString} />
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
                    </>
                );
            }}
        </BaseGenerator>
    );
}

export default InventoryGenerator;