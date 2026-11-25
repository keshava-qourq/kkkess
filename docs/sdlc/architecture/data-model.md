# Data Model

<!-- sdlc:auto:start entities -->
### users

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| email | citext | False | — | False |
| password_hash | text | False | — | False |
| mfa_secret | text | False | — | True |
| mfa_enabled | boolean | False | — | False |
| is_active | boolean | False | — | False |
| created_at | timestamptz | False | — | False |

### user_roles

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| role | text | False | — | False |

### sessions

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| token | text | True | — | False |
| user_id | uuid | False | users.id | False |
| created_at | timestamptz | False | — | False |
| last_active_at | timestamptz | False | — | False |
| expires_at | timestamptz | False | — | False |
| revoked_at | timestamptz | False | — | True |

### payees

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| name | text | False | — | False |
| account_name | text | False | — | False |
| sort_code | text | False | — | False |
| account_number | text | False | — | False |
| status | text | False | — | False |
| created_by | uuid | False | users.id | False |
| approved_by | uuid | False | users.id | True |
| created_at | timestamptz | False | — | False |

### payee_change_requests

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| payee_id | uuid | False | payees.id | False |
| new_account_name | text | False | — | False |
| new_sort_code | text | False | — | False |
| new_account_number | text | False | — | False |
| status | text | False | — | False |
| requested_by | uuid | False | users.id | False |
| reviewed_by | uuid | False | users.id | True |
| created_at | timestamptz | False | — | False |

### payments

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| payee_id | uuid | False | payees.id | False |
| amount | numeric(14,2) | False | — | False |
| currency | text | False | — | False |
| details | text | False | — | True |
| status | text | False | — | False |
| snapshot_account_name | text | False | — | False |
| snapshot_sort_code | text | False | — | False |
| snapshot_account_number | text | False | — | False |
| created_by | uuid | False | users.id | False |
| approved_by | uuid | False | users.id | True |
| paid_by | uuid | False | users.id | True |
| created_at | timestamptz | False | — | False |
| approved_at | timestamptz | False | — | True |
| paid_at | timestamptz | False | — | True |

### approval_rules

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| name | text | False | — | False |
| condition_type | text | False | — | False |
| threshold_amount | numeric(14,2) | False | — | True |
| payee_id | uuid | False | payees.id | True |
| department | text | False | — | True |
| is_active | boolean | False | — | False |
| created_by | uuid | False | users.id | False |
| created_at | timestamptz | False | — | False |

### audit_log

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | bigint | True | — | False |
| actor_id | uuid | False | users.id | True |
| action | text | False | — | False |
| entity_type | text | False | — | False |
| entity_id | text | False | — | True |
| detail | jsonb | False | — | True |
| created_at | timestamptz | False | — | False |
<!-- sdlc:auto:end entities -->

<!-- sdlc:auto:start relationships -->
| Source | Target | Type |
|---|---|---|
| users | user_roles | one-to-many |
| users | sessions | one-to-many |
| users | payments | one-to-many |
| payees | payments | one-to-many |
| payees | payee_change_requests | one-to-many |
| payees | approval_rules | one-to-many |
| users | audit_log | one-to-many |
<!-- sdlc:auto:end relationships -->

<!-- sdlc:auto:start er-diagram -->
```mermaid
erDiagram
  users {
    uuid id PK
    citext email
    text password_hash
    text mfa_secret
    boolean mfa_enabled
    boolean is_active
    timestamptz created_at
  }
  user_roles {
    uuid id PK
    uuid user_id FK
    text role
  }
  sessions {
    text token PK
    uuid user_id FK
    timestamptz created_at
    timestamptz last_active_at
    timestamptz expires_at
    timestamptz revoked_at
  }
  payees {
    uuid id PK
    text name
    text account_name
    text sort_code
    text account_number
    text status
    uuid created_by FK
    uuid approved_by FK
    timestamptz created_at
  }
  payee_change_requests {
    uuid id PK
    uuid payee_id FK
    text new_account_name
    text new_sort_code
    text new_account_number
    text status
    uuid requested_by FK
    uuid reviewed_by FK
    timestamptz created_at
  }
  payments {
    uuid id PK
    uuid payee_id FK
    numeric_14_2_ amount
    text currency
    text details
    text status
    text snapshot_account_name
    text snapshot_sort_code
    text snapshot_account_number
    uuid created_by FK
    uuid approved_by FK
    uuid paid_by FK
    timestamptz created_at
    timestamptz approved_at
    timestamptz paid_at
  }
  approval_rules {
    uuid id PK
    text name
    text condition_type
    numeric_14_2_ threshold_amount
    uuid payee_id FK
    text department
    boolean is_active
    uuid created_by FK
    timestamptz created_at
  }
  audit_log {
    bigint id PK
    uuid actor_id FK
    text action
    text entity_type
    text entity_id
    jsonb detail
    timestamptz created_at
  }
  users ||--o{ user_roles : "one-to-many"
  users ||--o{ sessions : "one-to-many"
  users ||--o{ payments : "one-to-many"
  payees ||--o{ payments : "one-to-many"
  payees ||--o{ payee_change_requests : "one-to-many"
  payees ||--o{ approval_rules : "one-to-many"
  users ||--o{ audit_log : "one-to-many"
```
<!-- sdlc:auto:end er-diagram -->
