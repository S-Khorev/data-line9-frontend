import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  serviceId: DS.attr('number'),
  cfsId: DS.attr('number'),
  parentId: DS.attr('number'),
  contragentId: DS.attr('number'),
  customerId: DS.attr('number'),
  serviceSpecId: DS.attr('number'),
  state: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  dtCreated: DS.attr('date'),
  dtStarted: DS.attr('date'),
  dtEnded: DS.attr('date'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date')
});

export let ValidationRules = {
  serviceId: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.serviceId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  cfsId: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.cfsId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  parentId: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.parentId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  contragentId: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.contragentId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customerId: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.customerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  serviceSpecId: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.serviceSpecId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.state.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtStarted: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.dtStarted.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtEnded: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.dtEnded.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  startTime: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.startTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  endTime: {
    descriptionKey: 'models.data-line-proto-one-service-log.validations.endTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_logE', 'data-line-proto-one-service-log', {
    serviceId: attr('Service_id', { index: 0 }),
    cfsId: attr('Cfs_id', { index: 1 }),
    parentId: attr('Parent_id', { index: 2 }),
    contragentId: attr('Contragent_id', { index: 3 }),
    customerId: attr('Customer_id', { index: 4 }),
    serviceSpecId: attr('Service_spec_id', { index: 5 }),
    state: attr('State', { index: 6 }),
    name: attr('Name', { index: 7 }),
    description: attr('Description', { index: 8 }),
    dtCreated: attr('Dt_created', { index: 9 }),
    dtStarted: attr('Dt_started', { index: 10 }),
    dtEnded: attr('Dt_ended', { index: 11 }),
    startTime: attr('Start_time', { index: 12 }),
    endTime: attr('End_time', { index: 13 })
  });

  modelClass.defineProjection('service_logL', 'data-line-proto-one-service-log', {
    serviceId: attr('Service_id', { index: 0 }),
    cfsId: attr('Cfs_id', { index: 1 }),
    parentId: attr('Parent_id', { index: 2 }),
    contragentId: attr('Contragent_id', { index: 3 }),
    customerId: attr('Customer_id', { index: 4 }),
    serviceSpecId: attr('Service_spec_id', { index: 5 }),
    state: attr('State', { index: 6 }),
    name: attr('Name', { index: 7 }),
    description: attr('Description', { index: 8 }),
    dtCreated: attr('Dt_created', { index: 9 }),
    dtStarted: attr('Dt_started', { index: 10 }),
    dtEnded: attr('Dt_ended', { index: 11 }),
    startTime: attr('Start_time', { index: 12 }),
    endTime: attr('End_time', { index: 13 })
  });
};
