---
title: Simulation Environments
sidebar_label: Simulation Environments
description: Building robot worlds in Gazebo and high-fidelity interaction in Unity
---

# Simulation Environments

## Building Robot Worlds in Gazebo

Gazebo is a powerful physics simulation environment that provides realistic simulation of robot systems and their environments. Creating effective robot worlds in Gazebo involves several key components and best practices.

### World Definition

A Gazebo world is defined using the **SDF (Simulation Description Format)**, an XML-based format that describes the entire simulation environment:

```xml
<sdf version="1.7">
  <world name="my_world">
    <!-- World properties -->
    <physics type="ode">
      <gravity>0 0 -9.8</gravity>
    </physics>

    <!-- Include models -->
    <include>
      <uri>model://ground_plane</uri>
    </include>

    <!-- Place models -->
    <model name="my_robot">
      <!-- Model definition -->
    </model>
  </world>
</sdf>
```

### Essential World Components

#### 1. **Ground Plane**
Every simulation typically needs a ground plane for robots to interact with:

```xml
<model name="ground_plane">
  <static>true</static>
  <link name="link">
    <collision name="collision">
      <geometry>
        <plane>
          <normal>0 0 1</normal>
        </plane>
      </geometry>
    </collision>
    <visual name="visual">
      <geometry>
        <plane>
          <normal>0 0 1</normal>
          <size>100 100</size>
        </plane>
      </geometry>
    </visual>
  </link>
</model>
```

#### 2. **Lighting**
Proper lighting enhances the visual experience and affects camera sensors:

```xml
<light name="sun" type="directional">
  <cast_shadows>true</cast_shadows>
  <pose>0 0 10 0 0 0</pose>
  <diffuse>0.8 0.8 0.8 1</diffuse>
  <specular>0.2 0.2 0.2 1</specular>
  <attenuation>
    <range>1000</range>
    <constant>0.9</constant>
    <linear>0.01</linear>
    <quadratic>0.001</quadratic>
  </attenuation>
  <direction>-0.6 0.4 -0.8</direction>
</light>
```

#### 3. **Environment Objects**
Creating realistic environments with obstacles, furniture, and structures:

- **Simple shapes**: Boxes, spheres, cylinders for basic obstacles
- **Complex models**: Imported CAD models for realistic objects
- **Terrain**: Height maps for outdoor environments

### Best Practices for World Building

#### 1. **Model Organization**
- Store custom models in `~/.gazebo/models/` or project-specific directories
- Use descriptive names and proper versioning
- Include thumbnails and model.config files for easy identification

#### 2. **Performance Optimization**
- Simplify collision meshes where high precision isn't needed
- Limit the number of complex physics interactions
- Use static models for environment objects that don't move

#### 3. **Realism vs. Performance**
- Balance visual fidelity with simulation speed
- Use simpler physics approximations where appropriate
- Consider the computational requirements of sensor simulation

## High-Fidelity Interaction in Unity

Unity provides high-fidelity visual and interaction simulation capabilities that complement physics-based simulators like Gazebo. Unity excels in creating photorealistic environments and complex interaction scenarios.

### Unity Robotics Simulation Pipeline

Unity's robotics simulation pipeline includes several key components:

#### 1. **Synthetic Data Generation**
Unity can generate synthetic sensor data that closely matches real-world sensors:
- Photorealistic camera images
- Accurate depth maps
- Semantic segmentation masks
- Point cloud data from virtual LiDAR

#### 2. **Physics Simulation**
While Unity's physics engine is powerful, it's often used in conjunction with specialized robotics simulators for precise robot dynamics. Unity's PhysX engine handles:
- Collision detection and response
- Rigid body dynamics
- Soft body simulation
- Fluid simulation (with extensions)

#### 3. **Perception Simulation**
Unity's rendering pipeline enables high-fidelity sensor simulation:
- Realistic camera models with lens distortion
- LiDAR simulation with configurable resolution and range
- IMU simulation with noise characteristics
- Force/torque sensor simulation

### Unity Robotics Package Integration

The Unity Robotics Package provides essential tools for robotics simulation:

#### 1. **ROS# Integration**
- Real-time communication with ROS/ROS2 systems
- Message serialization and deserialization
- Transform synchronization between Unity and ROS coordinate systems

#### 2. **Robotics Service Framework**
- Scalable simulation deployment
- Multi-agent simulation support
- Cloud deployment capabilities

#### 3. **Synthetic Data Tools**
- Automated annotation generation
- Dataset creation pipelines
- Sensor calibration tools

### Creating Realistic Robot Environments in Unity

#### 1. **Material and Lighting Systems**
Unity's physically-based rendering (PBR) system enables realistic material properties:
- Albedo maps for base color
- Normal maps for surface details
- Metallic and smoothness maps for reflection properties
- Ambient occlusion for contact shadows

#### 2. **Environmental Effects**
- Dynamic weather systems
- Time-of-day variations
- Particle systems for dust, smoke, or atmospheric effects
- Post-processing effects for camera realism

#### 3. **Interaction Systems**
- Grasping and manipulation simulation
- Haptic feedback approximation
- Multi-modal interaction (vision, touch, audio)

## Comparing Gazebo and Unity for Simulation

### Gazebo Strengths
- **Physics accuracy**: Highly accurate rigid-body physics
- **Robot ecosystem**: Extensive robot model library
- **ROS integration**: Native ROS/ROS2 support
- **Sensor simulation**: Comprehensive sensor models
- **Open source**: Community-driven development

### Unity Strengths
- **Visual fidelity**: Photorealistic rendering
- **Flexibility**: Extensive customization options
- **Performance**: Optimized for complex visual scenes
- **Asset pipeline**: Rich ecosystem of 3D assets
- **Professional tools**: Industry-standard development tools

### Choosing the Right Tool

The choice between Gazebo and Unity (or using them together) depends on your specific needs:

- **Pure physics simulation**: Gazebo is typically preferred
- **High-fidelity visuals**: Unity offers superior rendering
- **Photorealistic sensor data**: Unity provides more realistic imagery
- **Robot-specific features**: Gazebo has more robotics-specific tools
- **Custom environments**: Unity offers more creative flexibility

## Integration Strategies

Modern robotics simulation often combines multiple tools:

### 1. **Hybrid Simulation**
- Use Gazebo for physics and basic sensor simulation
- Use Unity for high-fidelity visual rendering
- Synchronize states between simulators

### 2. **Pipeline Approaches**
- Prototype in Gazebo for physics validation
- Transfer to Unity for high-fidelity testing
- Use both for different aspects of development

### 3. **Cloud-Based Simulation**
- Leverage cloud resources for large-scale simulation
- Parallel execution of multiple scenarios
- Distributed training environments

## Best Practices for Simulation Environments

### 1. **Domain Randomization**
- Vary environment parameters to improve model generalization
- Randomize lighting, textures, and object placement
- Apply noise to sensor readings to match real-world variability

### 2. **Validation and Verification**
- Compare simulation results with real-world data
- Validate physics parameters and sensor models
- Test edge cases that might reveal simulation inaccuracies

### 3. **Scalability Considerations**
- Design environments that can be instantiated multiple times
- Optimize for parallel simulation execution
- Consider cloud deployment requirements

## Summary

Creating effective simulation environments requires understanding both physics-based simulators like Gazebo and high-fidelity visual simulators like Unity. The choice of simulation platform depends on specific requirements for physics accuracy, visual fidelity, and integration with existing robotics frameworks. Modern robotics development often leverages multiple simulation tools to combine the strengths of different approaches, creating comprehensive testing and development environments for humanoid robots.

## Next Steps

Continue to the [Sensor Simulation](./sensor-simulation.md) chapter to learn about simulated sensors for AI training, or review the foundational concepts in [Digital Twins & Physics Simulation](./digital-twins-physics.md).