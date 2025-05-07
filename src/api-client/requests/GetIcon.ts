import apiClient from "../AxiosInstance.ts";
import Icon from "../api-models/Icon.ts";

let iconCache: Icon[] = [];

export const getIcon = async (): Promise<Icon[]> => {
    if (iconCache.length > 0) {
        return iconCache;
    }

    try {
        iconCache = (await apiClient.get("/search/icon")).data;
    } catch (error) {
        console.error("Error fetching gemstone data:", error);
    }

    return iconCache;
};

export default getIcon;