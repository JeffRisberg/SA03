/**
 * Connections
 * (sails.config.connections)
 *
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 */

module.exports.connections = {

    /***************************************************************************
     *                                                                          *
     * PostgreSQL is another officially supported relational database.          *
     * http://en.wikipedia.org/wiki/PostgreSQL                                  *
     *                                                                          *
     * Run: npm install sails-postgresql                                        *
     *                                                                          *
     ***************************************************************************/
    localPostgres: {
        adapter: 'sails-postgresql',
        host: process.env.PG_HOSTNAME || 'localhost',
        user: process.env.PG_USER || 'postgres',
        password: process.env.PG_PASSWORD || '123456',
        database: process.env.PG_DATABASE || 'sa02',
        port: process.env.PG_PORT || 5432,
        //url:      process.env.DATABASE_URL || '',
        pool: false
        //ssl: true
    },

    herokuPostgres: {
        adapter: 'sails-postgresql',
        host: process.env.PG_HOSTNAME || 'localhost',
        user: process.env.PG_USER || 'postgres',
        password: process.env.PG_PASSWORD || '123456',
        database: process.env.PG_DATABASE || 'sa02',
        port: process.env.PG_PORT || 5432,
        //url:      process.env.DATABASE_URL || '',
        pool: false
        //ssl: true
    }


    /***************************************************************************
     *                                                                          *
     * More adapters: https://github.com/balderdashy/sails                      *
     *                                                                          *
     ***************************************************************************/

};
