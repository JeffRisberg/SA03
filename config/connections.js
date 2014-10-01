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
    postgres1: {
        module: 'sails-postgresql',
        //host: 'localhost',
        //port: 5432,
        //user: 'postgres',
        //password: '123456',
        //database: 'sa02',
        url: 'jdbc:postgresql://localhost/sa02?user=postgres&password=123456',

        //adapter: 'sails-postgresql',
        //host:     process.env.PG_HOSTNAME || 'localhost',
        //user:     process.env.PG_USER     || 'postgres',
        //password: process.env.PG_PASSWORD || '123456',
        //database: process.env.PG_DATABASE || 'SA02',
        //port:     process.env.PG_PORT     || 5532,
        //url:      process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/sa02',
        pool: false
        //ssl: true
    }


    /***************************************************************************
     *                                                                          *
     * More adapters: https://github.com/balderdashy/sails                      *
     *                                                                          *
     ***************************************************************************/

};
