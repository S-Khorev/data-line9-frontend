import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  aCreate: DS.attr('boolean'),
  aRead: DS.attr('boolean'),
  aUpdate: DS.attr('boolean'),
  aDelete: DS.attr('boolean'),
  service_spec_id: DS.belongsTo('data-line-proto-one-service-spec', { inverse: null, async: false }),
  group_id: DS.belongsTo('data-line-proto-one-grp', { inverse: null, async: false })
});

export let ValidationRules = {
  aCreate: {
    descriptionKey: 'models.data-line-proto-one-service-spec-acl.validations.aCreate.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  aRead: {
    descriptionKey: 'models.data-line-proto-one-service-spec-acl.validations.aRead.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  aUpdate: {
    descriptionKey: 'models.data-line-proto-one-service-spec-acl.validations.aUpdate.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  aDelete: {
    descriptionKey: 'models.data-line-proto-one-service-spec-acl.validations.aDelete.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-proto-one-service-spec-acl.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  group_id: {
    descriptionKey: 'models.data-line-proto-one-service-spec-acl.validations.group_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_spec_aclE', 'data-line-proto-one-service-spec-acl', {
    aCreate: attr('A_create', { index: 0 }),
    aRead: attr('A_read', { index: 1 }),
    aUpdate: attr('A_update', { index: 2 }),
    aDelete: attr('A_delete', { index: 3 }),
    service_spec_id: belongsTo('data-line-proto-one-service-spec', 'Service_spec_id', {
      enum: attr('Enum', { index: 5 })
    }, { index: 4 }),
    group_id: belongsTo('data-line-proto-one-grp', 'Group_id', {
      name: attr('Name', { index: 7 })
    }, { index: 6 })
  });

  modelClass.defineProjection('service_spec_aclL', 'data-line-proto-one-service-spec-acl', {
    aCreate: attr('A_create', { index: 0 }),
    aRead: attr('A_read', { index: 1 }),
    aUpdate: attr('A_update', { index: 2 }),
    aDelete: attr('A_delete', { index: 3 }),
    service_spec_id: belongsTo('data-line-proto-one-service-spec', 'Enum', {
      enum: attr('Enum', { index: 4 })
    }, { index: -1, hidden: true }),
    group_id: belongsTo('data-line-proto-one-grp', 'Name', {
      name: attr('Name', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
