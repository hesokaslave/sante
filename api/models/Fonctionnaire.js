/**
 * Fonctionnaire.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id : {
        type : 'string',
        required : true
      },
      nom : {
        type : 'string',
        required : true
      },
      prenom : {
        type : 'string',
        required : true
      },
      dateNaissance : {
        type : 'string'
      },
      cin : {
        type : 'string'
      },
      sexe : {
        type : 'string'
      },
      situationFamille : {
        type : 'string',
      },
      nationalite : {
        type : 'string'
      },
      us1 : {
        type : 'string'
      },
      us2 : {
        type : 'string'
      },
      dateRecrutement : {
        type : 'string'
      },
      posteBudgetaire : {
        type : 'string'
      },
      grade : {
        type : 'string'
      },
      dateGrade : {
        type : 'string'
      },
      dateAncienGrade : {
        type : 'string'
      },
      echelle : {
        type : 'string'
      },
      echelon : {
        type : 'string'
      },
      dateEchelon : {
        type : 'string'
      },
      indice : {
        type : 'string'
      },
      specialite : {
        type : 'string'
      },
      dateSpecialite : {
        type : 'string'
      },
      dateAncienneAdmin : {
        type : 'string'
      },
      position : {
        type : 'string'
      },

      datPosition : {
        type : 'string'
      },

      status : {
        type : 'string'
      }
  }
};

