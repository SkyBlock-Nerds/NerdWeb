import HeadRequest from "../api-client/api-models/generator/HeadRequest.ts";
import ROUTES from "../Routes.ts";
import InventoryRequest from "../api-client/api-models/generator/InventoryRequest.ts";
import ItemRequest from "../api-client/api-models/generator/ItemRequest.ts";
import MultiDialogueRequest from "../api-client/api-models/generator/MultiDialogueRequest.ts";
import RecipeRequest from "../api-client/api-models/generator/RecipeRequest.ts";
import SingleDialogueRequest from "../api-client/api-models/generator/SingleDialogueRequest.ts";
import TextRequest from "../api-client/api-models/generator/TextRequest.ts";
import TooltipRequest from "../api-client/api-models/generator/TooltipRequest.ts";

export class FullGeneratorData {
    generatorType: string;
    value: object;
    image?: string;

    constructor(value: object, generatorType?: string, image?: string) {
        this.generatorType = generatorType || generatorMapping[value.constructor.name].key;
        this.value = value;
        this.image = image;
    }
}

export const generatorMapping: Record<string, { key: string; link: string; cuteName: string }> = {};
generatorMapping[(new HeadRequest()).constructor.name] = {key: "head", link: ROUTES.HEAD_GENERATOR, cuteName: "Head"};
generatorMapping[(new InventoryRequest()).constructor.name] = {key: "inventory", link: ROUTES.INVENTORY_GENERATOR, cuteName: "Inventory"};
generatorMapping[(new ItemRequest()).constructor.name] = {key: "item", link: ROUTES.DISPLAY_ITEM_GENERATOR, cuteName: "Item Display"};
generatorMapping[(new MultiDialogueRequest()).constructor.name] = {key: "multiDialogue", link: ROUTES.MULTI_NPC_DIALOGUE_GENERATOR, cuteName: "Multi-Dialogue"};
generatorMapping[(new RecipeRequest()).constructor.name] = {key: "recipe", link: ROUTES.RECIPE_GENERATOR, cuteName: "Recipe"};
generatorMapping[(new SingleDialogueRequest()).constructor.name] = {key: "singleDialogue", link: ROUTES.SINGLE_NPC_DIALOGUE_GENERATOR, cuteName: "Single-Dialogue"};
generatorMapping[(new TextRequest()).constructor.name] = {key: "textRequest", link: ROUTES.TEXT_GENERATOR, cuteName: "Text"};
generatorMapping[(new TooltipRequest()).constructor.name] = {key: "tooltip", link: ROUTES.ITEM_FULL_GENERATOR, cuteName: "Full Item"};