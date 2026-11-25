# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-TECH-STACK · approved · source: requirements:technology stack

Product owner approved an exact technology stack to design and build against.

Backend: FastAPI 0.115 -- chosen to express maker-checker business rules (no self-approval, admin-configured thresholds, lifecycle transitions) and validate every payment/payee change before saving, with an audit record on every action. Cloud: AWS -- all app, payment and personal data pinned to the organisation's home region (London for a UK/£ org) for GDPR-style data residency, with the backups/access controls/encryption auditors expect. Database: PostgreSQL 16 -- transactional integrity so a payment, its approval and the matching audit entry save together or not at all, and support for an append-only audit log. Frontend: React 19 -- interactive, role-dependent forms/lists/approval screens for makers, approvers, treasury and admins, responsive on desktop/laptop browsers. These four are to be used exactly as specified, no substitutions.

### REQ-SERVICES · approved · source: requirements:services

One external service approved: SendGrid for transactional email.

Email: SendGrid (SaaS), configured via env var SENDGRID_API_KEY. Used to email approvers when a payment is waiting for them, and to email makers when their payment is approved or rejected, with delivery tracking. Required API key for the app: SENDGRID_API_KEY. If this key is missing, that must be surfaced gracefully rather than failing silently (see NFR-011).

**Related:** NFR-011

### REQ-SCOPE · approved · source: requirements:scope

Defines what this version of the system covers and explicitly excludes.

Delivery scope: lightweight. In scope capabilities: managed register of approved payees with bank details; create a payment by selecting a registered payee and entering amount and details; payment list and status view; payments dashboard; single home-currency payments; internal staff login; email and password login. Out of scope -- not to be designed or built: multi-currency payments and multiple legal entities/companies; direct bank/payment-provider integration that actually transfers money; automated bank reconciliation. The system records payment instructions only -- it never moves money itself.

### REQ-FEAT-SIGNIN · approved · source: requirements:Sign-in & accounts

Covers staff authentication, second-factor for privileged roles, session handling and user/role administration.

- Email and password sign-in: staff sign in with email/password; incorrect credentials keep them signed out with a single generic failure message that does not reveal which field was wrong.
- Second factor for privileged roles: approver and administrator roles must provide a valid second factor after their password; an incorrect or expired factor denies access.
- Session expiry and sign-out: staff can sign out; sessions also end after a configured inactivity period or when an administrator deactivates the account, requiring re-sign-in.
- Manage users and roles: administrators create/edit staff accounts and assign maker, approver, treasury/payer and administrator roles (one person may hold several); administrators can deactivate an account to block sign-in.

**Related:** NFR-001, NFR-002, NFR-003, NFR-004

### REQ-FEAT-PAYEE · approved · source: requirements:Payee register

Covers the managed register of payees and approval-controlled bank-detail changes.

- Add a payee for approval: an administrator or maker with payee rights registers a payee with bank details; it is created pending and becomes selectable only after a different authorised user approves it.
- Edit bank details under approval: changes to an approved payee's bank details are held pending and take effect only after a different user approves them; the requester cannot approve their own change; a rejected change leaves existing approved details unchanged.
- View and select payees: makers view the register with each payee's status and current approved bank details; only approved payees can be selected when creating a payment.

**Related:** NFR-005, NFR-007

### REQ-FEAT-CREATE-PAYMENT · approved · source: requirements:Creating payments

Covers creation of a payment instruction against an approved payee.

- Create a payment: a maker selects an approved payee and enters a valid positive amount and payment details in the single home currency, linked to the payee's approved bank details. Blank required fields or a non-positive amount stop creation and show which fields need correcting; no other currency can be chosen.

**Related:** NFR-007

### REQ-FEAT-APPROVALS · approved · source: requirements:Approvals & rules

Covers configurable approval rules and the maker-checker approval step.

- Configure approval rules: administrators create/edit rules using conditions such as amount threshold, payee or department, deciding when second-person approval is required; saved rules apply to payments created afterwards.
- Route payments for approval: a created payment is routed by the rules -- matching payments become pending approval (cannot be marked paid until approved); non-matching payments skip approval and become approved/ready-to-pay.
- Approve or reject payments: an approver who did not create the payment can approve it (ready to pay) or reject it (cannot be paid); a maker attempting to approve their own payment is refused.

**Related:** NFR-005

### REQ-FEAT-TRACKING · approved · source: requirements:Payment tracking

Covers the payment list and dashboard views of lifecycle status.

- Payment list with status: staff see a list of payments with payee, amount and current lifecycle status, filterable by status (e.g. pending approval).
- Payments dashboard: staff see counts/summaries of payments grouped by lifecycle status (pending approval, approved/ready-to-pay, paid); approvers see payments awaiting their approval surfaced to them.

### REQ-FEAT-TREASURY · approved · source: requirements:Treasury settlement

Covers marking approved payments as settled after external payment.

- Mark payment as paid: a treasury/payer marks an approved payment as paid after settling it in their bank portal, recording the time and their identity. Payments still pending approval or rejected cannot be marked paid. A paid payment may optionally be recorded as reconciled/closed.

**Related:** NFR-007

### REQ-FEAT-AUDIT · approved · source: requirements:Audit log

Covers recording and reviewing of an immutable audit trail of significant actions.

- Record significant actions: every significant action (payment created/edited/approved/rejected/paid; payee added/changed; approval rule changed; sign-in) is recorded with actor, action, affected item and timestamp.
- View and export audit log: administrators and auditors view the audit log and export entries for a selected period to a file; users without administrator or auditor rights are refused access.

**Related:** NFR-006, NFR-004

### REQ-FEAT-NOTIFICATIONS · approved · source: requirements:Notifications

Covers email notifications to approvers and makers.

- Notify approvers of pending payments: when a payment becomes pending approval, an email is sent to the relevant approver(s) via the configured email provider.
- Notify makers of the outcome: when a maker's payment is approved or rejected, the maker receives an email telling them the outcome.

**Related:** NFR-011

### NFR-001 · approved · source: requirements:NFR-001

[security] Passwords must be stored only as hashes, never in plain text.

User passwords must be stored only as a hash and never in plain text, so stored credentials cannot be read if the database is accessed.

**Related:** REQ-FEAT-SIGNIN

### NFR-002 · approved · source: requirements:NFR-002

[security] Sign-in failures must show one generic message.

A failed sign-in must show a single generic authentication-failed message that does not reveal whether the email or the password was wrong.

**Related:** REQ-FEAT-SIGNIN

### NFR-003 · approved · source: requirements:NFR-003

[security] Sessions must expire, be endable, and be invalidated on deactivation.

A signed-in session must end when the user signs out, expire after the configured period of inactivity, and become invalid as soon as an administrator deactivates the account, after which the user must sign in again.

**Related:** REQ-FEAT-SIGNIN

### NFR-004 · approved · source: requirements:NFR-004

[security] Every action requires the correct role, every time.

Access is limited to authorised internal staff, and every action is permitted only for users who hold the required role (maker, approver, treasury/payer or administrator); any action attempted without the needed role is refused.

**Related:** REQ-FEAT-SIGNIN, REQ-FEAT-AUDIT

### NFR-005 · approved · source: requirements:NFR-005

[compliance] Maker-checker separation of duties must be enforced.

No one can approve their own payment or their own payee bank-detail change; approval must come from a different authorised user.

**Related:** REQ-FEAT-PAYEE, REQ-FEAT-APPROVALS

### NFR-006 · approved · source: requirements:NFR-006

[compliance] Audit log must be append-only and immutable.

Recorded audit entries must be append-only and cannot be altered or deleted by any user, so the record of who did what and when stays reliable for auditors.

**Related:** REQ-FEAT-AUDIT

### NFR-007 · approved · source: requirements:NFR-007

[compliance] Financial records must save atomically.

A payment and its approval, a payee and its bank details, and the matching audit entry must each be saved together or not at all, so financial and audit data stays correct.

**Related:** REQ-FEAT-PAYEE, REQ-FEAT-CREATE-PAYMENT, REQ-FEAT-TREASURY

### NFR-008 · approved · source: requirements:NFR-008

[privacy] Data must stay in the organisation's home region.

All payment and personal data must be stored and processed only in the organisation's home region (for a UK/£ organisation, London) under GDPR-style data protection.

### NFR-009 · approved · source: requirements:NFR-009

[scalability] Sized for modest internal usage, not high throughput.

The application is sized for modest internal usage rather than high throughput. Target: in the order of tens of staff users.

### NFR-010 · approved · source: requirements:NFR-010

[compatibility] Must be a responsive web app for desktop/laptop browsers.

The application must work as a responsive web app usable on a desktop or laptop browser.

### NFR-011 · approved · source: requirements:NFR-011

[maintainability] Notification failures must be surfaced, not silent.

If the email-sending key is missing or a notification cannot be sent, the condition must be handled gracefully and surfaced rather than failing silently.

**Related:** REQ-FEAT-NOTIFICATIONS, REQ-SERVICES
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-11

**Capabilities in scope:** Managed register of approved payees with bank details, Create a payment by selecting a registered payee and entering amount and details, Payment list and status view, Payments dashboard, Single home-currency payments, Internal staff login, Email and password login

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The heart of this product is rules and gatekeeping: enforce that a maker cannot approve their own payment, check the admin-configured approval thresholds, move payments through their lifecycle, and write an audit record on every action. FastAPI is a clean Python backend that is well suited to expressing this kind of business logic and validating every incoming payment and payee change strictly before it is saved. |
| cloud | AWS | You need the application and its payment and personal data to stay in your organisation's home region to meet GDPR-style data residency. AWS lets you pin everything to one region (for a UK/£ organisation, London) and gives you the backups, access controls and encryption an auditor will expect of a payments tool. It is the default here and fits a private internal app with no public traffic. |
| database | PostgreSQL | This is financial, transactional data where correctness is everything — a payment and its approval, a payee and its bank details, an audit entry must all be saved together or not at all. PostgreSQL gives you that transactional integrity and strong guarantees, and it can enforce an append-only audit log so records cannot be quietly altered, which is exactly what your auditors need. |
| frontend | React | Your staff — makers, approvers, treasury and admins — work through forms, lists and approval screens all day, and each role sees a different view of the same payment. React handles these interactive, role-dependent screens well and gives you a responsive app that works on a desk browser or a laptop. It is the default here and nothing you described pushes against it. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Authentication, Roles & Access Control

Access to the internal application is restricted to internal staff via email/password login with role-based permissions. Multi-factor authentication is required for privileged roles (approvers and administrators). Users hold one or more of the roles maker, approver, treasury/payer and administrator, and administrators manage user accounts and role assignments. Session and credential security are expressed as checkable outcomes. Assumption: this is a private internal tool, not public-facing, with no end-user or customer accounts.

### US-001: Sign in with email and password

**Priority:** critical

> As a internal staff member, I want to sign in with my email address and password, so that only authorised staff can access the payments application.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am a registered staff user with valid credentials | I submit my correct email and password | I am signed in and taken to the application |
| AC-002 | I am on the sign-in page | I submit an incorrect email or password | I am not signed in and I see a generic authentication-failed message that does not reveal which field was wrong |
| AC-003 | stored user credentials | a password is saved | it is stored only as a hash and never in plain text |

### US-002: Multi-factor authentication for privileged roles

**Priority:** high

> As a security-conscious organisation, I want approvers and administrators to complete multi-factor authentication when they sign in, so that privileged actions are protected by a second authentication factor.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | a user holding an approver or administrator role has entered correct credentials | they attempt to complete sign-in | they must provide a valid second authentication factor before access is granted |
| AC-005 | a privileged user is prompted for a second factor | they provide an incorrect or expired second factor | access is denied and they remain signed out |

### US-003: Session security and sign-out

**Priority:** high

> As a internal staff member, I want my session to expire and to be able to sign out, so that an unattended or abandoned session cannot be misused.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | I am signed in | I choose to sign out | my session is ended and I must sign in again to use the application |
| AC-007 | I am signed in and inactive beyond the configured session lifetime | I next make a request | my session has expired and I am required to sign in again |
| AC-008 | an administrator deactivates my account | any active session of mine next makes a request | that session is no longer valid and I cannot access the application |

### US-004: Manage users and role assignments

**Priority:** high

> As a administrator, I want to create staff accounts and assign the maker, approver, treasury/payer and administrator roles, so that each person has only the permissions their job requires.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | I am an administrator | I create or edit a user and assign one or more roles | that user gains exactly the permissions of the assigned roles, and one person may hold several roles at once |
| AC-010 | a user without a given role | they attempt an action reserved for that role | the action is refused and they are not permitted to perform it |
| AC-011 | I am an administrator | I deactivate a user account | that user can no longer sign in |

## EPIC-002: Managed Payee Register

The organisation maintains a managed register of pre-registered payees with their bank details. Payment data is entered manually, not imported from an external finance system. Only approved payees may be selected when creating payments. Assumption (fraud control): adding a payee or editing a payee's bank details is itself an approval-controlled action requiring a second person's approval before it takes effect.

### US-005: Add a new payee for approval

**Priority:** high

> As a administrator or maker with payee rights, I want to register a new payee with their bank details, so that approved payees are available to be paid.

| ID | Given | When | Then |
|---|---|---|---|
| AC-012 | I am registering a new payee | I enter the payee name and bank details and submit | the payee is created in a pending state and is not yet selectable for payments |
| AC-013 | a newly added payee is pending | a different authorised user approves it | the payee becomes approved and available for selection on new payments |

### US-006: Edit payee bank details under approval control

**Priority:** high

> As a administrator or maker with payee rights, I want changes to a payee's bank details to require a second person's approval, so that bank-detail fraud is prevented.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | an approved payee exists | I submit a change to that payee's bank details | the change is held pending and does not take effect until a different authorised user approves it |
| AC-015 | a pending payee bank-detail change | the person who requested the change tries to approve it themselves | they are not permitted to approve their own change |
| AC-016 | a pending payee bank-detail change is rejected | the reviewer rejects it | the payee's existing approved bank details remain unchanged |

### US-007: View and select from the payee register

**Priority:** high

> As a maker, I want to view the list of approved payees, so that I can select the correct one when creating a payment.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | the payee register contains approved and pending payees | I view the list for creating a payment | only approved payees can be selected |
| AC-018 | I am viewing the payee register | I open a payee | I can see its current approved bank details and status |

## EPIC-003: Payment Creation

Makers create outbound payment instructions by selecting an approved payee from the register and entering the amount and payment details. All payments are in the single organisation home currency. The system records instructions only — it does not move money. Out of scope for this version: multi-currency payments and multiple legal entities.

### US-008: Create a payment by selecting a payee

**Priority:** critical

> As a maker, I want to create a payment by selecting a registered payee and entering the amount and details, so that an outbound payment instruction is recorded for processing.

| ID | Given | When | Then |
|---|---|---|---|
| AC-019 | I am a maker | I select an approved payee, enter a valid amount in the home currency and payment details, and submit | a payment instruction is created and linked to that payee's approved bank details |
| AC-020 | I am creating a payment | I enter a non-positive amount or leave a required field blank | the payment is not created and I am shown which fields need correcting |
| AC-021 | the system operates in a single home currency | I create a payment | the amount is captured in that home currency with no option to choose another currency |

## EPIC-004: Approval Rules & Maker-Checker Approval

Administrators configure the rules that decide when a second person's approval is required, based on conditions such as amount threshold, payee or department. Payments meeting the rules require approval from a different user with approver rights; a maker can never approve their own payment. Payments that fall below the rules skip approval and become ready to pay.

### US-009: Configure approval rules

**Priority:** high

> As a administrator, I want to configure the conditions that require a second-person approval, so that the right payments are routed for checking without slowing down low-risk ones.

| ID | Given | When | Then |
|---|---|---|---|
| AC-022 | I am an administrator | I create or edit an approval rule using conditions such as amount threshold, payee or department | the rule is saved and applied to subsequently created payments |
| AC-023 | an active amount-threshold rule exists | a payment is created at or above the threshold | that payment is routed to pending approval |

### US-010: Route payments for approval or straight to ready-to-pay

**Priority:** high

> As a organisation controlling payments, I want payments to be routed according to the approval rules, so that only payments that meet the rules require a checker.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | a payment that matches an approval rule | it is created | its status becomes pending approval and it cannot be marked paid until approved |
| AC-025 | a payment that matches no approval rule | it is created | it skips approval and becomes approved/ready-to-pay |

### US-011: Approve or reject a pending payment

**Priority:** critical

> As a approver, I want to review and approve or reject payments awaiting approval, so that a second person checks payments before they are paid.

| ID | Given | When | Then |
|---|---|---|---|
| AC-026 | a payment is pending approval | an approver who did not create it approves it | the payment becomes approved/ready-to-pay |
| AC-027 | a payment is pending approval | an approver rejects it | the payment becomes rejected and cannot be paid |
| AC-028 | a payment I created is pending approval | I attempt to approve it myself | the system refuses because a maker cannot approve their own payment |

## EPIC-005: Payment Visibility: List, Status & Dashboard

Staff can see payments and their current lifecycle status (created → pending approval → approved/rejected → paid → optionally reconciled/closed). A list view supports finding payments by status, and a dashboard summarises payments across their lifecycle so staff can see what needs attention.

### US-012: View payment list with status

**Priority:** high

> As a internal staff member, I want to see a list of payments with their current status, so that I can track where each payment is in its lifecycle.

| ID | Given | When | Then |
|---|---|---|---|
| AC-029 | payments exist in various states | I open the payment list | I see each payment with its payee, amount and current status |
| AC-030 | I am viewing the payment list | I filter by a status such as pending approval | only payments in that status are shown |

### US-013: View payments dashboard

**Priority:** medium

> As a internal staff member, I want a dashboard summarising payments across their lifecycle, so that I can quickly see what needs my attention.

| ID | Given | When | Then |
|---|---|---|---|
| AC-031 | payments exist in several lifecycle states | I open the dashboard | I see counts or summaries of payments grouped by status such as pending approval, approved/ready-to-pay and paid |
| AC-032 | I am an approver with payments awaiting me | I view the dashboard | the payments needing approval are surfaced to me |

## EPIC-006: Treasury Payment Settlement

The system does not move money. A treasury/finance user pays each approved instruction in their own bank portal and then marks it as paid in the system. Payments may optionally be recorded as reconciled/closed. Out of scope for this version: direct bank integration that transfers money and automated bank reconciliation.

### US-014: Mark an approved payment as paid

**Priority:** critical

> As a treasury/payer, I want to mark an approved payment as paid after I have paid it in the bank portal, so that the system reflects that the instruction has been settled.

| ID | Given | When | Then |
|---|---|---|---|
| AC-033 | a payment is approved/ready-to-pay | I mark it as paid | its status becomes paid and the time and my identity are recorded |
| AC-034 | a payment is still pending approval or has been rejected | I attempt to mark it as paid | the action is refused |
| AC-035 | a payment has been marked paid | I optionally record it as reconciled/closed | its status reflects that it is reconciled/closed |

## EPIC-007: Immutable Audit Trail

Assumption: the system keeps an immutable, timestamped audit log of every significant action (payment created, edited, approved, rejected, paid; payee added or changed; approval rule changed; sign-in) recording who did what and when. Administrators and auditors can view and export the log.

### US-015: Record significant actions in an immutable log

**Priority:** critical

> As a organisation needing accountability, I want every significant action captured in a timestamped, immutable audit record, so that there is a reliable record of who did what and when.

| ID | Given | When | Then |
|---|---|---|---|
| AC-036 | a significant action occurs (payment created, edited, approved, rejected or paid; payee added or changed; rule changed; sign-in) | it completes | an audit entry is recorded with the actor, the action, the affected item and a timestamp |
| AC-037 | an existing audit entry | any user attempts to alter or delete it | the entry cannot be changed or removed |

### US-016: View and export the audit log

**Priority:** high

> As a administrator or auditor, I want to view and export the audit log, so that I can review activity and provide records to auditors.

| ID | Given | When | Then |
|---|---|---|---|
| AC-038 | I am an administrator or auditor | I open the audit log | I can view entries with actor, action, item and timestamp |
| AC-039 | I am viewing the audit log | I export it | I receive a file containing the audit entries for the selected period |
| AC-040 | I am a user without administrator or auditor rights | I attempt to view or export the audit log | access is refused |

## EPIC-008: Email Notifications

Assumption: approvers are notified by email when a payment is awaiting their approval, and creators are notified when their payment is approved or rejected. Delivery uses a transactional email provider, which requires an email-sending API key to be configured.

### US-017: Notify approvers of pending payments

**Priority:** medium

> As a approver, I want to be emailed when a payment is awaiting my approval, so that I can act on it promptly.

| ID | Given | When | Then |
|---|---|---|---|
| AC-041 | a payment becomes pending approval | the status is set | an email notification is sent to the relevant approver(s) via the configured transactional email provider |
| AC-042 | no email-sending API key is configured | a notification should be sent | the condition is handled gracefully and surfaced rather than silently failing |

### US-018: Notify creators of approval outcome

**Priority:** medium

> As a maker, I want to be emailed when my payment is approved or rejected, so that I know the outcome without checking manually.

| ID | Given | When | Then |
|---|---|---|---|
| AC-043 | a payment I created is approved | the approval is recorded | I receive an email telling me it was approved |
| AC-044 | a payment I created is rejected | the rejection is recorded | I receive an email telling me it was rejected |
<!-- sdlc:auto:end epics -->
