import {useState} from "react";
import postGetImg from "../../../api-client/requests/PostGetImg.ts";
import GenerateButton from "../../../components/generator/GenerateButton.tsx";
import OutputDisplay from "../../../components/generator/OutputDisplay.tsx";
import RecipeField from "../../../components/input-fields/impl/custom/RecipeField.tsx";
import RecipeRequest, {defaultRecipeRequest} from "../../../api-client/api-models/generator/RecipeRequest.ts";
import RenderBackgroundField from "../../../components/input-fields/impl/checkbox/RenderBackgroundField.tsx";
import {cleanupLocations} from "../../../api-client/api-models/generator/submodels/InventoryItem.ts";

function RecipeGenerator() {
    const [currentRequest, setCurrentRequest] = useState<RecipeRequest>(defaultRecipeRequest);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            setError(null);
            setOutput(null);

            currentRequest.recipe = cleanupLocations(currentRequest.recipe);

            setOutput(await postGetImg("/generator/recipe", currentRequest));
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

export default RecipeGenerator;