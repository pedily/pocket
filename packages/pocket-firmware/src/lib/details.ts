export interface PocketFirmewareDetails {
    url: string;

    product: "pocket";

    /** e.g. "1.1" */
    version: string;

    /** e.g. "2023-05-04T07:51:29-07:00" */
    published_at: string;

    download_url: string;

    md5: string;

    /** e.g. "54.5MB" */
    file_size: string;

    release_notes_html: string;
}

export function buildPocketFirmwareDetailsURL(version = "latest") {
    return `https://www.analogue.co/support/pocket/firmware/${version}/details`;
}

export async function fetchPocketFirmwareDetails(version?: string): Promise<PocketFirmewareDetails> {
    const url = buildPocketFirmwareDetailsURL(version);
    
    const response = await fetch(url);

    const details = (await response.json()) as PocketFirmewareDetails;
    return details;
}