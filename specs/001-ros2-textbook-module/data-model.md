# Data Model: ROS 2 Textbook Module

## Key Entities from Specification

### ROS 2 Architecture
- **Description**: The middleware framework connecting AI agents to humanoid robots
- **Components**:
  - Nodes: Individual processes that communicate with each other
  - Topics: Named buses over which nodes exchange messages
  - Services: Synchronous request/response communication pattern
- **Relationships**: Forms the foundational communication infrastructure for robot systems

### Communication Patterns
- **Description**: Different methods for data exchange in ROS 2
- **Types**:
  - Topics: Unidirectional streaming data (publish/subscribe)
  - Services: Bidirectional request/response communication
  - Actions: Goal-oriented communication with feedback and status
- **Relationships**: Defines how AI agents interact with robot systems

### URDF Model
- **Description**: XML-based format describing robot physical structure
- **Components**:
  - Links: Rigid parts of the robot structure
  - Joints: Connections between links that allow motion
  - Kinematic Chains: Sequences of links and joints that define movement relationships
- **Relationships**: Connects robot physical description to ROS 2 control systems

## Content Structure
- **Module**: Container for educational content
- **Chapter**: Individual learning units within a module
- **Concept**: Individual educational elements within chapters
- **Example**: Code or practical demonstrations supporting concepts

## Navigation Structure
- **Sidebar**: Hierarchical navigation for textbook content
- **Prev/Next**: Sequential navigation between chapters
- **Cross-links**: References between related concepts across chapters