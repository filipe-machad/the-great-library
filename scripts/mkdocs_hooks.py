"""MkDocs hooks for visibility-based content filtering.

In the public build (is_gm_build: false), files with
`visibility: gm` in their YAML frontmatter are excluded.
The GM build includes everything.
"""

import logging
import os
import re

import yaml

log = logging.getLogger("mkdocs.hooks.visibility")

_FM_PATTERN = re.compile(r"^---\s*\n(.*?)\n---", re.DOTALL)


def _read_visibility(filepath: str) -> str | None:
    try:
        with open(filepath, "r", encoding="utf-8") as fh:
            content = fh.read(4096)
        match = _FM_PATTERN.match(content)
        if match:
            fm = yaml.safe_load(match.group(1))
            if isinstance(fm, dict):
                return fm.get("visibility")
    except Exception as exc:
        log.warning("Could not read frontmatter from %s: %s", filepath, exc)
    return None


def on_files(files, config, **kwargs):
    is_gm = config["extra"].get("is_gm_build", False)
    if is_gm:
        return files

    to_remove = []
    for file in files:
        if not file.src_path.endswith(".md"):
            continue
        full_path = os.path.join(config["docs_dir"], file.src_path)
        visibility = _read_visibility(full_path)
        if visibility == "gm":
            log.info("Excluding GM-only file: %s", file.src_path)
            to_remove.append(file)

    for file in to_remove:
        files.remove(file)

    return files
