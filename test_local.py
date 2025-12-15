#!/usr/bin/env python
"""
Local testing script for AI4Sarcopenia Literature Daily
Part of: "Literature Review of AI-Driven Body Shape Analysis for Sarcopenia"
Authors: Aizierjiang Aierislan
Institute for Innovation in Health Computing, The George Washington University
"""
import os
import sys
from pathlib import Path
import yaml
from typing import Dict, Any

def create_test_config():
    """Create a minimal test configuration for sarcopenia research"""
    config = {
        'base_url': 'https://arxiv.paperswithcode.com/api/v0/papers/',
        'user_name': 'aizierjiang',
        'repo_name': 'AI4SarcopeniaLiteratureDaily',
        'show_authors': True,
        'show_links': True,
        'show_badge': True,
        'max_results': 5,  # Reduced for testing
        'publish_readme': False,
        'publish_gitpage': True,
        'json_readme_path': './docs/sarcopenia-arxiv-daily.json',
        'json_gitpage_path': './docs/sarcopenia-arxiv-daily-web.json',
        'md_readme_path': 'README.md',
        'md_gitpage_path': './docs/index.md',
        'keywords': {
            'Sarcopenia AI Detection': {
                'filters': ['sarcopenia detection', 'sarcopenia diagnosis']
            },
            'CT Body Composition': {
                'filters': ['CT body composition', 'L3 vertebral level']
            }
        }
    }
    return config


# ----------------------------------------------------------------------
# 1. Config loader
# ----------------------------------------------------------------------
def load_config(path: str | Path) -> Dict[str, Any]:
    path = Path(path)
    if not path.is_file():
        raise FileNotFoundError(f"Config file not found: {path}")
    with path.open("r", encoding="utf-8") as f:
        cfg = yaml.safe_load(f)
    if not isinstance(cfg, dict):
        raise ValueError(f"Config must be a mapping, got {type(cfg)!r}")
    return cfg

# ----------------------------------------------------------------------
# 2. Filter formatter
# ----------------------------------------------------------------------
def pretty_filters(**config) -> dict:
    keywords = {}
    EXCAPE = '"'
    OR = " OR "

    def parse_filters(filters: list):
        ret = ""
        for idx, filt in enumerate(filters):
            ret += f'{EXCAPE}{filt}{EXCAPE}' if " " in filt else filt
            if idx != len(filters) - 1:
                ret += OR
        return ret

    for k, v in config["keywords"].items():
        keywords[k] = parse_filters(v["filters"])
    return keywords

# ----------------------------------------------------------------------
# 3. Main entry point
# ----------------------------------------------------------------------
def main():
    from daily_arxiv import demo  # local import, keep it at the bottom

    print("=" * 80)
    print("AI4Sarcopenia Literature Daily - Local Testing")
    print("Dynamic Literature Review for AI-Driven Body Shape Analysis for Sarcopenia")
    print("=" * 80)
    print()

    mode = input(
        "Choose test mode:\n"
        "1. Quick test (max_results=5)\n"
        "2. Full test (all topics from config.yaml)\n"
        "3. Update links only\n"
        "Enter choice (1/2/3): "
    ).strip()

    # ---- load the real config ------------------------------------------------
    if not Path("config.yaml").exists():
        print("Error: config.yaml not found!")
        sys.exit(1)

    config = load_config("config.yaml")
    config["kv"] = pretty_filters(**config)

    # ---- mode handling -------------------------------------------------------
    if mode == "1":
        print("\nQuick test (forcing max_results=5)…")
        config["max_results"] = 5
        config["update_paper_links"] = False
        demo(**config)

    elif mode == "2":
        print("\nFull test with config.yaml…")
        config["update_paper_links"] = False
        demo(**config)

    elif mode == "3":
        print("\nUpdating paper links only…")
        config["update_paper_links"] = True
        demo(**config)

    else:
        print("Invalid choice.")
        sys.exit(1)

    # ---- final report --------------------------------------------------------
    print("\nDone!")
    print("Generated files:")
    for key in ("md_readme_path", "md_gitpage_path",
                "json_readme_path", "json_gitpage_path"):
        print(f"  - {config.get(key, '(missing)')}")
    print("\nEdit config.yaml to change keywords, max_results, etc.")
    print()

if __name__ == "__main__":
    main()