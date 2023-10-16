// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      useNullAsDefault: true, // Required for SQLite
    },
  
    // development: {
    //   client: 'mysql',
    //   connection: {
    //     database: 'menuplus',
    //     user:     'root',
    //     password: '',
    //     port : 3306,
    //     host : 'localhost'
    //   },
  
    //   migrations: {
    //     tableName: 'knex_migrations',
    //     directory: './migrations'
    //   }
    // },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };