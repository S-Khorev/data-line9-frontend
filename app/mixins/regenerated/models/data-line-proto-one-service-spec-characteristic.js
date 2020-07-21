import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  canBeOverridden: DS.attr('boolean'),
  label: DS.attr('string'),
  list: DS.attr('number'),
  type: DS.belongsTo('data-line-proto-one-characteristic-type', { inverse: null, async: false }),
  dictionary_id: DS.belongsTo('data-line-proto-one-dictionary', { inverse: null, async: false }),
  service_spec_id: DS.belongsTo('data-line-proto-one-service-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  canBeOverridden: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.canBeOverridden.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  label: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.label.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  list: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.list.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dictionary_id: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.dictionary_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-proto-one-service-spec-characteristic.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_spec_characteristicE', 'data-line-proto-one-service-spec-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    canBeOverridden: attr('Can_be_overridden', { index: 2 }),
    label: attr('Label', { index: 3 }),
    list: attr('List', { index: 4 }),
    service_spec_id: belongsTo('data-line-proto-one-service-spec', 'Service_spec_id', {
      enum: attr('Enum', { index: 6 })
    }, { index: 5 }),
    type: belongsTo('data-line-proto-one-characteristic-type', 'Type', {
      regex: attr('Regex', { index: 8 })
    }, { index: 7 }),
    dictionary_id: belongsTo('data-line-proto-one-dictionary', 'Dictionary_id', {
      name: attr('Name', { index: 10 })
    }, { index: 9 })
  });

  modelClass.defineProjection('service_spec_characteristicL', 'data-line-proto-one-service-spec-characteristic', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    canBeOverridden: attr('Can_be_overridden', { index: 2 }),
    label: attr('Label', { index: 3 }),
    list: attr('List', { index: 4 }),
    service_spec_id: belongsTo('data-line-proto-one-service-spec', 'Enum', {
      enum: attr('Enum', { index: 5 })
    }, { index: -1, hidden: true }),
    type: belongsTo('data-line-proto-one-characteristic-type', 'Regex', {
      regex: attr('Regex', { index: 6 })
    }, { index: -1, hidden: true }),
    dictionary_id: belongsTo('data-line-proto-one-dictionary', 'Name', {
      name: attr('Name', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
