import inventoryItem from "./submodels/InventoryItem.ts";
import { minecraftPackString } from "../../requests/GetAutocomplete.ts";

class RecipeRequest {
    recipe: inventoryItem[];
    renderBackground?: boolean;
    texturePack?: string;

    constructor(
        recipe: inventoryItem[] = [],
        renderBackground: boolean = true,
        texturePack: string = minecraftPackString,
    ) {
        this.recipe = recipe;
        this.renderBackground = renderBackground;
        this.texturePack = texturePack;
    }
}

export default RecipeRequest;