/**
 * Challenge.js
 *
 * @description :: each Challenge has id, name, description, etc.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        "id": {
            "type": "integer",
            "primaryKey": true,
            "autoIncrement": true,
            "columnName": "id"
        },
        "name": {
            "type": "string",
            "maxLength": 35
        },
        "description": {
            "type": "string",
            "maxLength": 20
        },
        "startDate": {
            "type": "date",
            "columnName": "start_date"
        },
        "endDate": {
            "type": "date",
            "columnName": "end_date"
        },
        "active": {
            "type": "boolean"
        }
    }
};

