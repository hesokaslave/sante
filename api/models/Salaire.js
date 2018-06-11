/**
 * Salaire.js
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
    nombreEnfants : {
      type : 'string'
    },
    dateEntree : {
      type : 'string'
    },
    nationalité : {
      type : 'string'
    },
    zone : {
      type : 'string'
    },
    grade : {
      type : 'string'
    },
    imputation : {
      type : 'string'
    },
    affectation : {
      type : 'string'
    },
    echelle : {
      type : 'string'
    },
    echelon : {
      type : 'string'
    },
    indice : {
      type : 'string'
    },
    position : {
      type : 'string'
    },
    brutAnnuel : {
      type : 'string'
    },
    baseImposable : {
      type : 'string'
    },
    netAnnuel : {
      type : 'string'
    },
    netMensuel : {
      type : 'string'
    }

  }
};

