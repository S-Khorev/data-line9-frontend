import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  action: DS.attr('string'),
  dtAction: DS.attr('date'),
  user_id: DS.belongsTo('data-line-proto-one-usr', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-proto-one-resource-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  action: {
    descriptionKey: 'models.data-line-proto-one-user-resource-spec.validations.action.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dtAction: {
    descriptionKey: 'models.data-line-proto-one-user-resource-spec.validations.dtAction.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  user_id: {
    descriptionKey: 'models.data-line-proto-one-user-resource-spec.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-proto-one-user-resource-spec.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_resource_specE', 'data-line-proto-one-user-resource-spec', {
    action: attr('Action', { index: 0 }),
    dtAction: attr('Dt_action', { index: 1 }),
    user_id: belongsTo('data-line-proto-one-usr', 'User_id', {
      login: attr('Login', { index: 3 })
    }, { index: 2 }),
    resource_spec_id: belongsTo('data-line-proto-one-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('user_resource_specL', 'data-line-proto-one-user-resource-spec', {
    action: attr('Action', { index: 0 }),
    dtAction: attr('Dt_action', { index: 1 }),
    user_id: belongsTo('data-line-proto-one-usr', 'Login', {
      login: attr('Login', { index: 2 })
    }, { index: -1, hidden: true }),
    resource_spec_id: belongsTo('data-line-proto-one-resource-spec', 'Enum', {
      enum: attr('Enum', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
