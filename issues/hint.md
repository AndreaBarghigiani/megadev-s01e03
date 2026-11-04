# booking-v3 date hint contradicts day-first interpretation — 33 reports

## Scope and report count

33 unique reports, across three tenants, are classified as hint. They are distinct from the parser group.

## Evidence

R-41230 and R-41241 show swapped dates through booking-v3 forms. The form prints MM/DD/YYYY but reads input in tenant day-first order.

Source: supplied support-kb export dated 2026-10-04, ticket #4471, src/lib/data/reports-4471.json, tenant directory and src/lib/kb/causes.ts. Deduplicate IDs: 427 rows, 412 unique reports. Intake tags and browser locales are not cause evidence.

## Expected outcome

Derive hint and input interpretation from one tenant format. Test both booking-v2 and booking-v3 across locales.

No product fix or production resolution is claimed. See src/routes/kb/incidents/4471-review/+page.svx and rendered/4471-review.html for the signed review.
