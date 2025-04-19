import inventoryItem from "./submodels/InventoryItem.ts";

class RecipeRequest {
    recipe: inventoryItem[];
    renderBackground?: boolean;

    constructor(
        recipe: inventoryItem[],
        renderBackground?: boolean
    ) {
        this.recipe = recipe;
        this.renderBackground = renderBackground;
    }
}

export const defaultRecipeRequest = new RecipeRequest(
    [],
    true
);

export default RecipeRequest;