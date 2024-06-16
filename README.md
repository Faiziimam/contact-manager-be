# Contact Management API

This repository contains the code for a Contact Management API built using Node.js, Express, and MongoDB. The API allows authenticated users to manage their contacts and user accounts through various endpoints for creating, retrieving, updating, and deleting contact information as well as user registration, login, and profile retrieval.

## Features

- **Authentication**: All contact-related endpoints are protected and require the user to be authenticated.
- **User Management**: Endpoints for user registration, login, and profile retrieval.
- **CRUD Operations**: Users can create, read, update, and delete contacts.
- **Error Handling**: Proper error handling and response status codes for different scenarios.

## API Endpoints

### User Endpoints

#### Register a New User

- **Description**: Register a new user.
- **Route**: `POST /api/register`
- **Access**: Public
- **Request Body**:
  ```json
  {
    "userName": "NewUser",
    "email": "newuser@example.com",
    "password": "userpassword"
  }

-   **Response**:

    ```json

    {
      "isSuccess": true,
      "id": "user_id",
      "email": "newuser@example.com"
    }
    
#### Login a User

-   **Description**: Login an existing user.
-   **Route**: `POST /api/users/login`
-   **Access**: Public
-   **Request Body**:

     ```json


    {
      "email": "user@example.com",
      "password": "userpassword"
    }

-   **Response**:

      ```json

    {
      "accessToken": "jwt_token"
    }

#### Get Current User Details

-   **Description**: Retrieve details of the currently authenticated user.
-   **Route**: `GET /api/users/currentUserDetails`
-   **Access**: Private
-   **Response**:

    ```json

    {
      "isSuccess": true,
      "user": {
        "id": "user_id",
        "userName": "User",
        "email": "user@example.com"
      }
    }

### Contact Endpoints

#### Get All Contacts

-   **Description**: Retrieve all contacts for the authenticated user.
-   **Route**: `GET /api/contacts`
-   **Access**: Private
-   **Response**:

    ```json

    {
      "isSuccess": true,
      "contact": [ ... ]
    }

#### Create a Contact

-   **Description**: Create a new contact for the authenticated user.
-   **Route**: `POST /api/contacts`
-   **Access**: Private
-   **Request Body**:

     ```json

    {
      "name": "Contact Name",
      "email": "contact@example.com",
      "phone": "123-456-7890"
    }

-   **Response**:

    ```json

    {
      "isSuccess": true,
      "contact": { ... }
    }

#### Get Individual Contact

-   **Description**: Retrieve a specific contact by its ID.
-   **Route**: `GET /api/contacts/:id`
-   **Access**: Private
-   **Response**:

    ```json

    {
      "isSuccess": true,
      "contact": { ... }
    }

#### Update a Contact

-   **Description**: Update the details of a specific contact.
-   **Route**: `PUT /api/contacts/:id`
-   **Access**: Private
-   **Request Body**: (fields to update)

    ```json

    {
      "name": "Updated Name",
      "email": "updated@example.com",
      "phone": "098-765-4321"
    }

-   **Response**:

    ```json

    {
      "isSuccess": true,
      "message": "Contact updated for ID: :id",
      "updatedContact": { ... }
    }

#### Delete a Contact

-   **Description**: Delete a specific contact.
-   **Route**: `DELETE /api/contacts/:id`
-   **Access**: Private
-   **Response**:

     ```json

    
    {
      "isSuccess": true,
      "message": "Contact Deleted with ID: :id",
      "deletedContact": { ... }
    }

Error Handling
--------------

The API uses standard HTTP status codes to indicate success or failure of requests:

-   200 OK: The request was successful.
-   201 Created: A new resource has been created.
-   400 Bad Request: The request was invalid or cannot be otherwise served.
-   401 Unauthorized: The request requires user authentication.
-   403 Forbidden: The request is understood, but it has been refused or access is not allowed.
-   404 Not Found: The requested resource could not be found.
-   500 Internal Server Error: An error occurred on the server.

Setup and Installation
----------------------

1.  **Clone the repository**:

    bash

    `git clone https://github.com/yourusername/contact-management-api.git
    cd contact-management-api`

2.  **Install dependencies**:

    bash

    `npm install`

3.  **Set up environment variables**:

    Create a `.env` file in the root of the project and add the following:

    env

    `CONNECTION_STRING=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET_KEY=your_jwt_secret`

4.  **Start the server**:

    bash
    
    `npm start`

Usage
-----

Make sure you have a tool like Postman or curl to test the API endpoints. All requests to the API should include a valid JWT token in the Authorization header.

License
-------

This project is licensed under the MIT License. See the `LICENSE` file for more details.

Contributing
------------

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

Contact
-------

For any inquiries, please contact yourname@example.com.
