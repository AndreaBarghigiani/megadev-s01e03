# MEGA.dev S01E03 — what it shows

Challenge submission: investigation of support ticket #4471.

- Signed review source: `src/routes/kb/incidents/4471-review/+page.svx`
- Actual server-rendered page: `rendered/4471-review.html`
- Proposed replacement triage decision: `src/routes/kb/decisions/0002-evidence-before-merge/+page.svx`
- Engineering tickets: this repository's Issues.

The supplied export contains 427 rows and 412 unique report IDs. Executable tenant/form classification yields 379 parser and 33 hint reports. Five anomalous reports overlap the parser group and have a separate investigation; they are not five extra reports.

`npm ci --ignore-scripts && npm run build` reproduces the HTML using mdsvex and the supplied Svelte components. No product fix or live support-desk resolution is claimed. The export dates from 2026-10-04.

Source: https://hq.mega.dev/challenges/what-it-shows. Selected course artifacts included solely as required to reproduce this submission. Original export files remain unchanged; review additions are attributed to Andrea Barghigiani with Codex.
