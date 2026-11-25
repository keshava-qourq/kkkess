<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-14

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Angular

## Decision Outcome

Chosen option: React 19, because Drives the role-dependent maker/approver/treasury/admin screens, forms, lists and dashboard as a responsive SPA. Built with Vite, it reads the API base URL from VITE_API_BASE_URL and stores the opaque session token to send as a Bearer header.

## Consequences

A separate SPA origin means no cookie sessions, so the app relies on token storage and explicit Authorization headers; acceptable and intended here.
<!-- sdlc:auto:end adr -->