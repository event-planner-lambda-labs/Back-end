// Update with your config settings.
require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;

const dbConnection = process.env.DATABASE_URL;
const dbPassword = process.env.DB_PASSWORD;

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host: "localhost",
      user: "postgres",
      password: "2119",
      database: "eventPlanner",
      charset: "utf8"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  staging: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: ".database/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      tableName: "knex_migrations",
      directory: ".database/migrations"
    },
    seeds: {
      directory: ".database/seeds"
    }
  }
};
