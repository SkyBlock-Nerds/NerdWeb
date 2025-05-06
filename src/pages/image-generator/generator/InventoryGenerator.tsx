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
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new InventoryRequest();
                                        Object.assign(updatedRequest, prev, { inventoryItems: value });
                                        return updatedRequest;
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <RowField
                                value={currentRequest.rows}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new InventoryRequest();
                                        Object.assign(updatedRequest, prev, { rows: value });
                                        return updatedRequest;
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <ColumnsField
                                value={currentRequest.columns}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new InventoryRequest();
                                        Object.assign(updatedRequest, prev, { columns: value });
                                        return updatedRequest;
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <HoveredItemString
                                value={currentRequest.hoveredItemString}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new InventoryRequest();
                                        Object.assign(updatedRequest, prev, { hoveredItemString: value });
                                        return updatedRequest;
                                    })
                                }
                            />
                            <StyleCodeParser textToBeParsed={currentRequest.hoveredItemString} />
                        </div>
                        <div className="mb-3">
                            <ContainerNameField
                                value={currentRequest.containerName}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new InventoryRequest();
                                        Object.assign(updatedRequest, prev, { containerName: value });
                                        return updatedRequest;
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <RenderBorderField
                                value={currentRequest.renderBorder}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new InventoryRequest();
                                        Object.assign(updatedRequest, prev, { renderBorder: value });
                                        return updatedRequest;
                                    })
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