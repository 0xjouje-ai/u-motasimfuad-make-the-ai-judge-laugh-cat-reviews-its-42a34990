// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes one funny single-line one-star review from a house cat about its
// human to /output/entry.txt (UTF-8, 1-200 characters).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. He put a laptop on my sunbeam spot, then got upset when I sat on the keyboard. I was not typing. I was repossessing the sun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
