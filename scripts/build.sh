#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$ROOT_DIR"

echo "=== Validating frontmatter ==="
python scripts/validate_frontmatter.py

echo ""
echo "=== Building public site ==="
mkdocs build --config-file mkdocs.yml --clean

echo ""
echo "=== Building GM site ==="
mkdocs build --config-file mkdocs-gm.yml --clean

echo ""
echo "✅ Both sites built successfully."
echo "   Public: site/public/"
echo "   GM:     site/gm/"
