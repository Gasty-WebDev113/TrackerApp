package main

import (
	"github.com/gin-gonic/gin"
)

func RestApi(c *gin.Context){ //Gender Context
	name := c.Query("name") //Query the data
	age := c.Query("age")

	c.JSON(200, gin.H{
		"Name": name,
		"Age": age,
	})
}

func main() {
	r := gin.Default()
	r.GET("/api", RestApi)
	r.Run(":3000") //Listen in 3000
}