/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      name: {
          type: 'string',
          required: true,
      },
      email: {
          type: 'string',
          required: true,
          email: true,
          unique: true
      },
      password: {
          type: 'string',
          minLength: 6,
          required: true,
      },
      isDriver: {
          type: 'boolean',
          defaultsTo: false
      },
      isAdmin: {
          type: 'boolean',
          defaultsTo: false
      },
      isCurrentlyDriving: {
          type: 'boolean',
          defaultsTo: false
      }
      toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          return obj;
      }
  }
};
