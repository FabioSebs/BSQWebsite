package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func doSomething(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}
