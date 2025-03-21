package services

import (
	"cadastroAPI/models"
	"errors"
	"sync"

	"github.com/google/uuid"
)

type StudentService struct {
	students map[string]models.Student
	mu       sync.Mutex
}

func NewStudentService() *StudentService {
	return &StudentService{
		students: make(map[string]models.Student),
	}
}

func (s *StudentService) CreateStudent(student models.Student) models.Student {
	s.mu.Lock()
	defer s.mu.Unlock()

	student.ID = uuid.New().String()
	s.students[student.ID] = student
	return student
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
