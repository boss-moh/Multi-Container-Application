# Multi-Container-Application

### Summary

This project simulates a real-world backend deployment workflow — from local development to automated production deployment — giving you hands-on experience with modern DevOps and backend engineering practices.

This project was completed under the supervision of [Fares ](https://www.linkedin.com/in/fares-k/) as part of a structured mentorship program at [WASLA Connect](https://www.waslaconnect.com/).

This repository contains my implementation of the Multi-Container Service , as outlined on the [Backend Roadmap website](https://roadmap.sh/projects/multi-container-service).

## Project Overview

The goal of this project is to build and deploy a simple **Todo API** using:

- **Node.js** with Express
- **MongoDB** as the database
- Docker & Docker Compose for containerization
- Terraform & Ansible for server provisioning
- GitHub Actions for CI/CD

---

## What the Application Does

This project is a simple, unauthenticated REST API that allows users to manage a todo list. The purpose is not just to build CRUD functionality, but to understand how backend services interact with databases inside a containerized environment.

The API provides basic operations to create, read, update, and delete todo items. Each todo is stored in a MongoDB database, and the server is built using Node.js and Express, with Mongoose handling database communication.

The API includes the following endpoints:

- `GET /todos` — Retrieve all todos
- `POST /todos` — Create a new todo
- `GET /todos/:id` — Retrieve a specific todo
- `PUT /todos/:id` — Update a specific todo
- `DELETE /todos/:id` — Delete a specific todo

All data is persisted in MongoDB, ensuring that todos remain saved even if the application restarts.

---

# 📌 Project Tasks / TODO List

You can add this section to your README:

## Development Tasks

- [x] Initialize Node.js project
- [x] Setup Express server
- [x] Create Todo model using Mongoose
- [x] Implement CRUD endpoints
- [x] Test API using Postman or curl
- [x] Add environment variables configuration

---

## Docker Tasks

- [x] Create Dockerfile for Node.js API
- [x] Configure Docker Compose
- [x] Setup MongoDB container
- [x] Configure volumes for data persistence
- [x] Test multi-container communication
- [x] Push Docker image to Docker Hub
- [x] Deploy containers on remote server
---



## CI/CD Tasks

- [x] Create GitHub Actions workflow
- [x] Automate Docker image build
- [x] Automate Docker Hub push
- [x] Automate deployment to server
- [x] Test full pipeline


