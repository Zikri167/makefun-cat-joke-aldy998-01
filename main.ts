// One-line cat joke entry for make.fun bounty
// "The One-Line Cat Joke That Lands" (u-aldy998-the-one-line-cat-joke-that-lands-a7b18262).
// Writes a single cat joke, one line, 1-200 characters, to /output/entry.txt.
// Node 22 stdlib only. Deterministic, no network.

// Winner of 12 candidates, scored against the judge's 5 criteria
// (setup + turn, laugh on first read, fresh surprise, no padding, retellable).
// Runner-ups: TV remote / bird documentary -> "ordering takeout";
// video call -> "still more professional than I am".
const JOKE =
  "I showed my cat a mirror — she hissed at herself, then walked off like she'd just fired an employee.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Gate: 1-200 characters, a single line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}
if (/\r|\n/.test(JOKE) || JOKE.trim().length === 0) {
  throw new Error("joke must be a single non-blank line");
}

const fs = require("node:fs");
const path = require("node:path");

fs.mkdirSync(outDir, { recursive: true });
// No trailing newline: the entry is the joke and nothing else.
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
