import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  resourceId: DS.attr('number'),
  parentId: DS.attr('number'),
  cfsId: DS.attr('number'),
  parentServiceId: DS.attr('number'),
  resourceSharedId: DS.attr('number'),
  contragentId: DS.attr('number'),
  customerId: DS.attr('number'),
  resourceSpecId: DS.attr('number'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  externalId: DS.attr('string'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date')
});

export let ValidationRules = {
  resourceId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.resourceId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  parentId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.parentId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  cfsId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.cfsId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  parentServiceId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.parentServiceId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  resourceSharedId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.resourceSharedId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  contragentId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.contragentId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customerId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.customerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  resourceSpecId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.resourceSpecId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  externalId: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.externalId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  startTime: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.startTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  endTime: {
    descriptionKey: 'models.data-line-proto-one-resource-log.validations.endTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_logE', 'data-line-proto-one-resource-log', {
    resourceId: attr('Resource_id', { index: 0 }),
    parentId: attr('Parent_id', { index: 1 }),
    cfsId: attr('Cfs_id', { index: 2 }),
    parentServiceId: attr('Parent_service_id', { index: 3 }),
    resourceSharedId: attr('Resource_shared_id', { index: 4 }),
    contragentId: attr('Contragent_id', { index: 5 }),
    customerId: attr('Customer_id', { index: 6 }),
    resourceSpecId: attr('Resource_spec_id', { index: 7 }),
    name: attr('Name', { index: 8 }),
    description: attr('Description', { index: 9 }),
    externalId: attr('External_id', { index: 10 }),
    startTime: attr('Start_time', { index: 11 }),
    endTime: attr('End_time', { index: 12 })
  });

  modelClass.defineProjection('resource_logL', 'data-line-proto-one-resource-log', {
    resourceId: attr('Resource_id', { index: 0 }),
    parentId: attr('Parent_id', { index: 1 }),
    cfsId: attr('Cfs_id', { index: 2 }),
    parentServiceId: attr('Parent_service_id', { index: 3 }),
    resourceSharedId: attr('Resource_shared_id', { index: 4 }),
    contragentId: attr('Contragent_id', { index: 5 }),
    customerId: attr('Customer_id', { index: 6 }),
    resourceSpecId: attr('Resource_spec_id', { index: 7 }),
    name: attr('Name', { index: 8 }),
    description: attr('Description', { index: 9 }),
    externalId: attr('External_id', { index: 10 }),
    startTime: attr('Start_time', { index: 11 }),
    endTime: attr('End_time', { index: 12 })
  });
};
