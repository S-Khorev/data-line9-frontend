import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  serviceCharacteristicId: DS.attr('number'),
  name: DS.attr('string'),
  value: DS.attr('string'),
  serviceId: DS.attr('number'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date')
});

export let ValidationRules = {
  serviceCharacteristicId: {
    descriptionKey: 'models.data-line-proto-one-service-characteristic-log.validations.serviceCharacteristicId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-service-characteristic-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-proto-one-service-characteristic-log.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  serviceId: {
    descriptionKey: 'models.data-line-proto-one-service-characteristic-log.validations.serviceId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  startTime: {
    descriptionKey: 'models.data-line-proto-one-service-characteristic-log.validations.startTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  endTime: {
    descriptionKey: 'models.data-line-proto-one-service-characteristic-log.validations.endTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_characteristic_logE', 'data-line-proto-one-service-characteristic-log', {
    serviceCharacteristicId: attr('Service_characteristic_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    value: attr('Value', { index: 2 }),
    serviceId: attr('Service_id', { index: 3 }),
    startTime: attr('Start_time', { index: 4 }),
    endTime: attr('End_time', { index: 5 })
  });

  modelClass.defineProjection('service_characteristic_logL', 'data-line-proto-one-service-characteristic-log', {
    serviceCharacteristicId: attr('Service_characteristic_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    value: attr('Value', { index: 2 }),
    serviceId: attr('Service_id', { index: 3 }),
    startTime: attr('Start_time', { index: 4 }),
    endTime: attr('End_time', { index: 5 })
  });
};
