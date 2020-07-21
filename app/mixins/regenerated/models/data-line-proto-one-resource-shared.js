import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  externalId: DS.attr('string'),
  existent: DS.attr('boolean'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  type: DS.attr('string'),
  dtCreated: DS.attr('date'),
  dtModified: DS.attr('date'),
  customerId: DS.belongsTo('data-line-proto-one-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  externalId: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.externalId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  existent: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.existent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  customerId: {
    descriptionKey: 'models.data-line-proto-one-resource-shared.validations.customerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_sharedE', 'data-line-proto-one-resource-shared', {
    externalId: attr('External_id', { index: 0 }),
    existent: attr('Existent', { index: 1 }),
    name: attr('Name', { index: 2 }),
    description: attr('Description', { index: 3 }),
    category: attr('Category', { index: 4 }),
    type: attr('Type', { index: 5 }),
    dtCreated: attr('Dt_created', { index: 6 }),
    dtModified: attr('Dt_modified', { index: 7 }),
    customerId: belongsTo('data-line-proto-one-customer', 'Customer_id', {
      name: attr('', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('resource_sharedL', 'data-line-proto-one-resource-shared', {
    externalId: attr('External_id', { index: 0 }),
    existent: attr('Existent', { index: 1 }),
    name: attr('Name', { index: 2 }),
    description: attr('Description', { index: 3 }),
    category: attr('Category', { index: 4 }),
    type: attr('Type', { index: 5 }),
    dtCreated: attr('Dt_created', { index: 6 }),
    dtModified: attr('Dt_modified', { index: 7 }),
    customerId: belongsTo('data-line-proto-one-customer', '', {
      name: attr('', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
