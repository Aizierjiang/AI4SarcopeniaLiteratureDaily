# AI4Sarcopenia Literature Daily - Usage Guide

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

---

## Overview

**AI4Sarcopenia Literature Daily** is a dynamic literature review system that automatically tracks and organizes the latest research papers in AI-driven body shape analysis for sarcopenia. This project accompanies the academic paper:

> **"Literature Review of AI-Driven Body Shape Analysis for Sarcopenia"**  
> Aizierjiang Aierislan, James Hahn  
> Institute for Innovation in Health Computing, The George Washington University

This guide explains how to use and customize the system.

---

## Usage

### Basic Commands

#### 1. Fetch Latest Papers

```bash
python daily_arxiv.py
```

This command:
- Queries arXiv based on sarcopenia-focused keywords in `config.yaml`
- Fetches papers from relevant categories (sarcopenia, body composition, medical imaging, etc.)
- Generates organized markdown files with paper information
- Creates JSON data files for persistence
- Updates both README and GitHub Pages version

**Output Files:**
- `README.md` - Main paper list
- `docs/index.md` - GitHub Pages version
- `docs/sarcopenia-arxiv-daily.json` - Data storage
- `docs/sarcopenia-arxiv-daily-web.json` - Web format data

#### 2. Update Paper Links

```bash
python daily_arxiv.py --update_paper_links
```

This command:
- Reads existing papers from JSON files
- Searches for associated GitHub repositories
- Updates code links where available
- Maintains paper metadata

Run this weekly to keep code links up-to-date.

#### 3. Custom Configuration

```bash
python daily_arxiv.py --config_path custom_config.yaml
```

Use a custom configuration file instead of the default `config.yaml`.

---

## Configuration

### config.yaml Structure

```yaml
# Basic Settings
base_url: "https://arxiv.paperswithcode.com/api/v0/papers/"
user_name: "aizierjiang"
repo_name: "lr4sarcopenia"
max_results: 15  # Papers per topic

# Output Options
publish_readme: False   # Generate README.md
publish_gitpage: True   # Generate docs/index.md

# Display Options
show_authors: True
show_links: True
show_badge: True

# Keywords Configuration (based on systematic literature review)
keywords:
    "Topic Name": 
        filters: ["keyword1", "keyword2", "multi word phrase"]
```

### Adding Research Topics

To add a new research area:

```yaml
keywords:
    "Your New Topic":
        filters: ["specific term", "another term", "full phrase"]
```

**Best Practices:**
- Use specific, descriptive terms related to sarcopenia and body composition
- Include common synonyms from the medical literature
- Multi-word phrases are automatically quoted
- Filters use OR logic (matches any filter)

### Sarcopenia Research Keywords

The default configuration includes 12 sarcopenia-focused domains based on the systematic literature review:

1. **Sarcopenia AI Detection** - Core sarcopenia detection, diagnosis, prediction
2. **CT Body Composition** - L3 vertebral level, skeletal muscle index, automated segmentation
3. **MRI Body Composition** - Muscle analysis, fat quantification, Dixon imaging
4. **DXA & BIA Analysis** - Appendicular lean mass, bioelectrical impedance
5. **Ultrasound Muscle Assessment** - Point-of-care muscle thickness measurement
6. **Deep Learning Segmentation** - U-Net, CNN for medical image segmentation
7. **3D Body Shape Analysis** - Optical body scanning, morphometry, point clouds
8. **ML Risk Prediction** - Random Forest, XGBoost, feature selection
9. **Wearables & mHealth** - Gait analysis, smartphone screening, SARC-F
10. **Explainable AI Healthcare** - XAI, SHAP, interpretable models
11. **Aging & Muscle Health** - EWGSOP/AWGS criteria, geriatric frailty
12. **Cancer & Cachexia** - Oncology sarcopenia, chemotherapy body composition

---

## Examples

### Example 1: Focused Sarcopenia Search

For a narrow focus on sarcopenia detection only:

```yaml
keywords:
    "Sarcopenia Detection":
        filters: ["sarcopenia detection", "sarcopenia diagnosis", 
                  "sarcopenia classification", "sarcopenia screening",
                  "muscle mass detection"]
```

### Example 2: CT-Based Body Composition

For comprehensive coverage of CT body composition analysis:

```yaml
keywords:
    "CT Body Composition AI":
        filters: ["CT body composition", "L3 segmentation", 
                  "skeletal muscle index", "CT muscle segmentation",
                  "opportunistic CT screening", "automated L3",
                  "abdominal CT analysis"]
```

### Example 3: Multiple Related Topics

```yaml
keywords:
    "Sarcopenia Assessment":
        filters: ["sarcopenia assessment", "sarcopenia measurement", 
                  "muscle mass assessment", "body composition assessment"]
    
    "Muscle Quality":
        filters: ["muscle quality", "myosteatosis", "muscle attenuation",
                  "intramuscular fat", "muscle fat infiltration"]
```

### Example 4: Emerging 3D Body Shape Analysis

```yaml
keywords:
    "3D Body Analysis for Sarcopenia":
        filters: ["3D body scanning", "3D body shape", 
                  "optical body scanner", "body morphometry",
                  "point cloud body", "3D anthropometry",
                  "body surface scanning"]
```

---

## Troubleshooting

### Common Issues

#### 1. No Papers Found

**Problem:** Script runs but finds no papers

**Solutions:**
- Check keyword specificity (too narrow?)
- Verify arXiv categories are relevant
- Increase `max_results` in config
- Try broader filter terms

#### 2. Too Many Irrelevant Papers

**Problem:** Papers don't match health computing focus

**Solutions:**
- Use more specific filter terms
- Add domain-specific phrases (e.g., "clinical", "medical", "healthcare")
- Combine multiple specific terms
- Reduce `max_results` for quality over quantity

#### 3. Missing Code Links

**Problem:** Papers show "null" for code links

**Solutions:**
- Run `python daily_arxiv.py --update_paper_links` weekly
- Some papers don't have public code
- Links are found via Papers with Code API
- Manual GitHub search may find unlisted repositories

#### 4. Duplicate Papers Across Topics

**Problem:** Same paper appears in multiple sections

**Solutions:**
- This is expected behavior (papers can fit multiple topics)
- Papers are deduplicated within each topic
- Cross-topic duplication helps discoverability

#### 5. Script Timeout

**Problem:** Script takes too long or times out

**Solutions:**
- Reduce `max_results` per topic
- Limit number of keywords in config
- Run specific topics separately
- Check internet connection

#### 6. GitHub Actions Not Running

**Problem:** Automatic updates not working

**Solutions:**
- Check Actions tab for error messages
- Verify workflows are enabled in repository settings
- Ensure GitHub token has write permissions
- Check cron schedule syntax

---

## Advanced Usage

### Filtering by arXiv Category

arXiv papers are categorized. Relevant categories for health computing:

- **cs.AI** - Core AI algorithms
- **cs.LG** - Machine learning methods
- **cs.CV** - Medical image analysis
- **cs.CL** - Clinical NLP
- **cs.HC** - Health interface design
- **cs.RO** - Healthcare robotics
- **cs.CY** - Health equity and social impact

### Query Construction

The script builds arXiv queries as:

```
(filter1) OR (filter2) OR (filter3) ...
```

Multi-word filters are automatically quoted:
- `Medical Imaging` → `"Medical Imaging"`

### Output Format Customization

Edit `daily_arxiv.py` function `json_to_md()` to customize:
- Table headers
- Markdown styling
- Badge display
- Table of contents

### Scheduling

Modify `.github/workflows/sarcopenia-arxiv-daily.yml`:

```yaml
schedule:
    - cron: "0 9 * * *"  # Minute Hour Day Month Weekday
```

Examples:
- `"0 9 * * *"` - Daily at 9 AM UTC
- `"0 */8 * * *"` - Every 8 hours
- `"0 0 * * 1"` - Weekly on Monday
- `"0 0 1,15 * *"` - Twice monthly (1st and 15th)

---

## Performance Tips

1. **Optimize max_results**: 10-20 papers per topic is usually sufficient
2. **Strategic keywords**: Use 8-15 well-chosen topics
3. **Specific filters**: 3-8 filters per topic works well
4. **Update frequency**: Daily for active areas, weekly for stable areas
5. **Link updates**: Weekly is sufficient for code link maintenance

---

## Contact & Support

- **Authors**: Aizierjiang Aierislan
- **Institution**: Institute for Innovation in Health Computing, GWU
- **Email**: mysoft@111.com
- **Issues**: Open a GitHub issue
- **Contributions**: PRs welcome for new sarcopenia research topics

---

## Additional Resources

- [arXiv API Documentation](https://arxiv.org/help/api/)
- [Papers with Code](https://paperswithcode.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cron Syntax Guide](https://crontab.guru/)
- [EWGSOP2 Guidelines](https://doi.org/10.1093/ageing/afz046)
- [AWGS 2019 Consensus](https://doi.org/10.1016/j.jamda.2019.12.012)

---

Last Updated: December 2025
