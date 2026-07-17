import apiClient from "../AxiosInstance.ts";

const postGetImg = async (url: string, data: object) => {
    const response = await apiClient.post(url, data, {
        responseType: 'arraybuffer',
    });

    const base64Image = btoa(
        new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    const imageType = detectImageType(response.data);
    return `data:image/${imageType};base64,${base64Image}`;
};

const detectImageType = (buffer: ArrayBuffer): 'png' | 'gif' | 'unknown' => {
    const view = new Uint8Array(buffer);

    if (view[0] === 0x89 && view[1] === 0x50 && view[2] === 0x4E && view[3] === 0x47) {
        return 'png';
    }

    if (view[0] === 0x47 && view[1] === 0x49 && view[2] === 0x46) {
        return 'gif';
    }

    return 'unknown';
};

export default postGetImg;