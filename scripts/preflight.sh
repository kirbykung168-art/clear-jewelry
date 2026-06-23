#!/usr/bin/env bash
# preflight.sh — run this BEFORE pushing to main.
# It executes the same build Vercel will run. If this fails locally, do
# NOT push — Vercel will fail too and production will keep serving the
# previous build while production code drifts ahead of what's deployed.
set -e
cd "$(dirname "$0")/.."
echo "→ Running 'npm run build' as a preflight check before push…"
npm run build
echo ""
echo "✓ Build clean. Safe to push to main."
