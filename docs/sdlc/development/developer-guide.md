# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `cf10829` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
kkkess is a generated two-app repository for an internal payments tool where staff create payments and a second approver must sign off on high-value ones, with a full audit trail. The frontend (`frontend/`) is a Vite + React 19 SPA whose screens were generated from an approved design and currently render seeded sample data rather than calling a real API. The backend (`backend/`) is a FastAPI 0.115 service scaffolded from an API spec with SQLAlchemy models, Alembic-driven migrations, and a seeding step on startup, but almost every route is still a typed stub (`StubResponse`); only `/health` and the auth router referenced in `main.py` are live. SQLite is the default local database so the backend runs with no external dependencies, while PostgreSQL 16 (via `docker-compose.yml`) is used for the real/test database and matches the approved stack (AWS deployment).
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (compatible with Vite 6 / React 19, e.g. Node 20+)
- Python 3.12
- pip
- Docker and Docker Compose (for the Postgres service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository and cd into it.
2. Copy .env.example to .env and fill in required values before running services (see .env.example for the variables this project expects).
3. Optional: start a local Postgres instance with `docker compose up -d db` (listens on localhost:5432).
4. Backend: cd backend && pip install -r requirements.txt
5. Backend: set DATABASE_URL if you want Postgres instead of the default SQLite file (sqlite:///./app.db) and set ALLOWED_ORIGINS if the frontend runs somewhere other than http://localhost:5173.
6. Backend: uvicorn app.main:app --reload (this also runs Alembic migrations and seeding on startup).
7. Frontend: cd frontend && npm install
8. Frontend: optionally set VITE_API_BASE_URL (defaults to http://localhost:8000) and VITE_API_PROJECT_ID if pointing at a deployed backend.
9. Frontend: npm run dev
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `uvicorn app.main:app --reload` | Runs the FastAPI app from backend/, applying Alembic migrations and seeding on startup. |
| frontend dev | `npm run dev` | Starts the Vite dev server for the React SPA. |
| frontend build | `npm run build` | Bundles the app with Vite (does not typecheck). |
| frontend preview | `npm run preview` | Serves the production build locally. |
| db up | `docker compose up -d db` | Starts the PostgreSQL 16 container defined in docker-compose.yml. |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend/app` | FastAPI application: main.py (entrypoint, lifespan hooks that run Alembic migrations and seeding), database.py (engine/session/get_db dependency), models.py (SQLAlchemy Base, currently empty), schemas.py (Pydantic schemas, including the StubResponse placeholder), routers/ (one router per architecture component). |
| `backend/tests` | Pytest suite split into unit/ and integration/ (currently a health-check integration test). |
| `backend/requirements.txt, backend/Dockerfile` | Python dependencies and container build; Dockerfile copies app, alembic.ini and alembic/ and runs as a non-root user. |
| `frontend/src` | SPA source: screens/ (one module per approved screen), App.tsx (navigation shell/route table), lib/ (ui.tsx and icons.tsx component vocabulary, api.ts API client, navigate.ts), index.css (brand CSS variables). |
| `frontend/e2e` | Playwright acceptance tests and support fixtures (e.g. admin.ts). |
| `.devcontainer` | VS Code/devcontainer configuration for a consistent dev environment. |
| `docker-compose.yml` | Defines the local PostgreSQL 16 service used for development/testing. |
| `.env.example` | Template for required environment variables. |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend: one router per architecture/API-spec component under app/routers/, one route per declared endpoint.
- Backend: unimplemented routes return a typed StubResponse rather than failing, so the service and its OpenAPI doc stay complete during generation.
- Backend: schema changes go through Alembic migrations (alembic/versions/), never SQLAlchemy create_all.
- Backend: all models inherit from the single Base declared in app/database.py; sessions are request-scoped via the get_db dependency.
- Backend: database/seeding/migration work happens in the FastAPI lifespan handler, not at import time, so importing the app never opens a DB connection.
- Frontend: one module per approved screen under src/screens/, built against the shared component/icon vocabulary in src/lib/ui.tsx and src/lib/icons.tsx.
- Frontend: all API calls should go through src/lib/api.ts (apiFetch), which attaches a bearer token (session token if present, else the project id) and reads VITE_API_BASE_URL.
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend tests | `pytest` | Runs unit and integration tests from backend/tests, writing a JUnit report to reports/junit/pytest.xml. |
| backend lint | `ruff check .` | Lints the backend Python code. |
| backend format check | `ruff format .` | Formats backend Python code with Ruff. |
| frontend unit tests | `npm test` | Runs Vitest component tests under src/, with coverage and a JUnit report. |
| frontend e2e | `npm run test:e2e` | Runs Playwright acceptance tests from e2e/; without E2E_BASE_URL it boots the backend (from backend/.venv) and a built/preview frontend itself. |
| frontend e2e browser install | `npm run test:e2e:install` | Installs the Chromium browser Playwright needs. |
| frontend lint | `npm run lint` | Runs ESLint over the frontend codebase. |
| frontend typecheck | `npm run typecheck` | Runs tsc --noEmit (not run by npm run build). |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Backend fails to start with an error about alembic.ini being missing. | Ensure alembic.ini and the alembic/ migrations directory sit beside backend/app (the Dockerfile copies both); restore them if missing. |
| Frontend cannot reach the backend / CORS errors in the browser. | Set the backend's ALLOWED_ORIGINS environment variable to include the frontend's origin (defaults to http://localhost:5173 and http://127.0.0.1:5173 in dev). |
| `npm run build` succeeds but the app is actually broken at runtime due to type errors. | Run `npm run typecheck` (tsc --noEmit) separately, since the build step does not typecheck. |
| `npm run test:e2e` fails to start the backend. | The Playwright config launches the backend from backend/.venv/bin/python; create that virtualenv and install backend/requirements.txt into it before running e2e tests, or set E2E_BASE_URL to run against an already-deployed app. |
| Backend tests fail to connect to a database. | The test suite (backend/tests/conftest.py) expects PostgreSQL; start it with `docker compose up -d db` and ensure DATABASE_URL points at it. |
<!-- sdlc:auto:end troubleshooting -->
