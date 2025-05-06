import BaseGenerator from "../BaseGenerator.tsx";
import RecipeField from "../../../components/input-fields/impl/custom/RecipeField.tsx";
import RecipeRequest from "../../../api-client/api-models/generator/RecipeRequest.ts";
import RenderBackgroundField from "../../../components/input-fields/impl/checkbox/RenderBackgroundField.tsx";
import {cleanupLocations} from "../../../api-client/api-models/generator/submodels/InventoryItem.ts";
import { useLocation } from "react-router-dom";

function RecipeGenerator() {
    const location = useLocation();
    const recoveredRequest = location.state?.recoveredRequest;

    return (
        <BaseGenerator<RecipeRequest>
            defaultRequest={recoveredRequest || new RecipeRequest()}
            endpoint="/generator/recipe"
        >
            {(currentRequest, setCurrentRequest) => {
                currentRequest.recipe = cleanupLocations(currentRequest.recipe);
                return (
                    <>
                        <div className="mb-3">
                            <RecipeField
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new RecipeRequest();
                                        Object.assign(updatedRequest, prev, { recipe: value });
                                        return updatedRequest;
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <RenderBackgroundField
                                value={currentRequest.renderBackground}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => {
                                        const updatedRequest = new RecipeRequest();
                                        Object.assign(updatedRequest, prev, { renderBackground: value });
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

export default RecipeGenerator;