package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Envs struct {
	ServerAddress string
	DBSource      string
	Secret        string
}

func LoadEnv(path string) (Envs, error) {
	// Loading ENV Variables into OS
	err := godotenv.Load(path)
	if err != nil {
		log.Fatal(err)
	}

	// Creating Struct with Env Variables
	envs := Envs{
		ServerAddress: os.Getenv("SERVER_ADDRESS"),
		DBSource:      os.Getenv("DB_SOURCE"),
		Secret:        os.Getenv("SECRET"),
	}

	return envs, nil
}
