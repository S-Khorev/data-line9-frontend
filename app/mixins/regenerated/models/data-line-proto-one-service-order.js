import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string'),
  dtCompleted: DS.attr('date'),
  dtCreated: DS.attr('date'),
  dtModified: DS.attr('date'),
  dtStarted: DS.attr('date'),
  externalId: DS.attr('guid'),
  price: DS.attr('decimal'),
  modifier_id: DS.belongsTo('data-line-proto-one-usr', { inverse: null, async: false }),
  contragentId: DS.belongsTo('data-line-proto-one-contragent', { inverse: null, async: false }),
  creator_id: DS.belongsTo('data-line-proto-one-usr', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-proto-one-order-state', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-proto-one-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dtCompleted: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.dtCompleted.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtStarted: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.dtStarted.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  externalId: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.externalId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  price: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
  modifier_id: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.modifier_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contragentId: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.contragentId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  creator_id: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.creator_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-proto-one-service-order.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_orderE', 'data-line-proto-one-service-order', {
    description: attr('Description', { index: 0 }),
    dtCompleted: attr('Dt_completed', { index: 1 }),
    dtCreated: attr('Dt_created', { index: 2 }),
    dtModified: attr('Dt_modified', { index: 3 }),
    dtStarted: attr('Dt_started', { index: 4 }),
    externalId: attr('External_id', { index: 5 }),
    price: attr('Price', { index: 6 }),
    state: belongsTo('data-line-proto-one-order-state', 'State', {
      description: attr('Description', { index: 8 })
    }, { index: 7 }),
    modifier_id: belongsTo('data-line-proto-one-usr', 'Modifier_id', {
      login: attr('Login', { index: 10 })
    }, { index: 9 }),
    creator_id: belongsTo('data-line-proto-one-usr', 'Creator_id', {
      login: attr('Login', { index: 14 })
    }, { index: 13 }),
    customer_id: belongsTo('data-line-proto-one-customer', 'Customer_id', {
      name: attr('', { index: 15 })
    }, { index: 11 }),
    contragentId: belongsTo('data-line-proto-one-contragent', 'Contragent_id', {
      name: attr('', { index: 16 })
    }, { index: 12 })
  });

  modelClass.defineProjection('service_orderL', 'data-line-proto-one-service-order', {
    description: attr('Description', { index: 0 }),
    dtCompleted: attr('Dt_completed', { index: 1 }),
    dtCreated: attr('Dt_created', { index: 2 }),
    dtModified: attr('Dt_modified', { index: 3 }),
    dtStarted: attr('Dt_started', { index: 4 }),
    externalId: attr('External_id', { index: 5 }),
    price: attr('Price', { index: 6 }),
    state: belongsTo('data-line-proto-one-order-state', 'Description', {
      description: attr('Description', { index: 7 })
    }, { index: -1, hidden: true }),
    modifier_id: belongsTo('data-line-proto-one-usr', 'Login', {
      login: attr('Login', { index: 8 })
    }, { index: -1, hidden: true }),
    creator_id: belongsTo('data-line-proto-one-usr', 'Login', {
      login: attr('Login', { index: 9 })
    }, { index: -1, hidden: true }),
    contragentId: belongsTo('data-line-proto-one-contragent', '', {
      name: attr('', { index: 10 })
    }, { index: -1, hidden: true }),
    customer_id: belongsTo('data-line-proto-one-customer', '', {
      name: attr('', { index: 11 })
    }, { index: -1, hidden: true })
  });
};
