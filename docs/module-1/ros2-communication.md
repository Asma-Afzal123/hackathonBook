---
title: ROS 2 Communication Patterns
sidebar_label: Communication
description: Understanding Topics vs Services vs Actions and Python agent control
---

# ROS 2 Communication Patterns

## Overview of Communication Patterns

ROS 2 provides three primary communication patterns for different types of interactions between nodes:

1. **Topics** - For streaming data using publish/subscribe model
2. **Services** - For request/response interactions
3. **Actions** - For goal-oriented tasks with feedback

Understanding when to use each pattern is crucial for effective robot software design.

## Topics: Publish/Subscribe Communication

Topics implement a **publish/subscribe** model where:

- Publishers send messages to a topic
- Subscribers receive messages from a topic
- Communication is **asynchronous** and **one-way**
- Multiple publishers and subscribers can exist for the same topic
- Publishers and subscribers are **decoupled in time** (don't need to run simultaneously)

### When to Use Topics

Topics are ideal for:
- Streaming sensor data (camera images, LIDAR scans, IMU readings)
- Broadcasting robot state information
- Continuous control commands (velocity commands to base controller)
- Event notifications

### Example Python Code for Topics

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello World: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Services: Request/Response Communication

Services implement a **request/response** model where:

- A client sends a request to a service
- A server processes the request and sends back a response
- Communication is **synchronous**
- Client waits for the response before continuing
- Provides **acknowledgment** that the request was processed

### When to Use Services

Services are ideal for:
- Changing robot parameters
- Executing specific actions with clear outcomes
- Requesting computations (e.g., path planning)
- Configuration changes

### Example Python Code for Services

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MinimalService(Node):
    def __init__(self):
        super().__init__('minimal_service')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Returning: {response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    minimal_service = MinimalService()
    rclpy.spin(minimal_service)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Actions: Goal-Oriented Communication

Actions implement **goal-oriented** communication with:

- Goal: Request to perform a long-running task
- Feedback: Updates on task progress
- Result: Final outcome of the task
- Ability to **cancel** ongoing tasks
- **Asynchronous** operation with **synchronous** goal management

### When to Use Actions

Actions are ideal for:
- Navigation tasks (moving to a specific location)
- Manipulation tasks (grasping an object)
- Calibration procedures
- Any long-running task that needs progress feedback

### Example Python Code for Actions

```python
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node
from example_interfaces.action import Fibonacci

class FibonacciActionServer(Node):
    def __init__(self):
        super().__init__('fibonacci_action_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback)

    def execute_callback(self, goal_handle):
        self.get_logger().info('Executing goal...')
        feedback_msg = Fibonacci.Feedback()
        feedback_msg.sequence = [0, 1]

        for i in range(1, goal_handle.request.order):
            if goal_handle.is_cancel_requested:
                goal_handle.canceled()
                self.get_logger().info('Goal canceled')
                return Fibonacci.Result()

            feedback_msg.sequence.append(
                feedback_msg.sequence[i] + feedback_msg.sequence[i-1])
            goal_handle.publish_feedback(feedback_msg)
            time.sleep(1)

        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = feedback_msg.sequence
        self.get_logger().info(f'Result: {result.sequence}')
        return result

def main(args=None):
    rclpy.init(args=args)
    fibonacci_action_server = FibonacciActionServer()
    rclpy.spin(fibonacci_action_server)
    fibonacci_action_server.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Python Agents and Robot Control via rclpy

Python agents interact with robots through ROS 2 using the `rclpy` library, which provides Python bindings for the ROS 2 client library.

### Key Components of rclpy

1. **Node**: The basic execution unit
2. **Publisher**: For sending messages on topics
3. **Subscriber**: For receiving messages from topics
4. **Service Client**: For calling services
5. **Service Server**: For providing services
6. **Action Client**: For sending action goals
7. **Action Server**: For executing actions

### Agent-to-Robot Communication Pattern

Python agents typically:
1. Subscribe to sensor topics to perceive the environment
2. Use services for specific robot commands or queries
3. Use actions for complex, long-running tasks
4. Publish control commands to actuator topics

This architecture allows AI agents to control robots through standardized interfaces while maintaining the flexibility to change underlying implementations.

## Summary

Understanding these communication patterns is essential for designing effective robot software architectures. The choice of communication pattern significantly impacts system design, performance, and maintainability. Topics are best for streaming data, services for request/response interactions, and actions for goal-oriented tasks with feedback.