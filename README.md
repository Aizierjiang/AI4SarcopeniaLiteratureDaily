# 🦴 AI4Sarcopenia Literature Daily

[![Daily Update](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/workflows/Run%20Sarcopenia%20Arxiv%20Papers%20Daily/badge.svg)](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/actions)
[![License](https://img.shields.io/github/license/aizierjiang/AI4SarcopeniaLiteratureDaily)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/aizierjiang/AI4SarcopeniaLiteratureDaily)](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/commits/main)

> **A Dynamic Literature Review: Automatically tracking the latest research in AI-Driven Body Shape Analysis for Sarcopenia**

📊 **12 Research Domains** | 🔄 **Daily Updates** | 🤖 **Fully Automated** | 🌐 **[Live Website](https://aizierjiang.github.io/AI4SarcopeniaLiteratureDaily/)**

---

## 📄 Academic Paper

This repository accompanies the paper:

> **"Literature Review of AI-Driven Body Shape Analysis for Sarcopenia"**  
> Aizierjiang Aierislan, James Hahn  
> Institute for Innovation in Health Computing, The George Washington University

**Abstract**: Sarcopenia, a progressive skeletal muscle disorder contributing to frailty, disability, and mortality in aging populations, has become a growing focus of artificial intelligence (AI) research for improved diagnosis and assessment. This systematic review evaluates AI-driven body shape analysis for sarcopenia, encompassing both medical imaging-based body composition assessment and emerging 3D body surface scanning technologies.

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🎓 Usage](#-usage)
- [⚙️ Configuration](#️-configuration)
- [🌐 Deployment](#-deployment)
- [📚 Research Domains](#-research-domains)
- [🛠️ Troubleshooting](#️-troubleshooting)
- [🤝 Contributing](#-contributing)

---

## 🎯 About

**AI4Sarcopenia Literature Daily** is an automated research paper tracking system that transforms traditional static literature reviews into dynamic, continuously updated resources. This system:

- 📰 **Fetches** latest sarcopenia and body composition papers from arXiv every 24 hours
- 🎯 **Filters** by sarcopenia-specific keywords across 12 research domains
- 🔗 **Links** to code repositories when available
- 📊 **Organizes** papers by research domain
- 🌐 **Publishes** to a searchable website

Perfect for researchers, clinicians, and AI enthusiasts focused on:
- **Sarcopenia detection and diagnosis** using AI/ML methods
- **Medical imaging** (CT, MRI, DXA, Ultrasound) for body composition
- **3D body shape analysis** and morphometry
- **Deep learning segmentation** for muscle quantification
- **Wearable sensors and mHealth** for sarcopenia screening
- **Explainable AI (XAI)** for clinical decision support
- **Geriatric and aging research**

**Keywords**: sarcopenia, body shape analysis, medical imaging, deep learning, muscle segmentation, 3D body scanning, machine learning, AI in healthcare

**Last Updated**: Auto-generated daily at 9:00 AM UTC

---

## ✨ Features

### 🤖 Fully Automated
- ✅ Daily arXiv paper fetching via GitHub Actions
- ✅ Automatic commit and website deployment
- ✅ Weekly code repository link updates
- ✅ Zero manual intervention required

### 🎨 Beautiful Web Interface
- ✅ Modern Jekyll theme with search
- ✅ Mobile-responsive design
- ✅ Dark/light mode support
- ✅ Sidebar navigation by domain
- ✅ Quick stats dashboard

### 🔍 Smart Organization
- ✅ 12 sarcopenia-focused research domains
- ✅ 100+ curated research keywords from systematic review
- ✅ Automatic categorization
- ✅ Code repository detection
- ✅ JSON data export

### ⚡ Easy Customization
- ✅ Simple YAML configuration
- ✅ Add your own topics/keywords
- ✅ Adjustable paper count
- ✅ Configurable update schedule
- ✅ Interactive local testing

---

## 🚀 Quick Start

### Prerequisites
- Python 3.7+
- pip
- Git (for GitHub deployment)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily.git
cd AI4SarcopeniaLiteratureDaily

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run interactive test
python test_local.py
# Choose option 1 for quick test

# 4. Check results
cat README.md
```

That's it! The script will fetch papers and generate the paper list.

---

## 🎓 Usage

### Local Testing

#### Interactive Mode (Recommended)
```bash
python test_local.py
```

**Options:**
1. **Quick test** - 2 topics, 5 papers (30 seconds)
2. **Full test** - All 12 topics (2-5 minutes)
3. **Update links** - Refresh code repository links

#### Direct Execution
```bash
# Fetch all papers
python daily_arxiv.py

# Update code links only
python daily_arxiv.py --update_paper_links
```

### Generated Files
- `README.md` - Main paper list (table format)
- `docs/index.md` - Web-friendly version
- `docs/sarcopenia-arxiv-daily.json` - Complete data
- `docs/sarcopenia-arxiv-daily-web.json` - Web-optimized data

---

## ⚙️ Configuration

### Basic Settings

Edit `config.yaml`:

```yaml
# How many papers per topic
max_results: 15

# Your GitHub info (for deployment)
user_name: "aizierjiang"
repo_name: "AI4SarcopeniaLiteratureDaily"

# Base directory (usually /docs for GitHub Pages)
base_url: "https://aizierjiang.github.io/AI4SarcopeniaLiteratureDaily/"
```

### Adding Research Topics

Based on the systematic search strategy from our paper (Table 1):
- **Application Keywords (K_A)**: sarcopenia, sarcopenic, sarcopenia obesity
- **Technology Keywords (K_T)**: machine learning, deep learning, AI, computer vision, 3D body, morphometry
- **Purpose Keywords (K_P)**: diagnos*, detect*, assess*, predict*, treat*

```yaml
keywords:
    "Your Topic Name":
        filters: ["keyword 1", "keyword 2", "multi word phrase"]
```

**Example:**

```yaml
keywords:
    "Sarcopenia Screening":
        filters: 
            - "sarcopenia screening"
            - "SARC-F"
            - "muscle mass screening"
            - "community sarcopenia"
            - "primary care sarcopenia"
```

### Adjusting Paper Count

- **5-10**: Focused, high-quality (faster)
- **15-20**: Balanced (recommended)
- **20+**: Comprehensive (may include tangential)

### Update Schedule

Edit `.github/workflows/sarcopenia-arxiv-daily.yml`:

```yaml
schedule:
  - cron: "0 9 * * *"  # Daily at 9 AM UTC
```

Change to:
- `"0 */12 * * *"` - Every 12 hours
- `"0 0 */2 * *"` - Every 2 days
- `"0 0 * * 1,4"` - Monday & Thursday

Use [crontab.guru](https://crontab.guru/) for custom schedules.

---

## 🌐 Deployment

### GitHub Pages (Recommended)

#### 1. Fork or Create Repository
```bash
git add .
git commit -m "Initial commit: AI4Sarcopenia Literature Daily"
git push origin main
```

#### 2. Update Configuration

**Edit `.github/workflows/sarcopenia-arxiv-daily.yml`:**
```yaml
env:
  GITHUB_USER_NAME: aizierjiang  # Change this
  GITHUB_USER_EMAIL: mysoft@111.com
```

**Edit `config.yaml`:**
```yaml
user_name: "aizierjiang"  # Change this
```

#### 3. Enable GitHub Actions
1. Settings → Actions → General
2. Workflow permissions: **Read and write**
3. Save

#### 4. Enable GitHub Pages
1. Settings → Pages
2. Source: **Deploy from branch**
3. Branch: `main`, Folder: `/docs`
4. Save

#### 5. Trigger First Run
1. Actions tab
2. "Run Sarcopenia Arxiv Papers Daily"
3. "Run workflow"

Your site: `https://aizierjiang.github.io/AI4SarcopeniaLiteratureDaily/`

---

## 📚 Research Domains

Current tracking covers 12 sarcopenia-focused research domains based on the systematic literature review:

<details>
<summary><strong>🎯 Sarcopenia AI Detection</strong></summary>

- Sarcopenia detection and diagnosis
- Sarcopenia prediction and assessment
- Sarcopenic obesity
- Machine learning for sarcopenia
- Muscle wasting detection
</details>

<details>
<summary><strong>🖼️ CT Body Composition</strong></summary>

- CT body composition analysis
- CT muscle segmentation
- L3 vertebral level assessment
- Skeletal muscle index (SMI)
- Opportunistic CT screening
- Automated muscle segmentation
</details>

<details>
<summary><strong>🧲 MRI Body Composition</strong></summary>

- MRI body composition
- MRI muscle analysis
- MRI fat quantification
- Dixon imaging
- Muscle MRI segmentation
</details>

<details>
<summary><strong>📊 DXA & BIA Analysis</strong></summary>

- Dual-energy X-ray absorptiometry (DXA)
- Appendicular lean mass (ALM/ALMI)
- Bioelectrical impedance analysis (BIA)
- Body composition assessment
</details>

<details>
<summary><strong>🔊 Ultrasound Muscle Assessment</strong></summary>

- Ultrasound muscle assessment
- Muscle thickness measurement
- Rectus femoris ultrasound
- Muscle echogenicity
- Point-of-care ultrasound
</details>

<details>
<summary><strong>🧠 Deep Learning Segmentation</strong></summary>

- U-Net medical segmentation
- CNN for medical imaging
- Deep learning body composition
- Neural network muscle segmentation
- Radiomics and machine learning
</details>

<details>
<summary><strong>📐 3D Body Shape Analysis</strong></summary>

- 3D body scanning
- 3D body shape analysis
- Body surface scanning
- Optical body scanner
- 3D anthropometry
- Body morphometry
- Point cloud body analysis
</details>

<details>
<summary><strong>📈 ML Risk Prediction</strong></summary>

- Sarcopenia risk prediction
- Random Forest for sarcopenia
- XGBoost body composition
- Feature selection for sarcopenia
- Clinical prediction models
</details>

<details>
<summary><strong>📱 Wearables & mHealth</strong></summary>

- Wearable sarcopenia assessment
- Gait analysis for sarcopenia
- Smartphone sarcopenia screening
- SARC-F screening tool
- Physical performance assessment
- Grip strength prediction
</details>

<details>
<summary><strong>💡 Explainable AI Healthcare</strong></summary>

- Explainable AI (XAI) in healthcare
- SHAP for medical AI
- Interpretable machine learning
- Clinical decision support
- Trustworthy AI in healthcare
</details>

<details>
<summary><strong>👴 Aging & Muscle Health</strong></summary>

- Aging and muscle mass
- Elderly sarcopenia
- Geriatric frailty
- EWGSOP/EWGSOP2 criteria
- AWGS 2019 guidelines
- Age-related muscle loss
</details>

<details>
<summary><strong>🏥 Cancer & Cachexia</strong></summary>

- Cancer cachexia
- Oncology sarcopenia
- Chemotherapy body composition
- Cancer muscle wasting
- Surgical sarcopenia
- Preoperative body composition
</details>

---

## 🛠️ Troubleshooting

### Installation Issues

**"Import arxiv could not be resolved"**
```bash
pip install arxiv requests pyyaml
```

**"Python not found"**
```bash
# Install Python 3.7+ from python.org
# Verify: python --version
```

### Paper Fetching Issues

**"No papers found"**
- Check internet connection
- Increase `max_results` in config.yaml (try 20)
- Use broader keywords

**"Papers not relevant"**
- Edit config.yaml keywords
- Add specific domain terms: "clinical", "medical", "healthcare"
- Review and refine filters

**"SSL/Connection errors"**
- Handled gracefully with warnings
- Papers save even if code link fetch fails
- Check firewall/proxy settings if persistent

### GitHub Actions Issues

**"Workflow not running"**
1. Enable Actions (Settings → Actions)
2. Grant write permissions
3. Check YAML syntax
4. View Actions tab for errors

**"Permission denied"**
- Settings → Actions → General
- Workflow permissions: **Read and write**

**"Website not updating"**
- Wait 2-5 minutes after Action completes
- Check Pages settings (should show "Active")
- Clear browser cache

### Data Quality Issues

**"Too many irrelevant papers"**
- Reduce `max_results` (try 10)
- Use more specific keywords
- Add negative filters (if needed)

**"Missing important papers"**
- Increase `max_results` (try 20-25)
- Add broader synonym keywords
- Check arXiv categories are correct

---

## 🤝 Contributing

We welcome contributions! Here's how:

### Adding Keywords

1. Fork the repository
2. Edit `config.yaml`
3. Test locally: `python test_local.py`
4. Submit pull request

### Reporting Issues

Found a bug? [Open an issue](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/issues) with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Error messages (if any)

### Suggesting Features

Have an idea? [Start a discussion](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/discussions) about:
- New research domains
- UI improvements
- Additional features
- Integration ideas

---

## 📊 Statistics

- **Research Domains**: 12 sarcopenia-focused categories
- **Keywords**: 100+ (based on systematic literature review)
- **Papers per Day**: ~30-60 (varies by research activity)
- **Update Frequency**: Every 24 hours
- **Auto-update Schedule**: 9:00 AM UTC
- **Link Updates**: Weekly (Mondays)
- **Publication Period**: January 2015 onwards

---

## 📞 Support

- 📖 **Documentation**: See files in this repo
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily/discussions)
- 📧 **Email**: mysoft@111.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file.

---

## 🙏 Acknowledgments

- arXiv API for paper access
- Papers with Code for repository links
- GitHub Actions for automation
- Jekyll and Just the Docs theme
- Institute for Innovation in Health Computing, GWU

---

## 🔗 Links

- 🌐 **Live Website**: https://aizierjiang.github.io/AI4SarcopeniaLiteratureDaily/
- 📦 **GitHub Repo**: https://github.com/aizierjiang/AI4SarcopeniaLiteratureDaily
- 📊 **JSON Data**: [sarcopenia-arxiv-daily.json](docs/sarcopenia-arxiv-daily.json)
- 📘 **Detailed Usage**: [docs/README.md](docs/README.md)
- 📄 **Academic Paper**: "Literature Review of AI-Driven Body Shape Analysis for Sarcopenia"

---

## 📖 Citation

If you use this dynamic literature review system in your research, please cite:

<!-- ```bibtex
@article{aierislan2025sarcopenia,
  title={Literature Review of AI-Driven Body Shape Analysis for Sarcopenia},
  author={Aierislan, Aizierjiang and Hahn, James},
  journal={},
  year={2025},
  institution={Institute for Innovation in Health Computing, The George Washington University}
}
```

or -->


```bibtex
@article{aiersilan2025literature,
  title={Literature Review of AI-Driven Body Shape Analysis for Sarcopenia},
  author={Aizierjiang Aiersilan, James Hahn},
  journal={arXiv:COMING_SOON},
  year={2025},
}
```



---

<div align="center">

## 🎉 Stay Updated with Sarcopenia Research!

**A dynamic literature review that grows with the field**

Made with ❤️ at the Institute for Innovation in Health Computing, GWU

</div>

---
