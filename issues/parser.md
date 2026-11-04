# Shared parser reads day-first tenant dates month-first — 379 classified reports

## Scope and report count

379 unique reports are assigned to parser by the supplied executable classifier. This includes five anomalous reports tracked separately in issue #3; 374 remain after excluding those five. These are classification counts, not confirmation that every report has one root cause.

## Evidence

R-41200: 7 April becomes 4 July. R-41201 corrects its own swap direction.

Source: supplied support-kb export dated 2026-10-04, ticket #4471, src/lib/data/reports-4471.json, tenant directory and src/lib/kb/causes.ts. Deduplicate IDs: 427 rows, 412 unique reports. Intake tags and browser locales are not cause evidence.

## Expected outcome

Use tenant locale for parser input order, and test app/email paths, ambiguous day/month dates, unambiguous dates and unaffected month-first tenants.

No product fix or production resolution is claimed. See src/routes/kb/incidents/4471-review/+page.svx and rendered/4471-review.html for the signed review.
