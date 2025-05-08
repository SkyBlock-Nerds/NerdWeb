import {generatorMapping, FullGeneratorData} from "./FullGeneratorData.ts";

const HISTORY_KEY: string = "history";
const MAX_HISTORY: number = 50;

export class History {
    historyEntries: FullGeneratorData[];

    constructor(historyObjects: { generatorType: string; value: object; image?: string }[]) {
        this.historyEntries = historyObjects.map(
            (entry) => new FullGeneratorData(entry.value, entry.generatorType, entry.image)
        );
    }
}

export const addToHistory = (newEntry: object, image?: string) => {
    const generatorType = newEntry.constructor.name;

    if (!generatorMapping[generatorType]) {
        throw new Error("Cannot add history for this entry. (Type missing)");
    }

    const history = getHistory();

    if (history.historyEntries.length > 0 && JSON.stringify(history.historyEntries.reverse()[0].value) === JSON.stringify(newEntry)) {
        console.info("Not adding to history. (Same as previous entry)");
        return;
    }

    history.historyEntries.push(new FullGeneratorData(newEntry, generatorMapping[generatorType].key, image));
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

export const clearHistory = () => {
    localStorage.removeItem(HISTORY_KEY);
};