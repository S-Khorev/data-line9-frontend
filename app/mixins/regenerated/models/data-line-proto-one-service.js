import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dtCreated: DS.attr('date'),
  dtStarted: DS.attr('date'),
  dtEnded: DS.attr('date'),
  parent_id: DS.belongsTo('data-line-proto-one-service', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-proto-one-service', { inverse: null, async: false }),
  service_spec_id: DS.belongsTo('data-line-proto-one-service-spec', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-proto-one-service-state', { inverse: null, async: false }),
  contragentId: DS.belongsTo('data-line-proto-one-contragent', { inverse: null, async: false }),
  customerId: DS.belongsTo('data-line-proto-one-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-proto-one-service.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-service.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-service.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtStarted: {
    descriptionKey: 'models.data-line-proto-one-service.validations.dtStarted.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtEnded: {
    descriptionKey: 'models.data-line-proto-one-service.validations.dtEnded.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-proto-one-service.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-proto-one-service.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-proto-one-service.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-proto-one-service.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contragentId: {
    descriptionKey: 'models.data-line-proto-one-service.validations.contragentId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerId: {
    descriptionKey: 'models.data-line-proto-one-service.validations.customerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('serviceE', 'data-line-proto-one-service', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    dtCreated: attr('Dt_created', { index: 2 }),
    dtStarted: attr('Dt_started', { index: 3 }),
    dtEnded: attr('Dt_ended', { index: 4 }),
    cfs_id: belongsTo('data-line-proto-one-service', 'Cfs_id', {
      name: attr('Name', { index: 7 })
    }, { index: 6 }),
    service_spec_id: belongsTo('data-line-proto-one-service-spec', 'Service_spec_id', {
      enum: attr('Enum', { index: 9 })
    }, { index: 8 }),
    state: belongsTo('data-line-proto-one-service-state', 'State', {
      description: attr('Description', { index: 11 })
    }, { index: 10 }),
    parent_id: belongsTo('data-line-proto-one-service', 'Parent_id', {
      name: attr('Name', { index: 13 })
    }, { index: 12 }),
    customerId: belongsTo('data-line-proto-one-customer', 'Customer_id', {
      name: attr('', { index: 15 })
    }, { index: 14 }),
    contragentId: belongsTo('data-line-proto-one-contragent', 'Contragent_id', {
      name: attr('', { index: 16 })
    }, { index: 5 })
  });

  modelClass.defineProjection('serviceL', 'data-line-proto-one-service', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    dtCreated: attr('Dt_created', { index: 2 }),
    dtStarted: attr('Dt_started', { index: 3 }),
    dtEnded: attr('Dt_ended', { index: 4 }),
    contragentId: belongsTo('data-line-proto-one-contragent', 'Contragent', {

    }, { index: 5, hidden: true }),
    cfs_id: belongsTo('data-line-proto-one-service', 'Name', {

    }, { index: 6, hidden: true }),
    service_spec_id: belongsTo('data-line-proto-one-service-spec', 'Enum', {

    }, { index: 7, hidden: true }),
    state: belongsTo('data-line-proto-one-service-state', 'Description', {

    }, { index: 8, hidden: true }),
    parent_id: belongsTo('data-line-proto-one-service', 'Name', {

    }, { index: 9, hidden: true }),
    customerId: belongsTo('data-line-proto-one-customer', 'Customer', {

    }, { index: 10, hidden: true })
  });
};
