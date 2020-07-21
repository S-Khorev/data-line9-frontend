import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import DataLineDataLine9cardinality_typeLForm from './forms/data-line-data-line9-cardinality-type-l';
import DataLineDataLine9catalogLForm from './forms/data-line-data-line9-catalog-l';
import DataLineDataLine9characteristic_typeLForm from './forms/data-line-data-line9-characteristic-type-l';
import DataLineDataLine9contragentLForm from './forms/data-line-data-line9-contragent-l';
import DataLineDataLine9customer_aclLForm from './forms/data-line-data-line9-customer-acl-l';
import DataLineDataLine9customerLForm from './forms/data-line-data-line9-customer-l';
import DataLineDataLine9dbaLForm from './forms/data-line-data-line9-dba-l';
import DataLineDataLine9dictionaryLForm from './forms/data-line-data-line9-dictionary-l';
import DataLineDataLine9dictionary_valueLForm from './forms/data-line-data-line9-dictionary-value-l';
import DataLineDataLine9grpLForm from './forms/data-line-data-line9-grp-l';
import DataLineDataLine9order_itemLForm from './forms/data-line-data-line9-order-item-l';
import DataLineDataLine9order_stateLForm from './forms/data-line-data-line9-order-state-l';
import DataLineDataLine9product_catalogLForm from './forms/data-line-data-line9-product-catalog-l';
import DataLineDataLine9resource_characteristicLForm from './forms/data-line-data-line9-resource-characteristic-l';
import DataLineDataLine9resource_characteristic_logLForm from './forms/data-line-data-line9-resource-characteristic-log-l';
import DataLineDataLine9resource_commonLForm from './forms/data-line-data-line9-resource-common-l';
import DataLineDataLine9resourceLForm from './forms/data-line-data-line9-resource-l';
import DataLineDataLine9resource_logLForm from './forms/data-line-data-line9-resource-log-l';
import DataLineDataLine9resource_sharedLForm from './forms/data-line-data-line9-resource-shared-l';
import DataLineDataLine9resource_spec_characteristicLForm from './forms/data-line-data-line9-resource-spec-characteristic-l';
import DataLineDataLine9resource_specLForm from './forms/data-line-data-line9-resource-spec-l';
import DataLineDataLine9resource_usage_specLForm from './forms/data-line-data-line9-resource-usage-spec-l';
import DataLineDataLine9roleLForm from './forms/data-line-data-line9-role-l';
import DataLineDataLine9service_characteristicLForm from './forms/data-line-data-line9-service-characteristic-l';
import DataLineDataLine9service_characteristic_logLForm from './forms/data-line-data-line9-service-characteristic-log-l';
import DataLineDataLine9serviceLForm from './forms/data-line-data-line9-service-l';
import DataLineDataLine9service_logLForm from './forms/data-line-data-line9-service-log-l';
import DataLineDataLine9service_orderLForm from './forms/data-line-data-line9-service-order-l';
import DataLineDataLine9service_spec_aclLForm from './forms/data-line-data-line9-service-spec-acl-l';
import DataLineDataLine9service_spec_characteristicLForm from './forms/data-line-data-line9-service-spec-characteristic-l';
import DataLineDataLine9service_specLForm from './forms/data-line-data-line9-service-spec-l';
import DataLineDataLine9service_stateLForm from './forms/data-line-data-line9-service-state-l';
import DataLineDataLine9service_usage_specLForm from './forms/data-line-data-line9-service-usage-spec-l';
import DataLineDataLine9user_groupLForm from './forms/data-line-data-line9-user-group-l';
import DataLineDataLine9user_resource_specLForm from './forms/data-line-data-line9-user-resource-spec-l';
import DataLineDataLine9user_roleLForm from './forms/data-line-data-line9-user-role-l';
import DataLineDataLine9user_service_orderLForm from './forms/data-line-data-line9-user-service-order-l';
import DataLineDataLine9user_service_specLForm from './forms/data-line-data-line9-user-service-spec-l';
import DataLineDataLine9usrLForm from './forms/data-line-data-line9-usr-l';
import DataLineDataLine9cardinality_typeEForm from './forms/data-line-data-line9-cardinality-type-e';
import DataLineDataLine9catalogEForm from './forms/data-line-data-line9-catalog-e';
import DataLineDataLine9characteristic_typeEForm from './forms/data-line-data-line9-characteristic-type-e';
import DataLineDataLine9contragentEForm from './forms/data-line-data-line9-contragent-e';
import DataLineDataLine9customer_aclEForm from './forms/data-line-data-line9-customer-acl-e';
import DataLineDataLine9customerEForm from './forms/data-line-data-line9-customer-e';
import DataLineDataLine9dbaEForm from './forms/data-line-data-line9-dba-e';
import DataLineDataLine9dictionaryEForm from './forms/data-line-data-line9-dictionary-e';
import DataLineDataLine9dictionary_valueEForm from './forms/data-line-data-line9-dictionary-value-e';
import DataLineDataLine9grpEForm from './forms/data-line-data-line9-grp-e';
import DataLineDataLine9order_itemEForm from './forms/data-line-data-line9-order-item-e';
import DataLineDataLine9order_stateEForm from './forms/data-line-data-line9-order-state-e';
import DataLineDataLine9product_catalogEForm from './forms/data-line-data-line9-product-catalog-e';
import DataLineDataLine9resource_characteristicEForm from './forms/data-line-data-line9-resource-characteristic-e';
import DataLineDataLine9resource_characteristic_logEForm from './forms/data-line-data-line9-resource-characteristic-log-e';
import DataLineDataLine9resource_commonEForm from './forms/data-line-data-line9-resource-common-e';
import DataLineDataLine9resourceEForm from './forms/data-line-data-line9-resource-e';
import DataLineDataLine9resource_logEForm from './forms/data-line-data-line9-resource-log-e';
import DataLineDataLine9resource_sharedEForm from './forms/data-line-data-line9-resource-shared-e';
import DataLineDataLine9resource_spec_characteristicEForm from './forms/data-line-data-line9-resource-spec-characteristic-e';
import DataLineDataLine9resource_specEForm from './forms/data-line-data-line9-resource-spec-e';
import DataLineDataLine9resource_usage_specEForm from './forms/data-line-data-line9-resource-usage-spec-e';
import DataLineDataLine9roleEForm from './forms/data-line-data-line9-role-e';
import DataLineDataLine9service_characteristicEForm from './forms/data-line-data-line9-service-characteristic-e';
import DataLineDataLine9service_characteristic_logEForm from './forms/data-line-data-line9-service-characteristic-log-e';
import DataLineDataLine9serviceEForm from './forms/data-line-data-line9-service-e';
import DataLineDataLine9service_logEForm from './forms/data-line-data-line9-service-log-e';
import DataLineDataLine9service_orderEForm from './forms/data-line-data-line9-service-order-e';
import DataLineDataLine9service_spec_aclEForm from './forms/data-line-data-line9-service-spec-acl-e';
import DataLineDataLine9service_spec_characteristicEForm from './forms/data-line-data-line9-service-spec-characteristic-e';
import DataLineDataLine9service_specEForm from './forms/data-line-data-line9-service-spec-e';
import DataLineDataLine9service_stateEForm from './forms/data-line-data-line9-service-state-e';
import DataLineDataLine9service_usage_specEForm from './forms/data-line-data-line9-service-usage-spec-e';
import DataLineDataLine9user_groupEForm from './forms/data-line-data-line9-user-group-e';
import DataLineDataLine9user_resource_specEForm from './forms/data-line-data-line9-user-resource-spec-e';
import DataLineDataLine9user_roleEForm from './forms/data-line-data-line9-user-role-e';
import DataLineDataLine9user_service_orderEForm from './forms/data-line-data-line9-user-service-order-e';
import DataLineDataLine9user_service_specEForm from './forms/data-line-data-line9-user-service-spec-e';
import DataLineDataLine9usrEForm from './forms/data-line-data-line9-usr-e';
import DataLineProtoOneCardinalityTypeModel from './models/data-line-proto-one-cardinality-type';
import DataLineProtoOneCatalogModel from './models/data-line-proto-one-catalog';
import DataLineProtoOneCharacteristicTypeModel from './models/data-line-proto-one-characteristic-type';
import DataLineProtoOneContragentModel from './models/data-line-proto-one-contragent';
import DataLineProtoOneCustomerAclModel from './models/data-line-proto-one-customer-acl';
import DataLineProtoOneCustomerModel from './models/data-line-proto-one-customer';
import DataLineProtoOneDbaModel from './models/data-line-proto-one-dba';
import DataLineProtoOneDictionaryValueModel from './models/data-line-proto-one-dictionary-value';
import DataLineProtoOneDictionaryModel from './models/data-line-proto-one-dictionary';
import DataLineProtoOneGrpModel from './models/data-line-proto-one-grp';
import DataLineProtoOneOrderItemModel from './models/data-line-proto-one-order-item';
import DataLineProtoOneOrderStateModel from './models/data-line-proto-one-order-state';
import DataLineProtoOneProductCatalogModel from './models/data-line-proto-one-product-catalog';
import DataLineProtoOneResourceCharacteristicLogModel from './models/data-line-proto-one-resource-characteristic-log';
import DataLineProtoOneResourceCharacteristicModel from './models/data-line-proto-one-resource-characteristic';
import DataLineProtoOneResourceCommonModel from './models/data-line-proto-one-resource-common';
import DataLineProtoOneResourceLogModel from './models/data-line-proto-one-resource-log';
import DataLineProtoOneResourceSharedModel from './models/data-line-proto-one-resource-shared';
import DataLineProtoOneResourceSpecCharacteristicModel from './models/data-line-proto-one-resource-spec-characteristic';
import DataLineProtoOneResourceSpecModel from './models/data-line-proto-one-resource-spec';
import DataLineProtoOneResourceUsageSpecModel from './models/data-line-proto-one-resource-usage-spec';
import DataLineProtoOneResourceModel from './models/data-line-proto-one-resource';
import DataLineProtoOneRoleModel from './models/data-line-proto-one-role';
import DataLineProtoOneServiceCharacteristicLogModel from './models/data-line-proto-one-service-characteristic-log';
import DataLineProtoOneServiceCharacteristicModel from './models/data-line-proto-one-service-characteristic';
import DataLineProtoOneServiceLogModel from './models/data-line-proto-one-service-log';
import DataLineProtoOneServiceOrderModel from './models/data-line-proto-one-service-order';
import DataLineProtoOneServiceSpecAclModel from './models/data-line-proto-one-service-spec-acl';
import DataLineProtoOneServiceSpecCharacteristicModel from './models/data-line-proto-one-service-spec-characteristic';
import DataLineProtoOneServiceSpecModel from './models/data-line-proto-one-service-spec';
import DataLineProtoOneServiceStateModel from './models/data-line-proto-one-service-state';
import DataLineProtoOneServiceUsageSpecModel from './models/data-line-proto-one-service-usage-spec';
import DataLineProtoOneServiceModel from './models/data-line-proto-one-service';
import DataLineProtoOneUserGroupModel from './models/data-line-proto-one-user-group';
import DataLineProtoOneUserResourceSpecModel from './models/data-line-proto-one-user-resource-spec';
import DataLineProtoOneUserRoleModel from './models/data-line-proto-one-user-role';
import DataLineProtoOneUserServiceOrderModel from './models/data-line-proto-one-user-service-order';
import DataLineProtoOneUserServiceSpecModel from './models/data-line-proto-one-user-service-spec';
import DataLineProtoOneUsrModel from './models/data-line-proto-one-usr';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'data-line-proto-one-cardinality-type': DataLineProtoOneCardinalityTypeModel,
    'data-line-proto-one-catalog': DataLineProtoOneCatalogModel,
    'data-line-proto-one-characteristic-type': DataLineProtoOneCharacteristicTypeModel,
    'data-line-proto-one-contragent': DataLineProtoOneContragentModel,
    'data-line-proto-one-customer-acl': DataLineProtoOneCustomerAclModel,
    'data-line-proto-one-customer': DataLineProtoOneCustomerModel,
    'data-line-proto-one-dba': DataLineProtoOneDbaModel,
    'data-line-proto-one-dictionary-value': DataLineProtoOneDictionaryValueModel,
    'data-line-proto-one-dictionary': DataLineProtoOneDictionaryModel,
    'data-line-proto-one-grp': DataLineProtoOneGrpModel,
    'data-line-proto-one-order-item': DataLineProtoOneOrderItemModel,
    'data-line-proto-one-order-state': DataLineProtoOneOrderStateModel,
    'data-line-proto-one-product-catalog': DataLineProtoOneProductCatalogModel,
    'data-line-proto-one-resource-characteristic-log': DataLineProtoOneResourceCharacteristicLogModel,
    'data-line-proto-one-resource-characteristic': DataLineProtoOneResourceCharacteristicModel,
    'data-line-proto-one-resource-common': DataLineProtoOneResourceCommonModel,
    'data-line-proto-one-resource-log': DataLineProtoOneResourceLogModel,
    'data-line-proto-one-resource-shared': DataLineProtoOneResourceSharedModel,
    'data-line-proto-one-resource-spec-characteristic': DataLineProtoOneResourceSpecCharacteristicModel,
    'data-line-proto-one-resource-spec': DataLineProtoOneResourceSpecModel,
    'data-line-proto-one-resource-usage-spec': DataLineProtoOneResourceUsageSpecModel,
    'data-line-proto-one-resource': DataLineProtoOneResourceModel,
    'data-line-proto-one-role': DataLineProtoOneRoleModel,
    'data-line-proto-one-service-characteristic-log': DataLineProtoOneServiceCharacteristicLogModel,
    'data-line-proto-one-service-characteristic': DataLineProtoOneServiceCharacteristicModel,
    'data-line-proto-one-service-log': DataLineProtoOneServiceLogModel,
    'data-line-proto-one-service-order': DataLineProtoOneServiceOrderModel,
    'data-line-proto-one-service-spec-acl': DataLineProtoOneServiceSpecAclModel,
    'data-line-proto-one-service-spec-characteristic': DataLineProtoOneServiceSpecCharacteristicModel,
    'data-line-proto-one-service-spec': DataLineProtoOneServiceSpecModel,
    'data-line-proto-one-service-state': DataLineProtoOneServiceStateModel,
    'data-line-proto-one-service-usage-spec': DataLineProtoOneServiceUsageSpecModel,
    'data-line-proto-one-service': DataLineProtoOneServiceModel,
    'data-line-proto-one-user-group': DataLineProtoOneUserGroupModel,
    'data-line-proto-one-user-resource-spec': DataLineProtoOneUserResourceSpecModel,
    'data-line-proto-one-user-role': DataLineProtoOneUserRoleModel,
    'data-line-proto-one-user-service-order': DataLineProtoOneUserServiceOrderModel,
    'data-line-proto-one-user-service-spec': DataLineProtoOneUserServiceSpecModel,
    'data-line-proto-one-usr': DataLineProtoOneUsrModel
  },

  'application-name': 'Proto one',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proto one',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proto one',
          title: 'Proto one'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'proto-one': {
          caption: 'ProtoOne',
          title: 'ProtoOne',
          'data-line-data-line9-dictionary-l': {
            caption: 'Dictionary',
            title: ''
          },
          'data-line-data-line9-user-service-spec-l': {
            caption: 'User_service_spec',
            title: ''
          },
          'data-line-data-line9-resource-characteristic-l': {
            caption: 'Resource_characteristic',
            title: ''
          },
          'data-line-data-line9-user-group-l': {
            caption: 'User_group',
            title: ''
          },
          'data-line-data-line9-resource-spec-l': {
            caption: 'Resource_spec',
            title: ''
          },
          'data-line-data-line9-resource-spec-characteristic-l': {
            caption: 'Resource_spec_characteristic',
            title: ''
          },
          'data-line-data-line9-service-l': {
            caption: 'Service',
            title: ''
          },
          'data-line-data-line9-product-catalog-l': {
            caption: 'Product_catalog',
            title: ''
          },
          'data-line-data-line9-role-l': {
            caption: 'Role',
            title: ''
          },
          'data-line-data-line9-order-state-l': {
            caption: 'Order_state',
            title: ''
          },
          'data-line-data-line9-customer-l': {
            caption: 'Customer',
            title: ''
          },
          'data-line-data-line9-service-characteristic-l': {
            caption: 'Service_characteristic',
            title: ''
          },
          'data-line-data-line9-resource-shared-l': {
            caption: 'Resource_shared',
            title: ''
          },
          'data-line-data-line9-service-spec-characteristic-l': {
            caption: 'Service_spec_characteristic',
            title: ''
          },
          'data-line-data-line9-resource-common-l': {
            caption: 'Resource_common',
            title: ''
          },
          'data-line-data-line9-customer-acl-l': {
            caption: 'Customer_acl',
            title: ''
          },
          'data-line-data-line9-usr-l': {
            caption: 'Usr',
            title: ''
          },
          'data-line-data-line9-order-item-l': {
            caption: 'Order_item',
            title: ''
          },
          'data-line-data-line9-service-spec-l': {
            caption: 'Service_spec',
            title: ''
          },
          'data-line-data-line9-service-state-l': {
            caption: 'Service_state',
            title: ''
          },
          'data-line-data-line9-user-service-order-l': {
            caption: 'User_service_order',
            title: ''
          },
          'data-line-data-line9-contragent-l': {
            caption: 'Contragent',
            title: ''
          },
          'data-line-data-line9-catalog-l': {
            caption: 'Catalog',
            title: ''
          },
          'data-line-data-line9-resource-characteristic-log-l': {
            caption: 'Resource_characteristic_log',
            title: ''
          },
          'data-line-data-line9-resource-log-l': {
            caption: 'Resource_log',
            title: ''
          },
          'data-line-data-line9-grp-l': {
            caption: 'Grp',
            title: ''
          },
          'data-line-data-line9-resource-l': {
            caption: 'Resource',
            title: ''
          },
          'data-line-data-line9-user-role-l': {
            caption: 'User_role',
            title: ''
          },
          'data-line-data-line9-service-spec-acl-l': {
            caption: 'Service_spec_acl',
            title: ''
          },
          'data-line-data-line9-service-characteristic-log-l': {
            caption: 'Service_characteristic_log',
            title: ''
          },
          'data-line-data-line9-service-log-l': {
            caption: 'Service_log',
            title: ''
          },
          'data-line-data-line9-resource-usage-spec-l': {
            caption: 'Resource_usage_spec',
            title: ''
          },
          'data-line-data-line9-cardinality-type-l': {
            caption: 'Cardinality_type',
            title: ''
          },
          'data-line-data-line9-service-usage-spec-l': {
            caption: 'Service_usage_spec',
            title: ''
          },
          'data-line-data-line9-user-resource-spec-l': {
            caption: 'User_resource_spec',
            title: ''
          },
          'data-line-data-line9-service-order-l': {
            caption: 'Service_order',
            title: ''
          },
          'data-line-data-line9-characteristic-type-l': {
            caption: 'Characteristic_type',
            title: ''
          },
          'data-line-data-line9-dictionary-value-l': {
            caption: 'Dictionary_value',
            title: ''
          },
          'data-line-data-line9-dba-l': {
            caption: 'Dba',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'data-line-data-line9-cardinality-type-l': DataLineDataLine9cardinality_typeLForm,
    'data-line-data-line9-catalog-l': DataLineDataLine9catalogLForm,
    'data-line-data-line9-characteristic-type-l': DataLineDataLine9characteristic_typeLForm,
    'data-line-data-line9-contragent-l': DataLineDataLine9contragentLForm,
    'data-line-data-line9-customer-acl-l': DataLineDataLine9customer_aclLForm,
    'data-line-data-line9-customer-l': DataLineDataLine9customerLForm,
    'data-line-data-line9-dba-l': DataLineDataLine9dbaLForm,
    'data-line-data-line9-dictionary-l': DataLineDataLine9dictionaryLForm,
    'data-line-data-line9-dictionary-value-l': DataLineDataLine9dictionary_valueLForm,
    'data-line-data-line9-grp-l': DataLineDataLine9grpLForm,
    'data-line-data-line9-order-item-l': DataLineDataLine9order_itemLForm,
    'data-line-data-line9-order-state-l': DataLineDataLine9order_stateLForm,
    'data-line-data-line9-product-catalog-l': DataLineDataLine9product_catalogLForm,
    'data-line-data-line9-resource-characteristic-l': DataLineDataLine9resource_characteristicLForm,
    'data-line-data-line9-resource-characteristic-log-l': DataLineDataLine9resource_characteristic_logLForm,
    'data-line-data-line9-resource-common-l': DataLineDataLine9resource_commonLForm,
    'data-line-data-line9-resource-l': DataLineDataLine9resourceLForm,
    'data-line-data-line9-resource-log-l': DataLineDataLine9resource_logLForm,
    'data-line-data-line9-resource-shared-l': DataLineDataLine9resource_sharedLForm,
    'data-line-data-line9-resource-spec-characteristic-l': DataLineDataLine9resource_spec_characteristicLForm,
    'data-line-data-line9-resource-spec-l': DataLineDataLine9resource_specLForm,
    'data-line-data-line9-resource-usage-spec-l': DataLineDataLine9resource_usage_specLForm,
    'data-line-data-line9-role-l': DataLineDataLine9roleLForm,
    'data-line-data-line9-service-characteristic-l': DataLineDataLine9service_characteristicLForm,
    'data-line-data-line9-service-characteristic-log-l': DataLineDataLine9service_characteristic_logLForm,
    'data-line-data-line9-service-l': DataLineDataLine9serviceLForm,
    'data-line-data-line9-service-log-l': DataLineDataLine9service_logLForm,
    'data-line-data-line9-service-order-l': DataLineDataLine9service_orderLForm,
    'data-line-data-line9-service-spec-acl-l': DataLineDataLine9service_spec_aclLForm,
    'data-line-data-line9-service-spec-characteristic-l': DataLineDataLine9service_spec_characteristicLForm,
    'data-line-data-line9-service-spec-l': DataLineDataLine9service_specLForm,
    'data-line-data-line9-service-state-l': DataLineDataLine9service_stateLForm,
    'data-line-data-line9-service-usage-spec-l': DataLineDataLine9service_usage_specLForm,
    'data-line-data-line9-user-group-l': DataLineDataLine9user_groupLForm,
    'data-line-data-line9-user-resource-spec-l': DataLineDataLine9user_resource_specLForm,
    'data-line-data-line9-user-role-l': DataLineDataLine9user_roleLForm,
    'data-line-data-line9-user-service-order-l': DataLineDataLine9user_service_orderLForm,
    'data-line-data-line9-user-service-spec-l': DataLineDataLine9user_service_specLForm,
    'data-line-data-line9-usr-l': DataLineDataLine9usrLForm,
    'data-line-data-line9-cardinality-type-e': DataLineDataLine9cardinality_typeEForm,
    'data-line-data-line9-catalog-e': DataLineDataLine9catalogEForm,
    'data-line-data-line9-characteristic-type-e': DataLineDataLine9characteristic_typeEForm,
    'data-line-data-line9-contragent-e': DataLineDataLine9contragentEForm,
    'data-line-data-line9-customer-acl-e': DataLineDataLine9customer_aclEForm,
    'data-line-data-line9-customer-e': DataLineDataLine9customerEForm,
    'data-line-data-line9-dba-e': DataLineDataLine9dbaEForm,
    'data-line-data-line9-dictionary-e': DataLineDataLine9dictionaryEForm,
    'data-line-data-line9-dictionary-value-e': DataLineDataLine9dictionary_valueEForm,
    'data-line-data-line9-grp-e': DataLineDataLine9grpEForm,
    'data-line-data-line9-order-item-e': DataLineDataLine9order_itemEForm,
    'data-line-data-line9-order-state-e': DataLineDataLine9order_stateEForm,
    'data-line-data-line9-product-catalog-e': DataLineDataLine9product_catalogEForm,
    'data-line-data-line9-resource-characteristic-e': DataLineDataLine9resource_characteristicEForm,
    'data-line-data-line9-resource-characteristic-log-e': DataLineDataLine9resource_characteristic_logEForm,
    'data-line-data-line9-resource-common-e': DataLineDataLine9resource_commonEForm,
    'data-line-data-line9-resource-e': DataLineDataLine9resourceEForm,
    'data-line-data-line9-resource-log-e': DataLineDataLine9resource_logEForm,
    'data-line-data-line9-resource-shared-e': DataLineDataLine9resource_sharedEForm,
    'data-line-data-line9-resource-spec-characteristic-e': DataLineDataLine9resource_spec_characteristicEForm,
    'data-line-data-line9-resource-spec-e': DataLineDataLine9resource_specEForm,
    'data-line-data-line9-resource-usage-spec-e': DataLineDataLine9resource_usage_specEForm,
    'data-line-data-line9-role-e': DataLineDataLine9roleEForm,
    'data-line-data-line9-service-characteristic-e': DataLineDataLine9service_characteristicEForm,
    'data-line-data-line9-service-characteristic-log-e': DataLineDataLine9service_characteristic_logEForm,
    'data-line-data-line9-service-e': DataLineDataLine9serviceEForm,
    'data-line-data-line9-service-log-e': DataLineDataLine9service_logEForm,
    'data-line-data-line9-service-order-e': DataLineDataLine9service_orderEForm,
    'data-line-data-line9-service-spec-acl-e': DataLineDataLine9service_spec_aclEForm,
    'data-line-data-line9-service-spec-characteristic-e': DataLineDataLine9service_spec_characteristicEForm,
    'data-line-data-line9-service-spec-e': DataLineDataLine9service_specEForm,
    'data-line-data-line9-service-state-e': DataLineDataLine9service_stateEForm,
    'data-line-data-line9-service-usage-spec-e': DataLineDataLine9service_usage_specEForm,
    'data-line-data-line9-user-group-e': DataLineDataLine9user_groupEForm,
    'data-line-data-line9-user-resource-spec-e': DataLineDataLine9user_resource_specEForm,
    'data-line-data-line9-user-role-e': DataLineDataLine9user_roleEForm,
    'data-line-data-line9-user-service-order-e': DataLineDataLine9user_service_orderEForm,
    'data-line-data-line9-user-service-spec-e': DataLineDataLine9user_service_specEForm,
    'data-line-data-line9-usr-e': DataLineDataLine9usrEForm
  },

});

export default translations;
