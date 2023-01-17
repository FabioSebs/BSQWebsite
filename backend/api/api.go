package api

import (
	"github.com/FabioSebs/BSQWebsite/routes"
	"github.com/gin-gonic/gin"
)

func StartServer() {
	r := gin.Default()
	routes.MakeRoutes(r)
	r.Run()
}
