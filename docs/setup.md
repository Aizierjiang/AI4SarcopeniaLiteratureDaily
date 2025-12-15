---
layout: default
title: Setup Guide
nav_order: 3
description: "How to set up and customize the tracker"
permalink: /setup
---

# Setup Guide

## 🚀 Quick Start

### For Viewing Only

Simply visit [AI4SarcopeniaLiteratureDaily](https://aizierjiang.github.io/AI4SarcopeniaLiteratureDaily/) to browse the latest papers!

### For Local Development

1. **Clone the repository**
   ```bash
    git clone https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily.git
    cd AI4SarcopeniaLiteratureDaily
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run a test**
   ```bash
   python test_local.py
   ```

4. **View results**
   Check `README.md` and `docs/index.md`

## ⚙️ Configuration

### Customize Keywords

Edit `config.yaml` to add your own research topics:

```yaml
keywords:
    "Your Research Topic":
        filters: ["keyword 1", "keyword 2", "multi-word phrase"]
```

### Adjust Update Frequency

Papers per topic (default: 15):
```yaml
max_results: 15  # Increase for more papers
```

### Example Configurations

**Focus on specific area:**
```yaml
keywords:
    "Surgical AI":
        filters: ["Robot-Assisted Surgery", "Surgical Robot",
                  "Surgical Automation", "Surgical Planning"]
```

**Broad coverage:**
```yaml
keywords:
    "Medical AI":
        filters: ["Medical AI", "Healthcare AI", "Clinical AI",
                  "Medical Machine Learning", "Healthcare ML"]
```

## 🔧 Advanced Setup

### GitHub Actions (Automatic Updates)

1. Fork this repository
2. Enable GitHub Actions in Settings
3. Grant workflow write permissions
4. The workflow runs automatically every 24 hours!

### GitHub Pages Deployment

1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main`, Folder: `/docs`
4. Save

Your site will be live at: `https://yourusername.github.io/`

### Local Server Testing

For local development with Jekyll:

```bash
cd docs
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`

## 📝 Customization Tips

### Add New Research Domain

1. Edit `config.yaml`
2. Add keywords under a new topic
3. Run `python daily_arxiv.py`
4. Papers will appear in a new section

### Modify Theme

Edit `docs/_config.yml`:

```yaml
color_scheme: dark  # or "light"
search_enabled: true
back_to_top: true
```

### Custom Styling

Add CSS to `docs/_layouts/papers.html` or create custom styles in `docs/assets/css/custom.css`

## 🐛 Troubleshooting

### No Papers Found

**Problem**: Script runs but finds no papers

**Solution**:
- Check internet connection
- Increase `max_results` in config.yaml
- Verify keywords are not too specific
- Try broader search terms

### Unicode Errors

**Problem**: `UnicodeEncodeError` when writing files

**Solution**: Already fixed! All file operations use UTF-8 encoding

### SSL Errors

**Problem**: SSL errors when fetching code links

**Solution**: Already handled! Script continues even if code link fetch fails

### GitHub Actions Not Running

**Problem**: Workflow doesn't execute

**Solution**:
- Check Actions tab for errors
- Verify workflow permissions (Settings → Actions)
- Ensure workflows are enabled
- Check cron syntax is correct

## 📊 Performance Optimization

### For Large Datasets

```yaml
max_results: 10  # Reduce for faster execution
```

### For Specific Topics Only

Comment out topics in `config.yaml`:

```yaml
keywords:
    # "Topic to skip":
    #     filters: ["..."]
    "Active Topic":
        filters: ["keyword 1", "keyword 2"]
```

### Caching Strategy

The project uses JSON files to cache results. To clear cache:

```bash
rm docs/*.json
python daily_arxiv.py
```

## 📚 Additional Resources

- [Configuration Reference](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/blob/main/docs/README.md)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Just the Docs Theme](https://just-the-docs.github.io/just-the-docs/)

---

Need more help? [Open an issue](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/issues) or [discuss](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/discussions).
