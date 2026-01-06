HEAD
# hackathonBook

# AI-Native Book: ROS 2 - The Robotic Nervous System

This educational resource explores ROS 2 as the middleware connecting AI agents to humanoid robots. It's designed for Python-literate AI/robotics students new to ROS 2.

## About This Book

This book is structured as a series of modules that progressively build understanding of ROS 2 concepts:

- **Module 1**: The Robotic Nervous System (ROS 2) - Core concepts and architecture

## Getting Started

To run the local development server:

```bash
npm run start
```

## AI Documentation Assistant

This book features an integrated AI documentation assistant powered by RAG (Retrieval-Augmented Generation). The chatbot is available on every documentation page as a floating widget (💬) that you can open to ask questions about the content.

### Features
- Ask questions about any documentation content
- Get responses grounded in the book's content
- View source references for AI answers
- Continue conversations during your session

### Configuration
To customize the AI assistant behavior, you can set these environment variables:
- `RAG_API_BASE_URL`: Base URL for the RAG backend (defaults to `http://localhost:8000`)
- `RAG_API_TIMEOUT`: Request timeout in milliseconds (defaults to `10000`)

## Navigation

- **[Home](./docs/intro.md)** - Main introduction to the book
- **[Module 1: ROS 2 Fundamentals](./docs/module-1/ros2-fundamentals.md)** - Introduction to ROS 2 architecture
- **[Module 1: ROS 2 Communication](./docs/module-1/ros2-communication.md)** - Communication patterns and Python integration
- **[Module 1: URDF Modeling](./docs/module-1/urdf-modeling.md)** - Robot modeling concepts

## Contributing

This project uses Docusaurus for documentation. All content is written in Markdown format and organized in the `docs/` directory.

## License

This educational resource is provided for learning purposes.
 4f18c5e (Initial project setup)
