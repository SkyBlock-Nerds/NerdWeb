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

const extractFirstFrameFromGif = (gifDataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL("image/png"));
            } else {
                resolve(gifDataUrl);
            }
        };
        img.onerror = () => {
            resolve(gifDataUrl);
        };
        img.src = gifDataUrl;
    });
};

export const addToHistory = async (newEntry: object, image?: string) => {
    const generatorType = newEntry.constructor.name;
    const isGif = image?.startsWith("data:image/gif;base64,") ?? false;

    if (!generatorMapping[generatorType]) {
        throw new Error("Cannot add history for this entry. (Type missing)");
    }

    const history = getHistory();

    const lastEntry = history.historyEntries.length > 0 ? JSON.stringify([...history.historyEntries].reverse()[0].value) : null;
    if (lastEntry === JSON.stringify(newEntry)) {
        console.info("Not adding to history. (Same as previous entry)");
        return;
    }

    let imageToSave = image;
    if (isGif && image) {
        imageToSave = await extractFirstFrameFromGif(image);
    }

    history.historyEntries.push(new FullGeneratorData(newEntry, generatorMapping[generatorType].key, imageToSave));
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