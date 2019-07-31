// Update with your config settings.
const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/event_planner.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
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
      directory: ".database/migrations"
    },
    seeds: {
      directory: ".database/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
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
