
export const OPENFPGA_CORES_INVENTORY_URL = "https://openfpga-cores-inventory.github.io/analogue-pocket/api/v2/cores.json";



interface OpenFPGACoreRepository {
    platform: "github";
    owner: string;
    name: string;
}

interface OpenFPGACorePlatform {
    category: "handheld" | string;
    name: string;
    manufacturer: string;
    year: number;
}

interface OpenFPGACoreAsset {
    platform: string;

    /** a list of file extensions that are associated with that core */
    extensions: string[];
}

interface OpenFPGACoreSponsor {
    github?: string[];
    patreon?: string;
    custom?: string[];
}

export interface OpenFPGACoreEntry {
    identifier: string;

    repository: OpenFPGACoreRepository;

    download_url: string;

    platform_id: string;

    /** e.g. "0.9.0" */
    version: string;

    /** e.g. "2022-09-03" */
    release_date: string;

    platform: OpenFPGACorePlatform;

    assets: OpenFPGACoreAsset[];

    requires_license: boolean;

    sponsor: OpenFPGACoreSponsor | null;
}



interface OpenFPGACoresInventoryResponse {
    data: OpenFPGACoreEntry[];
}

export async function fetchOpenFPGACoresInventory() {
    const response = await fetch(OPENFPGA_CORES_INVENTORY_URL);

    const responseData = (await response.json()) as OpenFPGACoresInventoryResponse;
    const cores = responseData.data;

    return cores;
}