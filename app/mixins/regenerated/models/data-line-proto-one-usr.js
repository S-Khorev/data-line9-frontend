import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  login: DS.attr('string'),
  password: DS.attr('string'),
  locked: DS.attr('boolean'),
  email: DS.attr('string'),
  domain: DS.attr('string'),
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  phone: DS.attr('string'),
  phoneWork: DS.attr('string'),
  phoneMobile: DS.attr('string'),
  position: DS.attr('string'),
  department: DS.attr('string'),
  photo: DS.attr('string'),
  thumbnail: DS.attr('string'),
  dtCreated: DS.attr('date'),
  dtLocked: DS.attr('date'),
  dtModified: DS.attr('date'),
  dtLastLogin: DS.attr('date'),
  fullName: DS.attr('string'),
  shortName: DS.attr('string')
});

export let ValidationRules = {
  login: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.login.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  password: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.password.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  locked: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.locked.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  email: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.email.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  domain: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.domain.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  firstName: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneWork: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.phoneWork.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneMobile: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.phoneMobile.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.position.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  department: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.department.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  photo: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.photo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  thumbnail: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.thumbnail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dtCreated: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.dtCreated.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dtLocked: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.dtLocked.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtModified: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.dtModified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dtLastLogin: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.dtLastLogin.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  fullName: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.fullName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shortName: {
    descriptionKey: 'models.data-line-proto-one-usr.validations.shortName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('usrE', 'data-line-proto-one-usr', {
    login: attr('Login', { index: 0 }),
    password: attr('Password', { index: 1 }),
    locked: attr('Locked', { index: 2 }),
    email: attr('Email', { index: 3 }),
    domain: attr('Domain', { index: 4 }),
    lastName: attr('Last_name', { index: 5 }),
    firstName: attr('First_name', { index: 6 }),
    middleName: attr('Middle_name', { index: 7 }),
    phone: attr('Phone', { index: 8 }),
    phoneWork: attr('Phone_work', { index: 9 }),
    phoneMobile: attr('Phone_mobile', { index: 10 }),
    position: attr('Position', { index: 11 }),
    department: attr('Department', { index: 12 }),
    photo: attr('Photo', { index: 13 }),
    thumbnail: attr('Thumbnail', { index: 14 }),
    dtCreated: attr('Dt_created', { index: 15 }),
    dtLocked: attr('Dt_locked', { index: 16 }),
    dtModified: attr('Dt_modified', { index: 17 }),
    dtLastLogin: attr('Dt_lastlogin', { index: 18 }),
    fullName: attr('Full_name', { index: 19 }),
    shortName: attr('Short_name', { index: 20 })
  });

  modelClass.defineProjection('usrL', 'data-line-proto-one-usr', {
    login: attr('Login', { index: 0 }),
    password: attr('Password', { index: 1 }),
    locked: attr('Locked', { index: 2 }),
    email: attr('Email', { index: 3 }),
    domain: attr('Domain', { index: 4 }),
    lastName: attr('Last_name', { index: 5 }),
    firstName: attr('First_name', { index: 6 }),
    middleName: attr('Middle_name', { index: 7 }),
    phone: attr('Phone', { index: 8 }),
    phoneWork: attr('Phone_work', { index: 9 }),
    phoneMobile: attr('Phone_mobile', { index: 10 }),
    position: attr('Position', { index: 11 }),
    department: attr('Department', { index: 12 }),
    photo: attr('Photo', { index: 13 }),
    thumbnail: attr('Thumbnail', { index: 14 }),
    dtCreated: attr('Dt_created', { index: 15 }),
    dtLocked: attr('Dt_locked', { index: 16 }),
    dtModified: attr('Dt_modified', { index: 17 }),
    dtLastLogin: attr('Dt_lastlogin', { index: 18 }),
    fullName: attr('Full_name', { index: 19 }),
    shortName: attr('Short_name', { index: 20 })
  });
};
