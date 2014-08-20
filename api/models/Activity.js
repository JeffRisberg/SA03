/**
* Activity.js
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
        "columnName": "ID"
     },
     "name": {
        "type": "string",
        "maxLength": 35
     },
     "type": {
        "type": "string",
        "maxLength": 20
     },
     "points": {
        "type": "integer"
     }
  }
};

