/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

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
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac for Advanced Perception',
      items: [
        'module-3/index',
        'module-3/isaac-sim',
        'module-3/isaac-ros',
        'module-3/nav2-humanoid',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action Systems',
      items: [
        'module-4/index',
        'module-4/voice-to-action',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
