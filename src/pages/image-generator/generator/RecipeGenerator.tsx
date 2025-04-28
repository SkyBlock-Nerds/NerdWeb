import BaseGenerator from "../BaseGenerator.tsx";
import RecipeField from "../../../components/input-fields/impl/custom/RecipeField.tsx";
import RecipeRequest, {defaultRecipeRequest} from "../../../api-client/api-models/generator/RecipeRequest.ts";
import RenderBackgroundField from "../../../components/input-fields/impl/checkbox/RenderBackgroundField.tsx";
import {cleanupLocations} from "../../../api-client/api-models/generator/submodels/InventoryItem.ts";

function RecipeGenerator() {
    return (
        <BaseGenerator<RecipeRequest>
            defaultRequest={defaultRecipeRequest}
            endpoint="/generator/recipe"
        >
            {(currentRequest, setCurrentRequest) => {
                currentRequest.recipe = cleanupLocations(currentRequest.recipe);
                return (
                    <>
                        <div className="mb-3">
                            <RecipeField
                                setValue={(value) =>
                                    setCurrentRequest((prev) => ({...prev, recipe: value}))
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <RenderBackgroundField
                                value={currentRequest.renderBackground}
                                setValue={(value) =>
                                    setCurrentRequest((prev) => ({...prev, renderBackground: value}))
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