package database

import (
	"database/sql"

	"github.com/FabioSebs/BSQWebsite/config"
	_ "github.com/go-sql-driver/mysql"
)

func ConnectDB() (*sql.DB, error) {
	envs, err := config.LoadEnv(".env")
	config.ErrorCheck(err, "Problem Loading Env")

	db, err := sql.Open("mysql", envs.DBSource)
	if err != nil {
		return db, err
	}

	return db, nil
}
