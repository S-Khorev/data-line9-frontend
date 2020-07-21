import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  action: DS.attr('string'),
  dtAction: DS.attr('date'),
  service_order_id: DS.belongsTo('data-line-proto-one-service-order', { inverse: null, async: false }),
  user_id: DS.belongsTo('data-line-proto-one-usr', { inverse: null, async: false })
});

export let ValidationRules = {
  action: {
    descriptionKey: 'models.data-line-proto-one-user-service-order.validations.action.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dtAction: {
    descriptionKey: 'models.data-line-proto-one-user-service-order.validations.dtAction.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  service_order_id: {
    descriptionKey: 'models.data-line-proto-one-user-service-order.validations.service_order_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  user_id: {
    descriptionKey: 'models.data-line-proto-one-user-service-order.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_service_orderE', 'data-line-proto-one-user-service-order', {
    action: attr('Action', { index: 0 }),
    dtAction: attr('Dt_action', { index: 1 }),
    user_id: belongsTo('data-line-proto-one-usr', 'User_id', {
      login: attr('Login', { index: 3 })
    }, { index: 2 }),
    service_order_id: belongsTo('data-line-proto-one-service-order', 'Service_order_id', {
      description: attr('Description', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('user_service_orderL', 'data-line-proto-one-user-service-order', {
    action: attr('Action', { index: 0 }),
    dtAction: attr('Dt_action', { index: 1 }),
    user_id: belongsTo('data-line-proto-one-usr', 'Login', {
      login: attr('Login', { index: 2 })
    }, { index: -1, hidden: true }),
    service_order_id: belongsTo('data-line-proto-one-service-order', 'Description', {
      description: attr('Description', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
