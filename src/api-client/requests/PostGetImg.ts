import apiClient from "../AxiosInstance.ts";

const postGetImg = async (url: string, data: object) => {
    console.log(JSON.stringify(data));
    const response = await apiClient.post(url, data, {
        responseType: 'arraybuffer',
    });

    const base64Image = btoa(
        new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    return `data:image/png;base64,${base64Image}`;
};

export default postGetImg;