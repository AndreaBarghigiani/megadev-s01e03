# Investigate one-day shifts and send chronology — 5 overlapping reports

## Scope and report count

Five reports overlap the 379 parser-classified reports. Do not add these again to the 412-report total. Root cause is unconfirmed; this investigation may need splitting.

## Evidence

R-41202: 12 May becomes 11 May. R-41209: June bookings one day off. R-41236: invite arrives before booking. R-41344: Lisbon and Toronto see different days. R-41620: 6 October appears as Monday.

Source: supplied support-kb export dated 2026-10-04, ticket #4471, src/lib/data/reports-4471.json, tenant directory and src/lib/kb/causes.ts. Deduplicate IDs: 427 rows, 412 unique reports. Intake tags and browser locales are not cause evidence.

## Expected outcome

Reproduce timezone/date-only conversions and send chronology. Establish whether symptoms share a defect; split issues if evidence shows separate causes. Do not assume these are month/day swaps.

No product fix or production resolution is claimed. See src/routes/kb/incidents/4471-review/+page.svx and rendered/4471-review.html for the signed review.
