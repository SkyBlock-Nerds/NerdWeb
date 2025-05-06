import inventoryItem from "./submodels/InventoryItem.ts";

class RecipeRequest {
    recipe: inventoryItem[];
    renderBackground?: boolean;

    constructor(
        recipe: inventoryItem[] = [],
        renderBackground: boolean = true
    ) {
        this.recipe = recipe;
        this.renderBackground = renderBackground;
    }
}

export default RecipeRequest;