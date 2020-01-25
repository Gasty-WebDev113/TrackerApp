package main

import (
	"github.com/gin-gonic/gin"
)

func RestApi(c *gin.Context){ //Gender Context
	c.JSON(200, gin.H{
		"message": "Hello World with GOooo",
	})
}

func main() {
	r := gin.Default()
	r.GET("/api", RestApi)
	r.Run(":3000") //Listen in 3000
}