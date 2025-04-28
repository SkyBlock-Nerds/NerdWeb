import apiClient from "../AxiosInstance.ts";
import Gemstone from "../api-models/Gemstone.ts";

let gemstoneCache: Gemstone[] = [];

export const getGemstone = async (): Promise<Gemstone[]> => {
    if (gemstoneCache.length > 0) {
        return gemstoneCache;
    }

    try {
        gemstoneCache = (await apiClient.get("/search/gemstone")).data;
    } catch (error) {
        console.error("Error fetching gemstone data:", error);
    }

    return gemstoneCache;
}

export default getGemstone;