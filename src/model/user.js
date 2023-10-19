const { Model } = require('objection');
const knex = require('../../config/db')


Model.knex(knex);

class User extends Model {
    static tableName = 'user';

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                username: { type: 'string' },
                email: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' }
            }
        };
    };
  }

  module.exports = User;