---
title: URDF Modeling for Humanoid Robots
sidebar_label: URDF Modeling
description: Understanding links, joints, and kinematic chains in robot modeling
---

# URDF Modeling for Humanoid Robots

## Introduction to URDF

URDF (Unified Robot Description Format) is an XML-based format used in ROS to describe robot models. It defines the physical and visual properties of a robot, including its structure, joints, and how different parts move relative to each other.

URDF is fundamental to robotics because it allows:
- Simulation of robot kinematics and dynamics
- Visualization of robot models
- Integration with ROS tools like RViz
- Definition of robot kinematic chains for motion planning

## Core URDF Concepts: Links, Joints, and Kinematic Chains

### Links

A **Link** in URDF represents a **rigid body** part of the robot. Each link has:

- **Visual properties**: How the link appears (geometry, material, color)
- **Collision properties**: How the link interacts with other objects (for physics simulation)
- **Inertial properties**: Mass, center of mass, and inertia tensor (for dynamics simulation)

#### Example Link Definition

```xml
<link name="base_link">
  <visual>
    <geometry>
      <cylinder length="0.6" radius="0.2"/>
    </geometry>
    <material name="blue">
      <color rgba="0 0 .8 1"/>
    </material>
  </visual>
  <collision>
    <geometry>
      <cylinder length="0.6" radius="0.2"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="10"/>
    <origin xyz="0 0 0"/>
    <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
  </inertial>
</link>
```

### Joints

A **Joint** defines the **connection** between two links and specifies how they can move relative to each other. The main joint types are:

- **Fixed**: No movement (rigid connection)
- **Revolute**: Rotational movement around a single axis (like a hinge)
- **Continuous**: Like revolute but unlimited rotation
- **Prismatic**: Linear sliding movement along a single axis
- **Floating**: 6 degrees of freedom (3 translation + 3 rotation)
- **Planar**: Movement on a plane

#### Example Joint Definition

```xml
<joint name="base_to_wheel" type="continuous">
  <parent link="base_link"/>
  <child link="wheel_link"/>
  <origin xyz="0.1 0.2 0.3" rpy="0 0 1.5708"/>
  <axis xyz="0 0 1"/>
</joint>
```

### Kinematic Chains

A **Kinematic Chain** is a sequence of links connected by joints that define how parts of the robot move relative to each other. In humanoid robots, kinematic chains represent:

- **Arms**: Shoulder → Elbow → Wrist → Hand
- **Legs**: Hip → Knee → Ankle → Foot
- **Spine**: Multiple vertebrae connections
- **Head/Neck**: Head movement relative to torso

Kinematic chains enable:
- Forward kinematics: Calculate end-effector position from joint angles
- Inverse kinematics: Calculate joint angles to achieve desired end-effector position

## URDF in Humanoid Robot Design

### Humanoid Robot Structure

Humanoid robots typically have the following structure:

```
base_footprint (virtual link)
└── base_link (torso)
    ├── head
    │   └── camera
    ├── left_upper_leg
    │   ├── left_lower_leg
    │   └── left_foot
    ├── right_upper_leg
    │   ├── right_lower_leg
    │   └── right_foot
    ├── left_upper_arm
    │   ├── left_lower_arm
    │   └── left_hand
    └── right_upper_arm
        ├── right_lower_arm
        └── right_hand
```

### URDF for Humanoid Control

URDF models integrate with ROS 2 control through:

1. **Robot State Publisher**: Publishes joint states and transforms
2. **TF2**: Provides coordinate transforms between links
3. **Controllers**: Map control commands to joint movements
4. **Motion Planning**: Uses kinematic models for trajectory planning

## URDF Integration with ROS 2 Control

### Robot State Publisher

The robot_state_publisher node takes joint positions and the URDF model to publish the TF tree, which describes the position and orientation of each link relative to others.

### Joint State Publisher

For simulation, the joint_state_publisher provides default joint positions to visualize the robot model.

### Control Interfaces

URDF models connect to actual robot control through:

- **Hardware interfaces**: Mapping between URDF joints and real robot actuators
- **Joint state messages**: Feedback from real sensors
- **Effort/velocity/position commands**: Control signals to robot actuators

## Example: Simple Humanoid Arm in URDF

```xml
<?xml version="1.0"?>
<robot name="simple_arm">
  <!-- Base link -->
  <link name="torso">
    <visual>
      <geometry>
        <box size="0.3 0.3 0.6"/>
      </geometry>
      <material name="gray">
        <color rgba="0.5 0.5 0.5 1"/>
      </material>
    </visual>
  </link>

  <!-- Shoulder joint -->
  <joint name="shoulder_pitch" type="revolute">
    <parent link="torso"/>
    <child link="upper_arm"/>
    <origin xyz="0.0 0.2 0.3" rpy="0 0 0"/>
    <axis xyz="1 0 0"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  </joint>

  <!-- Upper arm link -->
  <link name="upper_arm">
    <visual>
      <geometry>
        <cylinder length="0.4" radius="0.05"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1"/>
      </material>
    </visual>
  </link>

  <!-- Elbow joint -->
  <joint name="elbow_pitch" type="revolute">
    <parent link="upper_arm"/>
    <child link="lower_arm"/>
    <origin xyz="0.0 0.0 -0.4" rpy="0 0 0"/>
    <axis xyz="1 0 0"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  </joint>

  <!-- Lower arm link -->
  <link name="lower_arm">
    <visual>
      <geometry>
        <cylinder length="0.35" radius="0.04"/>
      </geometry>
      <material name="green">
        <color rgba="0 1 0 1"/>
      </material>
    </visual>
  </link>
</robot>
```

## Summary

URDF is the standard for describing robot models in ROS and is essential for humanoid robot development. Understanding links, joints, and kinematic chains allows developers to create accurate robot models that can be used for simulation, visualization, and control. The integration between URDF models and ROS 2 control systems enables seamless transition from simulation to real robot deployment.