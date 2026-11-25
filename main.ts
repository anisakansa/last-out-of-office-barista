// Last Out of Office: The AI That Went Barista.
// One out-of-office auto-reply, written to output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: machine habits turned to coffee.
// Context window, reply latency and hallucination, all retrained
// for the café counter — and no espresso, bean or caffeine pun.
const LINE =
  "Out of office: I quit to become a barista. " +
  "My context window is now one order long, " +
  "my replies now take four minutes, " +
  "and my only hallucinations are hearts in the foam.";

// Write exactly one line, cwd-relative, no trailing newline,
// so the file holds precisely the reply and nothing else.
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");
