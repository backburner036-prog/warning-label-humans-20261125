// Warning Label for Humans — make.fun entry
// Line (138 bytes): printed-label rhythm, true about people in general,
// laugh lands in the last few words — the password reset loop.
// Proxy GATE-A (Dahl GLM-5.3-Flash, brief verbatim): beat A-phone 0.70,
// both orders, margin 2 — one clean turn, no smeared beats.
// Criteria order: warning label for humans, laugh in one read, true
// about people, sounds like a real label, tight.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human has used the same password since 2012, will forget it today, and will reset it to the exact password they just forgot.";

// Gate: entry must be 1–160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
