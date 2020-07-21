import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  version: DS.attr('number'),
  enum: DS.attr('string'),
  category: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  dtCreated: DS.attr('date'),
  dtModified: DS.attr('date'),
  catalogKey: DS.belongsTo('data-line-proto-one-catalog', { inverse: null, async: false }),
  cardinality: DS.belongsTo('data-line-proto-one-cardinality-type', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-proto-one-service-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  version: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.version.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  enum: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.enum.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  catalogKey: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.catalogKey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cardinality: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.cardinality.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-proto-one-service-spec.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_specE', 'data-line-proto-one-service-spec', {
    version: attr('Version', { index: 0 }),
    enum: attr('Enum', { index: 1 }),
    category: attr('Category', { index: 2 }),
    name: attr('Name', { index: 3 }),
    description: attr('Description', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 }),
    cardinality: belongsTo('data-line-proto-one-cardinality-type', 'Cardinality', {
      description: attr('Description', { index: 8 })
    }, { index: 7 }),
    parent_id: belongsTo('data-line-proto-one-service-spec', 'Parent_id', {
      enum: attr('Enum', { index: 12 })
    }, { index: 11 }),
    catalogKey: belongsTo('data-line-proto-one-catalog', 'Catalog_key', {
      code: attr('Code', { index: 14 })
    }, { index: 13 })
  });

  modelClass.defineProjection('service_specL', 'data-line-proto-one-service-spec', {
    version: attr('Version', { index: 0 }),
    enum: attr('Enum', { index: 1 }),
    category: attr('Category', { index: 2 }),
    name: attr('Name', { index: 3 }),
    description: attr('Description', { index: 4 }),
    dtCreated: attr('Dt_created', { index: 5 }),
    dtModified: attr('Dt_modified', { index: 6 }),
    cardinality: belongsTo('data-line-proto-one-cardinality-type', 'Description', {

    }, { index: 7, hidden: true }),
    parent_id: belongsTo('data-line-proto-one-service-spec', 'Enum', {

    }, { index: 9, hidden: true }),
    catalogKey: belongsTo('data-line-proto-one-catalog', 'Code', {

    }, { index: 10, hidden: true })
  });
};
