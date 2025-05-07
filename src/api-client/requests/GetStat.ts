import apiClient from "../AxiosInstance.ts";
import Stat from "../api-models/Stat.ts";

let statCache: Stat[] = [];

export const getStat = async (): Promise<Stat[]> => {
    if (statCache.length > 0) {
        return statCache;
    }

    try {
        statCache = (await apiClient.get("/search/stat")).data;
    } catch (error) {
        console.error("Error fetching gemstone data:", error);
    }

    return statCache;
};

export default getStat;