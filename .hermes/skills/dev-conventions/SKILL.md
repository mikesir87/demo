---
name: dev-conventions
description: "Use when developing, running, or validating changes. Docker Compose workflow."
version: 1.0.0
tags: [docker, compose, dev-workflow, conventions]
---

# Development Conventions

## Dev Environment

- Never start the app with `npm run dev`, `npm start`, or any bare process manager. Always use `docker compose up` for the Compose-based stack.
- All changes must be validated against this Compose stack before considering them done.
- The production app is a containerized image <E2><80><94> using Compose in dev ensures consistency between development and deployment (same base image, same environment variables, same networking).

## Validation Workflow

1. Make the code change.
2. Run `docker compose up --build` (or `docker compose up` if no Dockerfile changes) to validate.
3. Confirm the app starts and the change works as expected in the containerized environment.
4. Only then consider the change complete.
