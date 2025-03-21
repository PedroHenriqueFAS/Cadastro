# Student Registration

This is a student registration project that consists of a **back-end** developed in Go (Golang) and a **front-end** developed in Angular. The system allows you to create, view, edit and delete student information.

---

## Features

- **Student CRUD**:
- Create a new student.
- List all students.
- View the details of a specific student.
- Edit student information.
- Delete a student.

---

## Technologies Used

### Back-End
- **Language**: Go (Golang)
- **Framework**: Gin
- **Database**: In-memory (map)
- **Middleware**: CORS

### Front-end
- **Language**: TypeScript
- **Framework**: Angular
- **Styling**: Bootstrap

---

## Prerequisites

You must have the following security tools installed:

- **Go** (version 1.19 or higher)
- **Node.js** (version 16 or higher)
- **Angular CLI** (installed globally with `npm install -g @angular/cli`)

---

### Back-End

```
cadastroAPI/
├── controllers/
│   └── student_controller.go
├── services/
│   └── student_service.go
├── routes/
│   └── routes.go
├── main.go
└── go.mod
```

## Front-End

cadastroFront/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── student/
│   │   │   │   ├── Create.component.ts
│   │   │   │   ├── Index.component.ts
│   │   │   │   ├── Student.service.ts
│   │   │   │   └── Edit.component.ts
│   │   ├── app.module.ts
│   └── assets/
├── angular.json
├── package.json
└── [README.md](http://_vscodecontentref_/1)

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
   curl http://localhost:8080/students/:id
   ```

3. Update a student:

   ```
   curl -X PUT http://localhost:8080/students/:id -d '{"name": "John Doe", "age": 21, "email": "john.doe@example.com"}' -H "Content-Type: application/json"
   ```

4. Delete a student:

   ```
   curl -X DELETE http://localhost:8080/students/:id
   ```

## License

This project is licensed under the MIT License.