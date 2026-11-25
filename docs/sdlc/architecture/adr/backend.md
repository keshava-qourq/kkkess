<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-14

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Django
- Flask

## Decision Outcome

Chosen option: FastAPI 0.115, because Hosts the maker-checker rules, threshold evaluation, strict validation of payments and payee changes, lifecycle transitions and transactional audit writes. Pydantic validation rejects non-positive amounts and missing fields before persistence.

## Consequences

Business and RBAC logic is hand-written rather than framework-provided, but that keeps the gatekeeping explicit and testable.
<!-- sdlc:auto:end adr -->