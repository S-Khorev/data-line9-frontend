import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string')
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.data-line-proto-one-order-state.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('order_stateE', 'data-line-proto-one-order-state', {
    description: attr('Description', { index: 0 })
  });

  modelClass.defineProjection('order_stateL', 'data-line-proto-one-order-state', {
    description: attr('Description', { index: 0 })
  });
};
