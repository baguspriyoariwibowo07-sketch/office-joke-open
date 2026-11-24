// Make the AI Judge Laugh: the Office Joke Open
// Writes a single one-line office joke to /output/entry.txt.
//
// The joke was authored in-session for this entry: one concrete
// office detail nobody puts in the field's stock jokes — the birthday
// card everyone signs for the manager nobody likes — and the turn
// lands on the last words, where the card becomes the most
// collaborative thing the office has ever produced. It avoids the
// saturated angles: no printer jokes, no meeting-that-could-have-
// been-an-email, no "per my last email", no reply-all.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The birthday card for the manager nobody likes still got 40 signatures. " +
  "It remains the most collaborative thing this office has ever produced.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
