import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  externalId: DS.attr('string'),
  resource_shared_id: DS.belongsTo('data-line-proto-one-resource-shared', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-proto-one-service', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-proto-one-resource-spec', { inverse: null, async: false }),
  parent_service_id: DS.belongsTo('data-line-proto-one-service', { inverse: null, async: false }),
  customerId: DS.belongsTo('data-line-proto-one-customer', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-proto-one-resource', { inverse: null, async: false }),
  contragentId: DS.belongsTo('data-line-proto-one-contragent', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  externalId: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.externalId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_shared_id: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.resource_shared_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_service_id: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.parent_service_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerId: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.customerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contragentId: {
    descriptionKey: 'models.data-line-proto-one-resource.validations.contragentId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resourceE', 'data-line-proto-one-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    externalId: attr('External_id', { index: 2 }),
    cfs_id: belongsTo('data-line-proto-one-service', 'Cfs_id', {
      name: attr('Name', { index: 4 })
    }, { index: 3 }),
    parent_service_id: belongsTo('data-line-proto-one-service', 'Parent_service_id', {
      name: attr('Name', { index: 6 })
    }, { index: 5 }),
    resource_shared_id: belongsTo('data-line-proto-one-resource-shared', 'Resource_shared_id', {
      externalId: attr('External_id', { index: 8 })
    }, { index: 7 }),
    resource_spec_id: belongsTo('data-line-proto-one-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 10 })
    }, { index: 9 }),
    parent_id: belongsTo('data-line-proto-one-resource', 'Parent_id', {
      name: attr('Name', { index: 14 })
    }, { index: 13 }),
    customerId: belongsTo('data-line-proto-one-customer', 'Customer_id', {
      name: attr('', { index: 15 })
    }, { index: 11 }),
    contragentId: belongsTo('data-line-proto-one-contragent', 'Contragent_id', {
      name: attr('', { index: 16 })
    }, { index: 12 })
  });

  modelClass.defineProjection('resourceL', 'data-line-proto-one-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    externalId: attr('External_id', { index: 2 }),
    customerId: belongsTo('data-line-proto-one-customer', 'Customer', {
      name: attr('', { index: 10 })
    }, { index: 7, hidden: true }),
    contragentId: belongsTo('data-line-proto-one-contragent', 'Contragent', {
      name: attr('', { index: 11 })
    }, { index: 8, hidden: true }),
    cfs_id: belongsTo('data-line-proto-one-service', 'Name', {

    }, { index: 3, hidden: true }),
    parent_service_id: belongsTo('data-line-proto-one-service', 'Name', {

    }, { index: 4, hidden: true }),
    resource_shared_id: belongsTo('data-line-proto-one-resource-shared', 'External_id', {

    }, { index: 5, hidden: true }),
    resource_spec_id: belongsTo('data-line-proto-one-resource-spec', 'Enum', {

    }, { index: 6, hidden: true }),
    parent_id: belongsTo('data-line-proto-one-resource', 'Name', {

    }, { index: 9, hidden: true })
  });
};
