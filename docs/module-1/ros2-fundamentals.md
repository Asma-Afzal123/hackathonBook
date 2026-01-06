---
title: ROS 2 Fundamentals
sidebar_label: Fundamentals
description: Introduction to ROS 2 architecture and core concepts
---

# ROS 2 Fundamentals

## Introduction to ROS 2

ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

ROS 2 is designed to be the "nervous system" of robots, providing the infrastructure for different components of a robot to communicate with each other reliably and efficiently.

## The Role of ROS 2 in Physical AI

ROS 2 serves as the middleware connecting AI agents to humanoid robots. It provides a standardized way for different software components to communicate, regardless of the programming language they're written in or the hardware platform they're running on.

In the context of Physical AI, ROS 2 enables:
- Decoupling of AI decision-making from robot hardware control
- Standardized interfaces for robot sensors and actuators
- Reliable communication between distributed components
- Tools for debugging, visualization, and simulation

## Core Concepts: Nodes, Topics, and Services

### Nodes

A **Node** is a process that performs computation. In ROS 2, nodes are the fundamental building blocks of a distributed computation graph. Each node is designed to perform a specific task and communicate with other nodes to achieve more complex behaviors.

Nodes in ROS 2:
- Are lightweight processes that can be run independently
- Communicate with other nodes through topics, services, or actions
- Can be written in different programming languages (C++, Python, etc.)
- Are managed by the ROS 2 execution model

### Topics

A **Topic** is a named bus over which nodes exchange messages. Topic-based communication is asynchronous and follows a publish/subscribe model:

- Publishers send messages to a topic
- Subscribers receive messages from a topic
- Multiple publishers and subscribers can exist for the same topic
- Communication is decoupled in time (publishers and subscribers don't need to run simultaneously)

Topics are ideal for streaming data like sensor readings, robot state, or continuous control commands.

### Services

A **Service** provides a request/reply communication pattern. Unlike topics, services are synchronous:

- A client sends a request to a service
- A server processes the request and sends back a response
- The client waits for the response before continuing
- Services are good for tasks that have a clear input/output relationship

Services are ideal for operations that need a response, like changing robot parameters, executing a specific action, or requesting a computation result.

## Summary

ROS 2 fundamentals provide the foundation for understanding how AI agents can interface with robotic systems. The node-based architecture with topics for streaming data and services for request/response interactions creates a flexible and robust framework for robot software development.

In the next section, we'll explore how these concepts work together in more complex communication patterns.