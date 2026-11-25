# API Reference

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start endpoints -->
| Method | Path | Handler | Source | Summary |
|---|---|---|---|---|
| GET | /health | health | `backend/app/main.py:87` | Liveness probe, and the only route here that is not a stub. |
<!-- sdlc:auto:end endpoints -->

<!-- sdlc:auto:start drift -->
**Designed but missing:**

- GET /approval-rules
- GET /audit-log
- GET /audit-log/export
- GET /dashboard
- GET /payees
- GET /payees/{id}
- GET /payments
- GET /payments/{id}
- GET /users
- PATCH /approval-rules/{id}
- PATCH /users/{id}
- POST /approval-rules
- POST /auth/login
- POST /auth/logout
- POST /auth/mfa
- POST /payee-changes/{id}/approve
- POST /payee-changes/{id}/reject
- POST /payees
- POST /payees/{id}/approve
- POST /payees/{id}/bank-change
- POST /payments
- POST /payments/{id}/approve
- POST /payments/{id}/mark-paid
- POST /payments/{id}/reconcile
- POST /payments/{id}/reject
- POST /users
- POST /users/{id}/deactivate
<!-- sdlc:auto:end drift -->

<!-- sdlc:auto:start source -->
Generated from commit `cf10829`
<!-- sdlc:auto:end source -->
