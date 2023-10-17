import { downloadPocketFirmwareVersion, fetchPocketFirmwareDetails } from "./";

(async () => {
    const details = await fetchPocketFirmwareDetails();
    const download = await downloadPocketFirmwareVersion(undefined, {
        onDownloadProgress: progress => {
            if (progress.total) {
                console.log(`loaded ${Math.floor((progress.loaded / progress.total) * 100)}%`)
            } else {
                console.log(`loaded ${progress.loaded} bytes`);
            }
        }
    });

    console.log({ details, download });
})();