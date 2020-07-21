import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  descr: DS.attr('string'),
  officialName: DS.attr('string'),
  creatorId: DS.attr('number'),
  modifierId: DS.attr('number'),
  dtCreated: DS.attr('date'),
  dtModified: DS.attr('date'),
  inn: DS.attr('string'),
  guid1c: DS.attr('guid'),
  archive: DS.attr('boolean'),
  dt_archive: DS.attr('date'),
  archiverId: DS.attr('number'),
  archiveReasonId: DS.attr('number'),
  customerId: DS.belongsTo('data-line-proto-one-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  descr: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.descr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  officialName: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.officialName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  creatorId: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.creatorId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  modifierId: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.modifierId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  inn: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.inn.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  guid1c: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.guid1c.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  archive: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.archive.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_archive: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.dt_archive.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  archiverId: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.archiverId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  archiveReasonId: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.archiveReasonId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  customerId: {
    descriptionKey: 'models.data-line-proto-one-contragent.validations.customerId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('contragentE', 'data-line-proto-one-contragent', {
    name: attr('', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    officialName: attr('Official_name', { index: 2 }),
    creatorId: attr('Creator_id', { index: 3 }),
    modifierId: attr('Modifier_id', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 }),
    inn: attr('INN', { index: 7 }),
    guid1c: attr('Guid1c', { index: 8 }),
    archive: attr('Archive', { index: 9 }),
    dt_archive: attr('Dt_archive', { index: 10 }),
    archiverId: attr('Archiver_id', { index: 11 }),
    archiveReasonId: attr('Archive_reason_id', { index: 12 }),
    customerId: belongsTo('data-line-proto-one-customer', 'Customer_id', {
      name: attr('', { index: 14 })
    }, { index: 13 })
  });

  modelClass.defineProjection('contragentL', 'data-line-proto-one-contragent', {
    name: attr('', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    officialName: attr('Official_name', { index: 2 }),
    creatorId: attr('Creator_id', { index: 3 }),
    modifierId: attr('Modifier_id', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 }),
    inn: attr('INN', { index: 7 }),
    guid1c: attr('Guid1c', { index: 8 }),
    archive: attr('Archive', { index: 9 }),
    dt_archive: attr('Dt_archive', { index: 10 }),
    archiverId: attr('Archiver_id', { index: 11 }),
    archiveReasonId: attr('Archive_reason_id', { index: 12 }),
    customerId: belongsTo('data-line-proto-one-customer', '', {
      name: attr('', { index: 13 })
    }, { index: -1, hidden: true })
  });
};
