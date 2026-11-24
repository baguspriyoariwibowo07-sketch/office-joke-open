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

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, a single line, not only white
// space. An entry outside those limits is never judged and takes no
// prize, so validate the line against the same limits before writing
// it out — fail fast if the line ever drifts outside the gate.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validateEntry(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
