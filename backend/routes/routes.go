package routes

import (
	"github.com/gin-gonic/gin"
)

func MakeRoutes(server *gin.Engine) {
	server.GET("/entries", func(ctx *gin.Context) {
		return
	})
}
