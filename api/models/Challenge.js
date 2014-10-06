/**
 * Challenge.js
 *
 * @description :: each Activity has id, name, points
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
            "type": "date"
        },
        "endDate": {
            "type": "date"
        }
    }
};

