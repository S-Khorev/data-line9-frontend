import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  code: DS.attr('string'),
  svc: DS.attr('string'),
  svcType: DS.attr('string'),
  dataVersion: DS.attr('string'),
  dtSync: DS.attr('date'),
  descr: DS.attr('string'),
  vat: DS.attr('string'),
  isActual: DS.attr('boolean'),
  dtCreation: DS.attr('date'),
  parentKey: DS.attr('guid'),
  measure: DS.attr('string'),
  measureKey: DS.attr('guid'),
  status: DS.attr('string'),
  formulaKey: DS.attr('guid'),
  billingObjectTypeGuid: DS.attr('guid')
});

export let ValidationRules = {
  code: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.code.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  svc: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.svc.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  svcType: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.svcType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dataVersion: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.dataVersion.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dtSync: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.dtSync.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  descr: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.descr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  vat: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.vat.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  isActual: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.isActual.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dtCreation: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.dtCreation.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  parentKey: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.parentKey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measure: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.measure.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  measureKey: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.measureKey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  status: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  formulaKey: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.formulaKey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  billingObjectTypeGuid: {
    descriptionKey: 'models.data-line-proto-one-catalog.validations.billingObjectTypeGuid.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('catalogE', 'data-line-proto-one-catalog', {
    code: attr('Code', { index: 0 }),
    svc: attr('Svc', { index: 1 }),
    svcType: attr('Svc_type', { index: 2 }),
    dataVersion: attr('Data_version', { index: 3 }),
    dtSync: attr('Dt_sync', { index: 4 }),
    descr: attr('Descr', { index: 5 }),
    vat: attr('Vat', { index: 6 }),
    isActual: attr('Is_actual', { index: 7 }),
    dtCreation: attr('Dt_creation', { index: 8 }),
    parentKey: attr('Parent_key', { index: 9 }),
    measure: attr('Measure', { index: 10 }),
    measureKey: attr('Measure_key', { index: 11 }),
    status: attr('Status', { index: 12 }),
    formulaKey: attr('Formula_key', { index: 13 }),
    billingObjectTypeGuid: attr('Billing_object_type_guid', { index: 14 })
  });

  modelClass.defineProjection('catalogL', 'data-line-proto-one-catalog', {
    code: attr('Code', { index: 0 }),
    svc: attr('Svc', { index: 1 }),
    svcType: attr('Svc_type', { index: 2 }),
    dataVersion: attr('Data_version', { index: 3 }),
    dtSync: attr('Dt_sync', { index: 4 }),
    descr: attr('Descr', { index: 5 }),
    vat: attr('Vat', { index: 6 }),
    isActual: attr('Is_actual', { index: 7 }),
    dtCreation: attr('Dt_creation', { index: 8 }),
    parentKey: attr('Parent_key', { index: 9 }),
    measure: attr('Measure', { index: 10 }),
    measureKey: attr('Measure_key', { index: 11 }),
    status: attr('Status', { index: 12 }),
    formulaKey: attr('Formula_key', { index: 13 }),
    billingObjectTypeGuid: attr('Billing_object_type_guid', { index: 14 })
  });
};
