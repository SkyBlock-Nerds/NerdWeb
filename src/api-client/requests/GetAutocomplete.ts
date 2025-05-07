import apiClient from "../AxiosInstance.ts";

let rarityCache: string[] = [];
let tooltipSideCache: string[] = [];
let itemIdCache: string[] = [];

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

export const getItemIdAutoComplete = async (): Promise<string[]> => {
    if (itemIdCache.length > 0) {
        return itemIdCache;
    }
    itemIdCache = await getAutocomplete("/search/item-id");
    return itemIdCache;
};