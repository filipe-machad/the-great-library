#!/usr/bin/env python3
"""Validate YAML frontmatter in all canon markdown files.

Checks that every .md file under canon/ (except index.md) contains
the required frontmatter fields: id, title, type, status, visibility,
version, updated, tags, summary.

Usage:
    python scripts/validate_frontmatter.py [--strict]
"""

import argparse
import os
import re
import sys

import yaml

REQUIRED_FIELDS = {"id", "title", "type", "status", "visibility", "version", "updated", "tags", "summary"}
VALID_TYPES = {
    "location", "site", "convergence", "artifact", "arin",
    "faction", "npc", "mechanic", "enigma", "cosmology",
    "religion", "glossary", "timeline",
}
VALID_STATUSES = {"draft", "review", "canon", "deprecated"}
VALID_VISIBILITIES = {"public", "gm"}

FM_PATTERN = re.compile(r"^---\s*\n(.*?)\n---", re.DOTALL)
CANON_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "canon")


def validate_file(filepath: str, strict: bool = False) -> list[str]:
    errors = []
    rel = os.path.relpath(filepath, CANON_DIR)

    with open(filepath, "r", encoding="utf-8") as fh:
        content = fh.read()

    match = FM_PATTERN.match(content)
    if not match:
        errors.append(f"{rel}: missing YAML frontmatter")
        return errors

    try:
        fm = yaml.safe_load(match.group(1))
    except yaml.YAMLError as exc:
        errors.append(f"{rel}: invalid YAML — {exc}")
        return errors

    if not isinstance(fm, dict):
        errors.append(f"{rel}: frontmatter is not a mapping")
        return errors

    missing = REQUIRED_FIELDS - set(fm.keys())
    if missing:
        errors.append(f"{rel}: missing fields — {', '.join(sorted(missing))}")

    if fm.get("type") and fm["type"] not in VALID_TYPES:
        errors.append(f"{rel}: invalid type '{fm['type']}'")

    if fm.get("status") and fm["status"] not in VALID_STATUSES:
        errors.append(f"{rel}: invalid status '{fm['status']}'")

    if fm.get("visibility") and fm["visibility"] not in VALID_VISIBILITIES:
        errors.append(f"{rel}: invalid visibility '{fm['visibility']}'")

    if strict:
        if not fm.get("related"):
            errors.append(f"{rel}: 'related' field is empty (strict mode)")

    return errors


def main():
    parser = argparse.ArgumentParser(description="Validate canon frontmatter")
    parser.add_argument("--strict", action="store_true", help="Enable strict checks")
    args = parser.parse_args()

    all_errors = []
    file_count = 0

    for root, _dirs, files in os.walk(CANON_DIR):
        for fname in files:
            if not fname.endswith(".md") or fname == "index.md":
                continue
            filepath = os.path.join(root, fname)
            file_count += 1
            all_errors.extend(validate_file(filepath, strict=args.strict))

    if all_errors:
        print(f"\n❌ {len(all_errors)} error(s) in {file_count} file(s):\n")
        for err in all_errors:
            print(f"  • {err}")
        sys.exit(1)
    else:
        print(f"\n✅ All {file_count} canon file(s) passed validation.\n")
        sys.exit(0)


if __name__ == "__main__":
    main()
