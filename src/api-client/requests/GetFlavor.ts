import apiClient from "../AxiosInstance.ts";
import Flavor from "../api-models/Flavor.ts";

let flavorCache: Flavor[] = [];

export const getFlavor = async (): Promise<Flavor[]> => {
    if (flavorCache.length > 0) {
        return flavorCache;
    }

    try {
        flavorCache = (await apiClient.get("/search/flavor")).data;
    } catch (error) {
        console.error("Error fetching flavor data:", error);
    }

    return flavorCache;
};

export default getFlavor;