# Multi-Container-Application

### Summary

This project simulates a real-world backend deployment workflow — from local development to automated production deployment — giving you hands-on experience with modern DevOps and backend engineering practices.

This project was completed under the supervision of [Fares](https://www.linkedin.com/in/fares-k/) as part of a structured mentorship program at [WASLA Connect](https://www.waslaconnect.com/).

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
- [ ] Create Todo model using Mongoose
- [ ] Implement CRUD endpoints
- [ ] Test API using Postman or curl
- [ ] Add environment variables configuration

---

## Docker Tasks

- [ ] Create Dockerfile for Node.js API
- [ ] Configure Docker Compose
- [ ] Setup MongoDB container
- [ ] Configure volumes for data persistence
- [ ] Test multi-container communication

---

## Deployment Tasks

- [ ] Write Terraform configuration for server provisioning
- [ ] Create Ansible playbook for server setup
- [ ] Install Docker & Docker Compose via Ansible
- [ ] Push Docker image to Docker Hub
- [ ] Deploy containers on remote server

---

## CI/CD Tasks

- [ ] Create GitHub Actions workflow
- [ ] Automate Docker image build
- [ ] Automate Docker Hub push
- [ ] Automate deployment to server
- [ ] Test full pipeline

---

## Bonus Improvements

- [ ] Add Nginx reverse proxy
- [ ] Setup custom domain
- [ ] Add HTTPS with SSL certificate
- [ ] Add logging and monitoring
- [ ] Add basic request validation

---
