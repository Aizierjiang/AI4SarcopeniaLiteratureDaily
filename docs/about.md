---
layout: default
title: About
nav_order: 2
description: "About AI4Sarcopenia Literature Daily - A Dynamic Literature Review System"
permalink: /about
---

# About This Project

## 🎯 Purpose

**AI4Sarcopenia Literature Daily** is a dynamic literature review system that automatically monitors and organizes the latest research papers in AI-driven body shape analysis for sarcopenia. This project accompanies the academic paper:

> **"Literature Review of AI-Driven Body Shape Analysis for Sarcopenia"**  
> Aizierjiang Aierislan, James Hahn  
> Institute for Innovation in Health Computing, The George Washington University

Unlike traditional static literature reviews, this system transforms the survey into a **living document** that automatically updates and expands its corpus of cited works daily as new relevant publications emerge.

## 📄 Abstract

Sarcopenia, a progressive skeletal muscle disorder contributing to frailty, disability, and mortality in aging populations, has become a growing focus of artificial intelligence (AI) research for improved diagnosis and assessment. This systematic review evaluates AI-driven body shape analysis for sarcopenia, encompassing both medical imaging-based body composition assessment and emerging 3D body surface scanning technologies.

By analyzing 962 studies from diverse scholarly databases (January 2015 onwards), our search strategy included terms spanning:
- **Medical imaging**: CT, MRI, DXA, ultrasound
- **3D body shape analysis**: morphometry, computer graphics
- **AI/ML methods**: deep learning, machine learning, computer vision

## 🔄 How It Works

1. **Automated Fetching**: GitHub Actions runs every 24 hours to fetch new papers from arXiv
2. **Smart Categorization**: Papers are organized into 12 sarcopenia-focused research domains
3. **Code Links**: Automatically finds associated GitHub repositories via Papers with Code
4. **Web Display**: Beautiful, searchable interface with sidebar navigation

## 📊 Research Coverage

We track papers across these key research areas based on the systematic search strategy:

### Application Keywords (K_A)
- sarcopenia, sarcopenic, sarcopenia obesity

### Technology Keywords (K_T)
- machine learning, deep learning, AI
- computer vision, computer graphics
- 3D body, morphometry, body shape

### Purpose Keywords (K_P)
- diagnos*, detect*, assess*, predict*, treat*

### 12 Research Domains
1. **Sarcopenia AI Detection** - Core sarcopenia detection and diagnosis
2. **CT Body Composition** - L3 vertebral level analysis, skeletal muscle index
3. **MRI Body Composition** - Muscle analysis and fat quantification
4. **DXA & BIA Analysis** - Appendicular lean mass, bioelectrical impedance
5. **Ultrasound Muscle Assessment** - Point-of-care muscle assessment
6. **Deep Learning Segmentation** - U-Net, CNN for medical imaging
7. **3D Body Shape Analysis** - Emerging area: optical body scanning, morphometry
8. **ML Risk Prediction** - Random Forest, XGBoost for sarcopenia prediction
9. **Wearables & mHealth** - Gait analysis, smartphone screening, SARC-F
10. **Explainable AI Healthcare** - XAI, SHAP, interpretable models
11. **Aging & Muscle Health** - EWGSOP/AWGS criteria, geriatric frailty
12. **Cancer & Cachexia** - Oncology sarcopenia, chemotherapy body composition

## 🚀 Features

### Automatic Updates
- Updates every 24 hours via GitHub Actions
- Fetches latest papers from arXiv API
- Updates code repository links weekly

### Smart Organization
- 12 specialized sarcopenia research categories
- 100+ carefully curated keywords from systematic review
- Relevance-based filtering

### User-Friendly Interface
- Searchable paper database
- Sidebar navigation for easy browsing
- Responsive design for mobile/desktop

### Open Source
- Fully customizable configuration
- Easy to fork and adapt
- Documented codebase

## 🛠️ Technology Stack

- **Backend**: Python, arXiv API
- **Frontend**: Jekyll, GitHub Pages
- **Theme**: Just the Docs (customized)
- **Automation**: GitHub Actions
- **Deployment**: GitHub Pages

## 📈 Statistics

- **12** Sarcopenia-focused Research Domains
- **100+** Curated Keywords
- **Daily** Updates
- **15** Papers per topic (configurable)

## 📖 Key References

The methodology follows standards from:
- **EWGSOP2**: European Working Group on Sarcopenia in Older People
- **AWGS 2019**: Asian Working Group for Sarcopenia
- **CASP**: Critical Appraisal Skills Programme
- **AMSTAR 2**: Assessment of Multiple Systematic Reviews

## 🤝 Contributing

Contributions are welcome! Ways to contribute:

1. **Add Keywords**: Suggest new research topics
2. **Improve Filters**: Refine search queries  
3. **Report Issues**: Found a bug? Let us know
4. **Documentation**: Help improve guides

## 📄 License

This project is provided for research and educational purposes, under MIT license.

## 🙏 Acknowledgments

- [arXiv](https://arxiv.org/) for open access to research
- [Papers with Code](https://paperswithcode.com/) for code links
- [Just the Docs](https://just-the-docs.github.io/just-the-docs/) theme
- Institute for Innovation in Health Computing, GWU

## 📧 Contact

- **Authors**: Aizierjiang Aierislan
- **Institution**: Institute for Innovation in Health Computing, The George Washington University
- **Email**: mysoft@111.com
- **GitHub**: [@aizierjiang](https://github.com/aizierjiang)
- **Issues**: [Report here](https://github.com/aizierjiang/lr4sarcopenia/issues)

---

Last updated: {{ "now" | date: "%Y-%m-%d" }}
