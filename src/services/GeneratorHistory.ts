import HeadRequest from "../api-client/api-models/generator/HeadRequest.ts";
import MultiDialogueRequest from "../api-client/api-models/generator/MultiDialogueRequest.ts";
import ItemRequest from "../api-client/api-models/generator/ItemRequest.ts";
import InventoryRequest from "../api-client/api-models/generator/InventoryRequest.ts";
import RecipeRequest from "../api-client/api-models/generator/RecipeRequest.ts";
import SingleDialogueRequest from "../api-client/api-models/generator/SingleDialogueRequest.ts";
import TextRequest from "../api-client/api-models/generator/TextRequest.ts";
import TooltipRequest from "../api-client/api-models/generator/TooltipRequest.ts";
import ROUTES from "../Routes.ts";

const HISTORY_KEY: string = "history";
const MAX_HISTORY: number = 50;

export const generatorMapping: Record<string, { key: string; link: string; cuteName: string }> = {};
generatorMapping[(new HeadRequest()).constructor.name] = {key: "head", link: ROUTES.HEAD_GENERATOR, cuteName: "Head"};
generatorMapping[(new InventoryRequest()).constructor.name] = {key: "inventory", link: ROUTES.INVENTORY_GENERATOR, cuteName: "Invetory"};
generatorMapping[(new ItemRequest()).constructor.name] = {key: "item", link: ROUTES.DISPLAY_ITEM_GENERATOR, cuteName: "Item Display"};
generatorMapping[(new MultiDialogueRequest()).constructor.name] = {key: "multiDialogue", link: ROUTES.MULTI_NPC_DIALOGUE_GENERATOR, cuteName: "Multi-Dialogue"};
generatorMapping[(new RecipeRequest()).constructor.name] = {key: "recipe", link: ROUTES.RECIPE_GENERATOR, cuteName: "Recipe"};
generatorMapping[(new SingleDialogueRequest()).constructor.name] = {key: "singleDialogue", link: ROUTES.SINGLE_NPC_DIALOGUE_GENERATOR, cuteName: "Single-Dialogue"};
generatorMapping[(new TextRequest()).constructor.name] = {key: "textRequest", link: ROUTES.TEXT_GENERATOR, cuteName: "Text"};
generatorMapping[(new TooltipRequest()).constructor.name] = {key: "tooltip", link: ROUTES.ITEM_FULL_GENERATOR, cuteName: "Full Item"};

export class HistoryEntry {
    generatorType: string;
    value: object;
    image?: string;

    constructor(value: object, generatorType?: string, image?: string) {
        this.generatorType = generatorType || value.constructor.name;
        this.value = value;
        this.image = image;
    }
}

export class History {
    historyEntries: HistoryEntry[];

    constructor(historyObjects: { generatorType: string; value: object; image?: string }[]) {
        this.historyEntries = historyObjects.map(
            (entry) => new HistoryEntry(entry.value, entry.generatorType, entry.image)
        );
    }
}

export const addToHistory = (newEntry: object, image?: string) => {
    const generatorType = newEntry.constructor.name;

    if (!generatorMapping[generatorType]) {
        throw new Error("Cannot add history for this entry");
    }

    const history = getHistory();
    history.historyEntries.push(new HistoryEntry(newEntry, generatorType, image));
    while (history.historyEntries.length > MAX_HISTORY) {
        history.historyEntries.shift();
    }
    localStorage.setItem("history", JSON.stringify(history));
};

export const getHistory = (): History => {
    const data = localStorage.getItem(HISTORY_KEY);

    if (!data) {
        return new History([]);
    }

    let parsedData;
    try {
        parsedData = JSON.parse(data);
    } catch (error) {
        console.error("Failed to parse history data:", error);
        return new History([]);
    }

    if (!Array.isArray(parsedData.historyEntries)) {
        console.error("Invalid history format: historyEntries is not an array");
        return new History([]);
    }

    return new History(parsedData.historyEntries);
};