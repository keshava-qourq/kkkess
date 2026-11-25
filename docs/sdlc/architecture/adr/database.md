<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-14

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQL Server

## Decision Outcome

Chosen option: PostgreSQL 16, because Gives transactional all-or-nothing writes for payment+approval+audit, and enforces an append-only audit log via revoked UPDATE/DELETE and a blocking trigger. numeric type keeps money exact.

## Consequences

Append-only enforcement lives in migrations and triggers that must be maintained, but this is exactly what auditors expect.
<!-- sdlc:auto:end adr -->