package main

import (
	"database/sql"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo"
)

func main() {
	envInit()
	var port = getEnv("SERVER_PORT", "4000")

	e := echo.New() //Instance of Echo
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello With to the TrackerApp Server")
	})

	e.GET("/api", func(c echo.Context) error {
		return c.String(http.StatusOK, "Work In Progress")
	})

	e.Logger.Fatal(e.Start(":" + port))
}

func envInit() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file")
		panic(err.Error())
	}
}

func getEnv(key string, defaultValue string) string {
	if value, exist := os.LookupEnv(key); exist {
		return value
	}
	return defaultValue
}

func connectToDatabase() {
	var sqldrivername = getEnv("MYSQL_DRIVER", "")
	var sqlroot = getEnv("MYSQL_ROOT", "")

	db, err := sql.Open(sqldrivername, sqlroot)

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()
}
