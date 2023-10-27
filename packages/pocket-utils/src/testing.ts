import { OpenFPGACoreEntry, fetchOpenFPGACoresInventory } from "./lib";
import { extname } from "path";

(async () => {
  const filename = "somegame.gbc";

  const cores = await fetchOpenFPGACoresInventory();

  const extension = extname(filename).substring(1);

  const coresByExtname = new Map<string, Set<OpenFPGACoreEntry>>();
  for (const core of cores) {
    if (!core.assets) continue;

    for (const asset of core.assets) {
      if (!asset.extensions) continue;

      for (const extension of asset.extensions) {
        if (!coresByExtname.has(extension)) {
          coresByExtname.set(extension, new Set());
        }

        coresByExtname.get(extension)?.add(core);
      }
    }
  }

  const compatibleCores = coresByExtname.get(extension) ?? new Set();

  console.log(
    `compatible cores: ${[...(compatibleCores ?? [])]
      .map((core) => core.identifier)
      .join(", ")}`
  );
})();
