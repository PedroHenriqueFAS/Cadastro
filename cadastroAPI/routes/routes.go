package routes

import (
	"cadastroAPI/controllers"
	"cadastroAPI/services"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	// Inicializa o serviço corretamente
	studentService := services.NewStudentService()

	// Passa o serviço inicializado para o controlador
	studentController := controllers.NewStudentController(studentService)

	// Configura as rotas
	router.POST("/students", studentController.CreateStudent)
	router.GET("/students/:id", studentController.GetStudent)
	router.GET("/students", studentController.GetAllStudents)
	router.PUT("/students/:id", studentController.UpdateStudent)
	router.DELETE("/students/:id", studentController.DeleteStudent)
}
