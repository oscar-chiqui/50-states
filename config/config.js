module.exports = {
  "development": {
    "storage":"states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "oscar",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database",
    "host": "fifty-states-visited-database-server-1.database.windows.net",
    "dialect": "mssql"
  }
}
