import axios, { AxiosRequestConfig } from "axios";

export function buildPocketFirmwareDownloadUrl(version = "latest") {
    return `https://www.analogue.co/support/pocket/firmware/${version}/download`;
}

export async function downloadPocketFirmwareVersion(version?: string, options?: AxiosRequestConfig) {
    const url = buildPocketFirmwareDownloadUrl(version);

    const response = await axios.get(url, {
        responseType: 'stream',
        ...options
    });

    return response;
}