# Student API

This is a simple CRUD API for managing student records built with Go. The API allows you to create, read, update, and delete student information using an in-memory database.

## Project Structure

```
cadastroAPI
├── main.go                # Entry point of the application
├── controllers            # Contains HTTP request handlers
│   └── student_controller.go
├── models                 # Defines the data structures
│   └── student.go
├── routes                 # Sets up the API routes
│   └── routes.go
├── services               # Contains business logic
│   └── student_service.go
├── go.mod                 # Module definition
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Go 1.16 or later
- A working Go environment

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/cadastroAPI.git
   cd cadastroAPI
   ```

2. Install the dependencies:

   ```
   go mod tidy
   ```

### Running the API

To run the API, execute the following command:

```
go run main.go
```

The server will start on `http://localhost:8080`.

### API Endpoints

- **Create Student**
  - `POST /students`
  - Request Body: `{ "name": "John Doe", "age": 20, "email": "john@example.com" }`

- **Get Student**
  - `GET /students/{id}`

- **Update Student**
  - `PUT /students/{id}`
  - Request Body: `{ "name": "John Doe", "age": 21, "email": "john.doe@example.com" }`

- **Delete Student**
  - `DELETE /students/{id}`

### Example Requests

1. Create a new student:

   ```
   curl -X POST http://localhost:8080/students -d '{"name": "John Doe", "age": 20, "email": "john@example.com"}' -H "Content-Type: application/json"
   ```

2. Get a student by ID:

   ```
   curl http://localhost:8080/students/1
   ```

3. Update a student:

   ```
   curl -X PUT http://localhost:8080/students/1 -d '{"name": "John Doe", "age": 21, "email": "john.doe@example.com"}' -H "Content-Type: application/json"
   ```

4. Delete a student:

   ```
   curl -X DELETE http://localhost:8080/students/1
   ```

## License

This project is licensed under the MIT License.