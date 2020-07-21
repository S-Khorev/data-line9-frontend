import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  descr: DS.attr('string'),
  serviceManagerId: DS.attr('number'),
  creatorId: DS.attr('number'),
  modifierId: DS.attr('number'),
  dtCreated: DS.attr('date'),
  dtModified: DS.attr('date'),
  archive: DS.attr('boolean'),
  dtArchive: DS.attr('date'),
  archiverId: DS.attr('number'),
  archiveReasonId: DS.attr('number'),
  internal: DS.attr('boolean'),
  telco: DS.attr('boolean'),
  office: DS.attr('boolean'),
  barrier: DS.attr('boolean'),
  pciCss: DS.attr('boolean'),
  federalLow152: DS.attr('boolean'),
  accountManagerId: DS.attr('number')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  descr: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.descr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  serviceManagerId: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.serviceManagerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  creatorId: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.creatorId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  modifierId: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.modifierId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  archive: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.archive.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dtArchive: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.dtArchive.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  archiverId: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.archiverId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  archiveReasonId: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.archiveReasonId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  internal: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.internal.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  telco: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.telco.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  office: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.office.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  barrier: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.barrier.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  pciCss: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.pciCss.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  federalLow152: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.federalLow152.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  accountManagerId: {
    descriptionKey: 'models.data-line-proto-one-customer.validations.accountManagerId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('customerE', 'data-line-proto-one-customer', {
    name: attr('', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    serviceManagerId: attr('Service_manager_id', { index: 2 }),
    creatorId: attr('Creator_id', { index: 3 }),
    modifierId: attr('Modifier_id', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 }),
    archive: attr('Archive', { index: 7 }),
    dtArchive: attr('Dt_archive', { index: 8 }),
    archiverId: attr('Archiver_id', { index: 9 }),
    archiveReasonId: attr('Archive_reason_id', { index: 10 }),
    internal: attr('Internal', { index: 11 }),
    telco: attr('Telco', { index: 12 }),
    office: attr('Office', { index: 13 }),
    barrier: attr('Barrier', { index: 14 }),
    pciCss: attr('Pci_dss', { index: 15 }),
    federalLow152: attr('Federal_low_152', { index: 16 }),
    accountManagerId: attr('Account_manager_id', { index: 17 })
  });

  modelClass.defineProjection('customerL', 'data-line-proto-one-customer', {
    name: attr('', { index: 0 }),
    descr: attr('Descr', { index: 1 }),
    serviceManagerId: attr('Service_manager_id', { index: 2 }),
    creatorId: attr('Creator_id', { index: 3 }),
    modifierId: attr('Modifier_id', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 }),
    archive: attr('Archive', { index: 7 }),
    dtArchive: attr('Dt_archive', { index: 8 }),
    archiverId: attr('Archiver_id', { index: 9 }),
    archiveReasonId: attr('Archive_reason_id', { index: 10 }),
    internal: attr('Internal', { index: 11 }),
    telco: attr('Telco', { index: 12 }),
    office: attr('Office', { index: 13 }),
    barrier: attr('Barrier', { index: 14 }),
    pciCss: attr('Pci_dss', { index: 15 }),
    federalLow152: attr('Federal_low_152', { index: 16 }),
    accountManagerId: attr('Account_manager_id', { index: 17 })
  });
};
