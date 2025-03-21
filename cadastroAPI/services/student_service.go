package services

import (
	"cadastroAPI/models"
	"errors"
	"sync"

	"github.com/google/uuid" // Import necessário para gerar UUIDs
)

type StudentService struct {
	students map[string]models.Student // Mapa para armazenar os estudantes
	mu       sync.Mutex
}

func NewStudentService() *StudentService {
	return &StudentService{
		students: make(map[string]models.Student), // Inicializa o mapa aqui
	}
}

func (s *StudentService) CreateStudent(student models.Student) models.Student {
	s.mu.Lock()
	defer s.mu.Unlock()

	student.ID = uuid.New().String() // Gera um UUID único para o ID
	s.students[student.ID] = student
	return student
}

func (s *StudentService) GetStudents() []models.Student {
	s.mu.Lock()
	defer s.mu.Unlock()

	var students []models.Student
	for _, student := range s.students {
		students = append(students, student)
	}
	return students
}

func (s *StudentService) GetStudent(id string) (models.Student, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	student, exists := s.students[id]
	if !exists {
		return models.Student{}, errors.New("student not found")
	}
	return student, nil
}

func (s *StudentService) UpdateStudent(id string, student models.Student) (models.Student, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if _, exists := s.students[id]; !exists {
		return models.Student{}, errors.New("student not found")
	}
	student.ID = id
	s.students[id] = student
	return student, nil
}

func (s *StudentService) DeleteStudent(id string) error {
	s.mu.Lock()
	defer s.mu.Unlock()

	if _, exists := s.students[id]; !exists {
		return errors.New("student not found")
	}
	delete(s.students, id)
	return nil
}

func (s *StudentService) GetAllStudents() []models.Student {
	s.mu.Lock()
	defer s.mu.Unlock()

	var studentList []models.Student
	for _, student := range s.students {
		studentList = append(studentList, student)
	}
	return studentList
}
