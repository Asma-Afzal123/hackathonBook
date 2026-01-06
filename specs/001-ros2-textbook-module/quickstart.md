# Quickstart: ROS 2 Textbook Module Development

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

## Setup Instructions

### 1. Install Docusaurus
```bash
npm init docusaurus@latest my-website classic
cd my-website
```

### 2. Install Additional Dependencies
```bash
npm install
```

### 3. Create Module 1 Directory Structure
```bash
mkdir -p docs/module-1
```

### 4. Create Module 1 Content Files
```bash
touch docs/module-1/ros2-fundamentals.md
touch docs/module-1/ros2-communication.md
touch docs/module-1/urdf-modeling.md
```

### 5. Configure Sidebar Navigation
Update `sidebars.js` to include the new module:

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1/ros2-fundamentals',
        'module-1/ros2-communication',
        'module-1/urdf-modeling',
      ],
    },
  ],
};
```

### 6. Start Development Server
```bash
npm run start
```

## Content Creation Guidelines

### Writing Markdown Files
- Use H1 for page titles (only one per page)
- Use H2-H4 for section headers
- Include conceptual explanations before examples
- Keep examples minimal and focused on concepts
- Use relative links for internal navigation

### Frontmatter for Pages
Each content page should include frontmatter:

```markdown
---
title: ROS 2 Fundamentals
sidebar_label: Fundamentals
description: Introduction to ROS 2 architecture and core concepts
---
```

## Building and Deployment
```bash
npm run build
```

The built site will be in the `build/` directory and ready for deployment to GitHub Pages.