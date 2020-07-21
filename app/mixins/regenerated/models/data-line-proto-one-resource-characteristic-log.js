import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  resourceCharacteristicId: DS.attr('number'),
  name: DS.attr('string'),
  value: DS.attr('string'),
  resourceId: DS.attr('number'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date')
});

export let ValidationRules = {
  resourceCharacteristicId: {
    descriptionKey: 'models.data-line-proto-one-resource-characteristic-log.validations.resourceCharacteristicId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-resource-characteristic-log.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-proto-one-resource-characteristic-log.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resourceId: {
    descriptionKey: 'models.data-line-proto-one-resource-characteristic-log.validations.resourceId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  startTime: {
    descriptionKey: 'models.data-line-proto-one-resource-characteristic-log.validations.startTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  endTime: {
    descriptionKey: 'models.data-line-proto-one-resource-characteristic-log.validations.endTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_characteristic_logE', 'data-line-proto-one-resource-characteristic-log', {
    resourceCharacteristicId: attr('Resource_characteristic_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    value: attr('Value', { index: 2 }),
    resourceId: attr('Resource_id', { index: 3 }),
    startTime: attr('Start_time', { index: 4 }),
    endTime: attr('End_time', { index: 5 })
  });

  modelClass.defineProjection('resource_characteristic_logL', 'data-line-proto-one-resource-characteristic-log', {
    resourceCharacteristicId: attr('Resource_characteristic_id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    value: attr('Value', { index: 2 }),
    resourceId: attr('Resource_id', { index: 3 }),
    startTime: attr('Start_time', { index: 4 }),
    endTime: attr('End_time', { index: 5 })
  });
};
