import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  value: DS.attr('string'),
  dictionary_id: DS.belongsTo('data-line-proto-one-dictionary', { inverse: null, async: false })
});

export let ValidationRules = {
  value: {
    descriptionKey: 'models.data-line-proto-one-dictionary-value.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dictionary_id: {
    descriptionKey: 'models.data-line-proto-one-dictionary-value.validations.dictionary_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('dictionary_valueE', 'data-line-proto-one-dictionary-value', {
    value: attr('Value', { index: 0 }),
    dictionary_id: belongsTo('data-line-proto-one-dictionary', 'Dictionary_id', {
      name: attr('Name', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('dictionary_valueL', 'data-line-proto-one-dictionary-value', {
    value: attr('Value', { index: 0 }),
    dictionary_id: belongsTo('data-line-proto-one-dictionary', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
