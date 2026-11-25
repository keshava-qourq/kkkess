# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up staff sign-in, MFA for privileged roles, session security and user/role administration.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Sign in with email and password | 5 | backend-agent | — |
| US-002 | Story | Multi-factor authentication for privileged roles | 5 | security-agent | US-001 |
| US-003 | Story | Session security and sign-out | 3 | backend-agent | US-001 |
| US-004 | Story | Manage users and role assignments | 5 | backend-agent | US-001 |

## Sprint 2: Sprint 2

Build the immutable audit log foundation, payee registration, and approval-rule configuration.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-005 | Story | Add a new payee for approval | 5 | backend-agent | US-004 |
| US-009 | Story | Configure approval rules | 5 | backend-agent | US-004 |
| US-015 | Story | Record significant actions in an immutable log | 8 | backend-agent | US-001 |
| ↳ US-015-T1 | Task | Add append-only audit_log table with immutability constraints | — | devops-agent | — |
| ↳ US-015-T2 | Task | Implement audit-logging service | — | backend-agent | — |
| ↳ US-015-T3 | Task | Wire audit capture into auth, payee, payment and rule endpoints | — | backend-agent | — |
| ↳ US-015-T4 | Task | Add DB-level protections against tampering | — | devops-agent | — |

## Sprint 3: Sprint 3

Complete payee bank-detail change control, payee selection, and payment creation.

Capacity: 20 points · Committed: 16

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-006 | Story | Edit payee bank details under approval control | 5 | backend-agent | US-005 |
| US-007 | Story | View and select from the payee register | 3 | frontend-agent | US-005 |
| US-008 | Story | Create a payment by selecting a payee | 5 | backend-agent | US-007 |
| US-016 | Story | View and export the audit log | 3 | backend-agent | US-015 |

## Sprint 4: Sprint 4

Deliver approval routing, maker-checker approval, payment list, settlement, and approver email alerts.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-010 | Story | Route payments for approval or straight to ready-to-pay | 5 | backend-agent | US-008, US-009 |
| US-011 | Story | Approve or reject a pending payment | 5 | backend-agent | US-010 |
| US-012 | Story | View payment list with status | 3 | frontend-agent | US-010 |
| US-014 | Story | Mark an approved payment as paid | 3 | backend-agent | US-011 |
| US-017 | Story | Notify approvers of pending payments | 3 | integration-agent | US-010 |

## Sprint 5: Sprint 5

Add the payments dashboard and maker outcome notifications.

Capacity: 20 points · Committed: 7

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-013 | Story | View payments dashboard | 5 | frontend-agent | US-012, US-011 |
| US-018 | Story | Notify creators of approval outcome | 2 | integration-agent | US-011 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
