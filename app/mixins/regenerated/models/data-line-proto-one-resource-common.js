import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  externalId: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  type: DS.attr('string'),
  dtCreated: DS.attr('date'),
  dtModified: DS.attr('date')
});

export let ValidationRules = {
  externalId: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.externalId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-resource-common.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_commonE', 'data-line-proto-one-resource-common', {
    externalId: attr('External_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    description: attr('Description', { index: 2 }),
    category: attr('Category', { index: 3 }),
    type: attr('Type', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 })
  });

  modelClass.defineProjection('resource_commonL', 'data-line-proto-one-resource-common', {
    externalId: attr('External_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    description: attr('Description', { index: 2 }),
    category: attr('Category', { index: 3 }),
    type: attr('Type', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 })
  });
};
