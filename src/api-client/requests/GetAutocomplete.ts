import apiClient from "../AxiosInstance.ts";

export const minecraftPackString = "minecraft:minecraft";

let rarityCache: string[] = [];
let tooltipSideCache: string[] = [];
const itemIdCache: { [texturePack: string]:  string[]} = {};
const tooltipStyleCache: { [texturePack: string]:  string[]} = {};

tooltipStyleCache[minecraftPackString] = [];

const getAutocomplete = async (url: string): Promise<string[]> => {
    try {
        return (await apiClient.get(url)).data;
    } catch (error) {
        console.error("Error fetching autocomplete data:", error);
    }
    return [];
};

export const getRarityAutoComplete = async (): Promise<string[]> => {
    if (rarityCache.length > 0) {
        return rarityCache;
    }
    rarityCache = await getAutocomplete("/search/rarity");
    return rarityCache;
};

export const getTooltipSideAutoComplete = async (): Promise<string[]> => {
    if (tooltipSideCache.length > 0) {
        return tooltipSideCache;
    }
    tooltipSideCache = await getAutocomplete("/search/tooltip-side");
    return tooltipSideCache;
};

export const getItemIdAutoComplete = async (texturePack?: string | null): Promise<string[]> => {
    if (texturePack !== null && texturePack !== undefined) texturePack.toLowerCase();
    if (texturePack === null || texturePack === undefined || texturePack === "vanilla") texturePack = minecraftPackString;

    if (itemIdCache[texturePack] !== null && itemIdCache[texturePack] !== undefined) {
        return itemIdCache[texturePack];
    }
    itemIdCache[texturePack] = await getAutocomplete(`/search/item-id?packId=${texturePack}`);
    return itemIdCache[texturePack];
};

export const getTooltipStyleAutoComplete = async (texturePack?: string | null): Promise<string[]> => {
    if (texturePack !== null && texturePack !== undefined) texturePack.toLowerCase();
    if (texturePack === null || texturePack === undefined || texturePack === "vanilla") texturePack = minecraftPackString;

    if (tooltipStyleCache[texturePack] !== null && tooltipStyleCache[texturePack] !== undefined) {
        return tooltipStyleCache[texturePack];
    }
    tooltipStyleCache[texturePack] = await getAutocomplete(`/search/tooltip-styles?packId=${texturePack}`);
    return tooltipStyleCache[texturePack];
}