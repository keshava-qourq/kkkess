<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-14

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Azure
- GCP

## Decision Outcome

Chosen option: AWS, because Everything pinned to London (eu-west-2) for GDPR-style data residency, with RDS encryption at rest, TLS in transit, backups and IAM access controls for a private internal tool.

## Consequences

Region pinning constrains failover options, which is an accepted trade for residency compliance at this scale.
<!-- sdlc:auto:end adr -->