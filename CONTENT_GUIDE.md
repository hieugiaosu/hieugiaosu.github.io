# Content Management Guide

This website uses YAML files to manage all content, making it easy for non-technical users to update information without touching the code.

## Data Files Location

All content data is stored in the `/data/` folder and copied to `/public/data/` during build. The data files are:

- `personal.yaml` - Personal information, contact details, and navigation
- `about.yaml` - About section content
- `experience.yaml` - Work experience and positions
- `research.yaml` - Research papers and publications
- `projects.yaml` - Personal and professional projects

## How to Update Content

### 1. Personal Information (`personal.yaml`)
Edit this file to update:
- Your name and title
- Contact information (email, GitHub, LinkedIn, ORCID)
- Navigation menu items

```yaml
name: "Your Name"
title: "Your Title"
# ... etc
```

### 2. About Section (`about.yaml`)
Update your personal description and background:

```yaml
about: |
  Your description here.
  
  Multiple paragraphs are supported.
```

### 3. Experience (`experience.yaml`)
Add or modify work experiences:

```yaml
experiences:
  - title: "Job Title"
    company: "Company Name"
    period: "Start Date – End Date"
    responsibilities:
      - "Responsibility 1"
      - "Responsibility 2"
    technical_skills: "Optional: Technologies used"
```

### 4. Research (`research.yaml`)
Add or update research papers:

```yaml
research:
  - title: "Paper Title"
    authors: "Author List"
    status: "Conference/Journal"
    description: "Paper description"
    demo_url: "Optional: Demo URL"
    paper_url: "Optional: Paper URL"
```

### 5. Projects (`projects.yaml`)
Add or modify projects:

```yaml
projects:
  - title: "Project Name"
    organization: "Organization"
    description: "Project description"
    project_url: "Project URL"
    link_text: "Link text (e.g., 'View Project')"
```

## After Making Changes

1. Update the files in the `/data/` folder
2. Copy the updated files to `/public/data/` by running:
   ```bash
   cp data/*.yaml public/data/
   ```
3. The website will automatically use the new content

## YAML Syntax Tips

- Use quotes around text with special characters
- Maintain proper indentation (use spaces, not tabs)
- For multi-line text, use the `|` symbol as shown in the about section
- Arrays use the `-` symbol for each item
- Be careful with colons (`:`) - they have special meaning in YAML

## Adding New Sections

To add completely new sections:
1. Create a new YAML file in `/data/`
2. Copy it to `/public/data/`
3. Update the data loader in `/src/lib/dataLoader.ts`
4. Modify the main page component to use the new data

This structure ensures that content updates can be made easily without requiring code changes.
