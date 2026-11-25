# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Defines authentication, role-based access and user administration for internal staff.

Goal: restrict access to the internal application to staff via email/password login with role-based permissions (roles: maker, approver, treasury/payer, administrator; one person may hold several), require MFA for approvers and administrators, and let administrators manage accounts and role assignments. Assumption: this is a private internal tool, not public-facing, with no end-user or customer accounts.

**Related:** US-001, US-002, US-003, US-004

### EPIC-002 · approved · source: planning:EPIC-002

Defines the managed, approval-controlled payee register.

Goal: maintain a managed register of pre-registered payees with bank details, entered manually (not imported from an external finance system), where only approved payees are selectable for payments. Assumption (fraud control): adding a payee or editing a payee's bank details is itself an approval-controlled action requiring a second person's approval before it takes effect.

**Related:** US-005, US-006, US-007

### EPIC-003 · approved · source: planning:EPIC-003

Defines maker-initiated payment instruction creation.

Goal: let makers create outbound payment instructions by selecting an approved payee and entering amount and details, in the single organisation home currency; the system records instructions only and does not move money. Out of scope for this version: multi-currency payments and multiple legal entities.

**Related:** US-008

### EPIC-004 · approved · source: planning:EPIC-004

Defines configurable approval rules and maker-checker approval enforcement.

Goal: let administrators configure rules (amount threshold, payee, department) deciding when a second person's approval is required, route matching payments to a different approver (a maker can never approve their own payment), and let non-matching payments skip approval and become ready to pay.

**Related:** US-009, US-010, US-011

### EPIC-005 · approved · source: planning:EPIC-005

Defines payment list and dashboard visibility of lifecycle status.

Goal: give staff visibility of payments and their lifecycle status (created -> pending approval -> approved/rejected -> paid -> optionally reconciled/closed) via a filterable list view and a dashboard summarising payments, including those needing an approver's attention.

**Related:** US-012, US-013

### EPIC-006 · approved · source: planning:EPIC-006

Defines treasury settlement marking after manual bank-portal payment.

Goal: the system itself does not move money; a treasury/finance user pays each approved instruction in their own bank portal and then marks it paid in the system, optionally recording it as reconciled/closed. Out of scope for this version: direct bank integration that transfers money and automated bank reconciliation.

**Related:** US-014

### EPIC-007 · approved · source: planning:EPIC-007

Defines the immutable, exportable audit trail of significant actions.

Goal: keep an immutable, timestamped audit log of every significant action (payment created, edited, approved, rejected, paid; payee added or changed; approval rule changed; sign-in), recording who did what and when, viewable and exportable by administrators and auditors only. Assumption: this capability is treated as required for accountability.

**Related:** US-015, US-016

### EPIC-008 · approved · source: planning:EPIC-008

Defines email notifications to approvers and creators.

Goal: notify approvers by email when a payment is awaiting their approval, and notify creators by email when their payment is approved or rejected, via a configured transactional email provider. Assumption: delivery requires an email-sending API key to be configured; its absence must be handled gracefully rather than failing silently.

**Related:** US-017, US-018

### SPRINT-1 · approved · source: planning:Sprint 1

Stand up staff sign-in, MFA for privileged roles, session security and user/role administration.

Capacity: 20 points. Goal text maps to EPIC-001's stories: US-001 sign-in (5 pts, backend-agent), US-002 MFA for privileged roles (5 pts, security-agent), US-003 session security/sign-out (3 pts, backend-agent), US-004 manage users and roles (5 pts, backend-agent). Total 18 of 20 points per the goal wording; no explicit item-to-sprint table was given in the plan input, so this grouping is inferred from the sprint goal text.

**Related:** US-001, US-002, US-003, US-004

### SPRINT-2 · approved · source: planning:Sprint 2

Build the immutable audit log foundation, payee registration, and approval-rule configuration.

Capacity: 20 points. Goal text maps to: US-015 immutable audit log (8 pts, backend-agent) with its four sub-tasks US-015-T1 (append-only audit_log table, devops-agent), US-015-T2 (audit-logging service, backend-agent), US-015-T3 (wire audit capture into auth/payee/payment/rule endpoints, backend-agent), US-015-T4 (DB-level tamper protections, devops-agent); US-005 add a new payee for approval (5 pts, backend-agent); US-009 configure approval rules (5 pts, backend-agent). Mapping inferred from sprint goal wording, not an explicit item table.

**Related:** US-005, US-009, US-015

### SPRINT-3 · approved · source: planning:Sprint 3

Complete payee bank-detail change control, payee selection, and payment creation.

Capacity: 20 points. Goal text maps to: US-006 edit payee bank details under approval control (5 pts, backend-agent), US-007 view and select from the payee register (3 pts, frontend-agent), US-008 create a payment by selecting a payee (5 pts, backend-agent). Mapping inferred from sprint goal wording, not an explicit item table.

**Related:** US-006, US-007, US-008

### SPRINT-4 · approved · source: planning:Sprint 4

Deliver approval routing, maker-checker approval, payment list, settlement, and approver email alerts.

Capacity: 20 points. Goal text maps to: US-010 route payments for approval or straight to ready-to-pay (5 pts, backend-agent), US-011 approve or reject a pending payment (5 pts, backend-agent), US-012 view payment list with status (3 pts, frontend-agent), US-014 mark an approved payment as paid (3 pts, backend-agent), US-017 notify approvers of pending payments (3 pts, integration-agent). Mapping inferred from sprint goal wording, not an explicit item table.

**Related:** US-010, US-011, US-012, US-014, US-017

### SPRINT-5 · approved · source: planning:Sprint 5

Add the payments dashboard and maker outcome notifications.

Capacity: 20 points. Goal text maps to: US-013 view payments dashboard (5 pts, frontend-agent), US-018 notify creators of approval outcome (2 pts, integration-agent). Note: US-016 (view and export the audit log, 3 pts, backend-agent) appears in the plan's item list but is not referenced by any sprint's goal text, so it could not be confidently assigned to a sprint from the given input.

**Related:** US-013, US-018
<!-- sdlc:auto:end narrative -->
