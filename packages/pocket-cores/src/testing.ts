import { fetchOpenFPGACoresInventory } from "."

(async () => {
    const cores = await fetchOpenFPGACoresInventory();

    console.log({ cores });
})();