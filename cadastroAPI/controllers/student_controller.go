package controllers

import (
	"cadastroAPI/models"
	"cadastroAPI/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type StudentController struct {
	service *services.StudentService // Alterado para ponteiro
}

func NewStudentController(service *services.StudentService) *StudentController { // Aceita ponteiro
	return &StudentController{service: service}
}

func (ctrl *StudentController) CreateStudent(c *gin.Context) {
	var student models.Student
	if err := c.ShouldBindJSON(&student); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	createdStudent := ctrl.service.CreateStudent(student)
	c.JSON(http.StatusCreated, createdStudent)
}

func (ctrl *StudentController) GetStudent(c *gin.Context) {
	id := c.Param("id") // Obtém o ID como string diretamente
	student, err := ctrl.service.GetStudent(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, student)
}

func (ctrl *StudentController) GetAllStudents(c *gin.Context) {
	students := ctrl.service.GetStudents()
	c.JSON(http.StatusOK, students)
}

func (ctrl *StudentController) UpdateStudent(c *gin.Context) {
	id := c.Param("id") // Obtém o ID como string diretamente
	var student models.Student
	if err := c.ShouldBindJSON(&student); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	updatedStudent, err := ctrl.service.UpdateStudent(id, student)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, updatedStudent)
}

func (ctrl *StudentController) DeleteStudent(c *gin.Context) {
	id := c.Param("id") // Obtém o ID como string diretamente
	err := ctrl.service.DeleteStudent(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusNoContent, nil)
}
