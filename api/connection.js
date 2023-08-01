// CREATION DE LA CONNEXION A LA BASE DE DONNEES

const { Client } = require('pg')

const client = new Client({
  host: "localhost",
  user: "jessim",
  port: 5432,
  password: "Azertyuiop1",
  database: "users"
})

module.exports = client