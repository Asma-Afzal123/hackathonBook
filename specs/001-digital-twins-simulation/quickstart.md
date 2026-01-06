# Quickstart: Digital Twins & Physics Simulation Module Development

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

## Setup Instructions

### 1. Navigate to the existing Docusaurus project
```bash
cd /path/to/your/ai-book-project
```

### 2. Create Module 2 Directory Structure
```bash
mkdir -p docs/module-2
```

### 3. Create Module 2 Content Files
```bash
touch docs/module-2/index.md
touch docs/module-2/digital-twins-physics.md
touch docs/module-2/simulation-environments.md
touch docs/module-2/sensor-simulation.md
```

### 4. Update Sidebar Navigation
Edit `sidebars.js` to include the new module:

```javascript
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1/index',
        'module-1/ros2-fundamentals',
        'module-1/ros2-communication',
        'module-1/urdf-modeling',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twins & Physics Simulation',
      items: [
        'module-2/index',
        'module-2/digital-twins-physics',
        'module-2/simulation-environments',
        'module-2/sensor-simulation',
      ],
    },
  ],
};
```

### 5. Update Docusaurus Configuration
Ensure `docusaurus.config.js` is properly configured to support the new module.

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
title: Digital Twins & Physics Simulation
sidebar_label: Digital Twins
description: Understanding digital twins and physics simulation for humanoid robots
---
```

## Building and Deployment
```bash
npm run build
```

The built site will be in the `build/` directory and ready for deployment to GitHub Pages.