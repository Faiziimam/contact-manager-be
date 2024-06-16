# Contact and User Management API

This project is a simple Contact and User Management API built using Node.js and Express. It allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts and manage user authentication.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

### Contacts
- Get all contacts
- Create a new contact
- Get a single contact by ID
- Update a contact by ID
- Delete a contact by ID

### Users
- Register a new user
- Login a user
- Get current user details

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/contact-and-user-management-api.git
    cd contact-and-user-management-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up your MongoDB database and configure the connection string and JWT secret key in a `.env` file:

    ```env
    CONNECTION_STRING=your_mongo_db_connection_string
    ACCESS_TOKEN_SECRET_KEY=your_secret_key
    ```

4. Start the server:

    ```sh
    npm start
    ```

## Usage

### Running the Server

After installing the dependencies and setting up the database connection, start the server using:

```sh
npm start
