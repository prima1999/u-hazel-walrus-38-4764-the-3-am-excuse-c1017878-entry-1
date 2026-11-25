// The 3 AM Excuse — a hardware wallet, asked to sign at 3 AM, answers back.
// One line under 200 characters: personality, reason, and joke in a single breath.
// The hour itself has to carry the punchline, or the line could be pasted onto 3 PM.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "At 3 AM I am not a wallet, I am a night-shift bouncer, and your sleepy thumb is not on the list. Back of the line — come back with sunlight, coffee, and a decision you will still like at noon.";

// Write exactly one line, no trailing newline: the gate counts every character.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
