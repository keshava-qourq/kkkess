# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run. **Tests** counts the tests written for the story, and **Result** how many last passed, how many failed and when, as of this page's generation; the Documentation tab shows them live.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Test step | Tests | Result | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Sign in with email and password | US-001 | 1 | POST /auth/login, api, db, sessions, users, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Multi-factor authentication for privileged roles | US-002 | 1 | POST /auth/mfa, api, sessions, users, web | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-001 | Session security and sign-out | US-003 | 1 | POST /auth/logout, api, db, sessions, users | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-004 | EPIC-001 | Manage users and role assignments | US-004 | 1 | GET /users, PATCH /users/{id}, POST /users, POST /users/{id}/deactivate, api, db, user_roles, users, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-005 | EPIC-002 | Add a new payee for approval | US-005 | 2 | POST /payees, POST /payees/{id}/approve, api, db, payees, web | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-002 | Edit payee bank details under approval control | US-006 | 3 | POST /payee-changes/{id}/approve, POST /payee-changes/{id}/reject, POST /payees/{id}/bank-change, api, db, payee_change_requests, payees, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-007 | EPIC-002 | View and select from the payee register | US-007 | 3 | GET /payees, GET /payees/{id}, api, payees, web | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-003 | Create a payment by selecting a payee | US-008 | 3 | POST /payments, api, db, payees, payments, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-009 | EPIC-004 | Configure approval rules | US-009 | 2 | GET /approval-rules, PATCH /approval-rules/{id}, POST /approval-rules, api, approval_rules, db, web | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-004 | Route payments for approval or straight to ready-to-pay | US-010 | 4 | POST /payments, api, approval_rules, db, payments | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-004 | Approve or reject a pending payment | US-011 | 4 | POST /payments/{id}/approve, POST /payments/{id}/reject, api, db, payments, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-012 | EPIC-005 | View payment list with status | US-012 | 4 | GET /payments, GET /payments/{id}, api, payments, web | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-005 | View payments dashboard | US-013 | 5 | GET /dashboard, api, payments, web | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-014 | EPIC-006 | Mark an approved payment as paid | US-014 | 4 | POST /payments/{id}/mark-paid, POST /payments/{id}/reconcile, api, db, payments, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-015 | EPIC-007 | Record significant actions in an immutable log | US-015, US-015-T1, US-015-T2, US-015-T3, US-015-T4 | 2 | api, audit_log, db | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-016 | EPIC-007 | View and export the audit log | US-016 | 3 | GET /audit-log, GET /audit-log/export, api, audit_log, web | — | — | not started | not run | 0 | No tests | 0/3 tested · 0/3 passing | — |
| US-017 | EPIC-008 | Notify approvers of pending payments | US-017 | 4 | api, email, payments, users | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
| US-018 | EPIC-008 | Notify creators of approval outcome | US-018 | 5 | api, email, payments, users | — | — | not started | not run | 0 | No tests | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
