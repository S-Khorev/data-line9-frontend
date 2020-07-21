import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('data-line-data-line9-cardinality-type-l');
  this.route('data-line-data-line9-cardinality-type-e',
  { path: 'data-line-data-line9-cardinality-type-e/:id' });
  this.route('data-line-data-line9-cardinality-type-e.new',
  { path: 'data-line-data-line9-cardinality-type-e/new' });
  this.route('data-line-data-line9-catalog-l');
  this.route('data-line-data-line9-catalog-e',
  { path: 'data-line-data-line9-catalog-e/:id' });
  this.route('data-line-data-line9-catalog-e.new',
  { path: 'data-line-data-line9-catalog-e/new' });
  this.route('data-line-data-line9-characteristic-type-l');
  this.route('data-line-data-line9-characteristic-type-e',
  { path: 'data-line-data-line9-characteristic-type-e/:id' });
  this.route('data-line-data-line9-characteristic-type-e.new',
  { path: 'data-line-data-line9-characteristic-type-e/new' });
  this.route('data-line-data-line9-contragent-l');
  this.route('data-line-data-line9-contragent-e',
  { path: 'data-line-data-line9-contragent-e/:id' });
  this.route('data-line-data-line9-contragent-e.new',
  { path: 'data-line-data-line9-contragent-e/new' });
  this.route('data-line-data-line9-customer-acl-l');
  this.route('data-line-data-line9-customer-acl-e',
  { path: 'data-line-data-line9-customer-acl-e/:id' });
  this.route('data-line-data-line9-customer-acl-e.new',
  { path: 'data-line-data-line9-customer-acl-e/new' });
  this.route('data-line-data-line9-customer-l');
  this.route('data-line-data-line9-customer-e',
  { path: 'data-line-data-line9-customer-e/:id' });
  this.route('data-line-data-line9-customer-e.new',
  { path: 'data-line-data-line9-customer-e/new' });
  this.route('data-line-data-line9-dba-l');
  this.route('data-line-data-line9-dba-e',
  { path: 'data-line-data-line9-dba-e/:id' });
  this.route('data-line-data-line9-dba-e.new',
  { path: 'data-line-data-line9-dba-e/new' });
  this.route('data-line-data-line9-dictionary-l');
  this.route('data-line-data-line9-dictionary-e',
  { path: 'data-line-data-line9-dictionary-e/:id' });
  this.route('data-line-data-line9-dictionary-e.new',
  { path: 'data-line-data-line9-dictionary-e/new' });
  this.route('data-line-data-line9-dictionary-value-l');
  this.route('data-line-data-line9-dictionary-value-e',
  { path: 'data-line-data-line9-dictionary-value-e/:id' });
  this.route('data-line-data-line9-dictionary-value-e.new',
  { path: 'data-line-data-line9-dictionary-value-e/new' });
  this.route('data-line-data-line9-grp-l');
  this.route('data-line-data-line9-grp-e',
  { path: 'data-line-data-line9-grp-e/:id' });
  this.route('data-line-data-line9-grp-e.new',
  { path: 'data-line-data-line9-grp-e/new' });
  this.route('data-line-data-line9-order-item-l');
  this.route('data-line-data-line9-order-item-e',
  { path: 'data-line-data-line9-order-item-e/:id' });
  this.route('data-line-data-line9-order-item-e.new',
  { path: 'data-line-data-line9-order-item-e/new' });
  this.route('data-line-data-line9-order-state-l');
  this.route('data-line-data-line9-order-state-e',
  { path: 'data-line-data-line9-order-state-e/:id' });
  this.route('data-line-data-line9-order-state-e.new',
  { path: 'data-line-data-line9-order-state-e/new' });
  this.route('data-line-data-line9-product-catalog-l');
  this.route('data-line-data-line9-product-catalog-e',
  { path: 'data-line-data-line9-product-catalog-e/:id' });
  this.route('data-line-data-line9-product-catalog-e.new',
  { path: 'data-line-data-line9-product-catalog-e/new' });
  this.route('data-line-data-line9-resource-characteristic-l');
  this.route('data-line-data-line9-resource-characteristic-e',
  { path: 'data-line-data-line9-resource-characteristic-e/:id' });
  this.route('data-line-data-line9-resource-characteristic-e.new',
  { path: 'data-line-data-line9-resource-characteristic-e/new' });
  this.route('data-line-data-line9-resource-characteristic-log-l');
  this.route('data-line-data-line9-resource-characteristic-log-e',
  { path: 'data-line-data-line9-resource-characteristic-log-e/:id' });
  this.route('data-line-data-line9-resource-characteristic-log-e.new',
  { path: 'data-line-data-line9-resource-characteristic-log-e/new' });
  this.route('data-line-data-line9-resource-common-l');
  this.route('data-line-data-line9-resource-common-e',
  { path: 'data-line-data-line9-resource-common-e/:id' });
  this.route('data-line-data-line9-resource-common-e.new',
  { path: 'data-line-data-line9-resource-common-e/new' });
  this.route('data-line-data-line9-resource-l');
  this.route('data-line-data-line9-resource-e',
  { path: 'data-line-data-line9-resource-e/:id' });
  this.route('data-line-data-line9-resource-e.new',
  { path: 'data-line-data-line9-resource-e/new' });
  this.route('data-line-data-line9-resource-log-l');
  this.route('data-line-data-line9-resource-log-e',
  { path: 'data-line-data-line9-resource-log-e/:id' });
  this.route('data-line-data-line9-resource-log-e.new',
  { path: 'data-line-data-line9-resource-log-e/new' });
  this.route('data-line-data-line9-resource-shared-l');
  this.route('data-line-data-line9-resource-shared-e',
  { path: 'data-line-data-line9-resource-shared-e/:id' });
  this.route('data-line-data-line9-resource-shared-e.new',
  { path: 'data-line-data-line9-resource-shared-e/new' });
  this.route('data-line-data-line9-resource-spec-characteristic-l');
  this.route('data-line-data-line9-resource-spec-characteristic-e',
  { path: 'data-line-data-line9-resource-spec-characteristic-e/:id' });
  this.route('data-line-data-line9-resource-spec-characteristic-e.new',
  { path: 'data-line-data-line9-resource-spec-characteristic-e/new' });
  this.route('data-line-data-line9-resource-spec-l');
  this.route('data-line-data-line9-resource-spec-e',
  { path: 'data-line-data-line9-resource-spec-e/:id' });
  this.route('data-line-data-line9-resource-spec-e.new',
  { path: 'data-line-data-line9-resource-spec-e/new' });
  this.route('data-line-data-line9-resource-usage-spec-l');
  this.route('data-line-data-line9-resource-usage-spec-e',
  { path: 'data-line-data-line9-resource-usage-spec-e/:id' });
  this.route('data-line-data-line9-resource-usage-spec-e.new',
  { path: 'data-line-data-line9-resource-usage-spec-e/new' });
  this.route('data-line-data-line9-role-l');
  this.route('data-line-data-line9-role-e',
  { path: 'data-line-data-line9-role-e/:id' });
  this.route('data-line-data-line9-role-e.new',
  { path: 'data-line-data-line9-role-e/new' });
  this.route('data-line-data-line9-service-characteristic-l');
  this.route('data-line-data-line9-service-characteristic-e',
  { path: 'data-line-data-line9-service-characteristic-e/:id' });
  this.route('data-line-data-line9-service-characteristic-e.new',
  { path: 'data-line-data-line9-service-characteristic-e/new' });
  this.route('data-line-data-line9-service-characteristic-log-l');
  this.route('data-line-data-line9-service-characteristic-log-e',
  { path: 'data-line-data-line9-service-characteristic-log-e/:id' });
  this.route('data-line-data-line9-service-characteristic-log-e.new',
  { path: 'data-line-data-line9-service-characteristic-log-e/new' });
  this.route('data-line-data-line9-service-l');
  this.route('data-line-data-line9-service-e',
  { path: 'data-line-data-line9-service-e/:id' });
  this.route('data-line-data-line9-service-e.new',
  { path: 'data-line-data-line9-service-e/new' });
  this.route('data-line-data-line9-service-log-l');
  this.route('data-line-data-line9-service-log-e',
  { path: 'data-line-data-line9-service-log-e/:id' });
  this.route('data-line-data-line9-service-log-e.new',
  { path: 'data-line-data-line9-service-log-e/new' });
  this.route('data-line-data-line9-service-order-l');
  this.route('data-line-data-line9-service-order-e',
  { path: 'data-line-data-line9-service-order-e/:id' });
  this.route('data-line-data-line9-service-order-e.new',
  { path: 'data-line-data-line9-service-order-e/new' });
  this.route('data-line-data-line9-service-spec-acl-l');
  this.route('data-line-data-line9-service-spec-acl-e',
  { path: 'data-line-data-line9-service-spec-acl-e/:id' });
  this.route('data-line-data-line9-service-spec-acl-e.new',
  { path: 'data-line-data-line9-service-spec-acl-e/new' });
  this.route('data-line-data-line9-service-spec-characteristic-l');
  this.route('data-line-data-line9-service-spec-characteristic-e',
  { path: 'data-line-data-line9-service-spec-characteristic-e/:id' });
  this.route('data-line-data-line9-service-spec-characteristic-e.new',
  { path: 'data-line-data-line9-service-spec-characteristic-e/new' });
  this.route('data-line-data-line9-service-spec-l');
  this.route('data-line-data-line9-service-spec-e',
  { path: 'data-line-data-line9-service-spec-e/:id' });
  this.route('data-line-data-line9-service-spec-e.new',
  { path: 'data-line-data-line9-service-spec-e/new' });
  this.route('data-line-data-line9-service-state-l');
  this.route('data-line-data-line9-service-state-e',
  { path: 'data-line-data-line9-service-state-e/:id' });
  this.route('data-line-data-line9-service-state-e.new',
  { path: 'data-line-data-line9-service-state-e/new' });
  this.route('data-line-data-line9-service-usage-spec-l');
  this.route('data-line-data-line9-service-usage-spec-e',
  { path: 'data-line-data-line9-service-usage-spec-e/:id' });
  this.route('data-line-data-line9-service-usage-spec-e.new',
  { path: 'data-line-data-line9-service-usage-spec-e/new' });
  this.route('data-line-data-line9-user-group-l');
  this.route('data-line-data-line9-user-group-e',
  { path: 'data-line-data-line9-user-group-e/:id' });
  this.route('data-line-data-line9-user-group-e.new',
  { path: 'data-line-data-line9-user-group-e/new' });
  this.route('data-line-data-line9-user-resource-spec-l');
  this.route('data-line-data-line9-user-resource-spec-e',
  { path: 'data-line-data-line9-user-resource-spec-e/:id' });
  this.route('data-line-data-line9-user-resource-spec-e.new',
  { path: 'data-line-data-line9-user-resource-spec-e/new' });
  this.route('data-line-data-line9-user-role-l');
  this.route('data-line-data-line9-user-role-e',
  { path: 'data-line-data-line9-user-role-e/:id' });
  this.route('data-line-data-line9-user-role-e.new',
  { path: 'data-line-data-line9-user-role-e/new' });
  this.route('data-line-data-line9-user-service-order-l');
  this.route('data-line-data-line9-user-service-order-e',
  { path: 'data-line-data-line9-user-service-order-e/:id' });
  this.route('data-line-data-line9-user-service-order-e.new',
  { path: 'data-line-data-line9-user-service-order-e/new' });
  this.route('data-line-data-line9-user-service-spec-l');
  this.route('data-line-data-line9-user-service-spec-e',
  { path: 'data-line-data-line9-user-service-spec-e/:id' });
  this.route('data-line-data-line9-user-service-spec-e.new',
  { path: 'data-line-data-line9-user-service-spec-e/new' });
  this.route('data-line-data-line9-usr-l');
  this.route('data-line-data-line9-usr-e',
  { path: 'data-line-data-line9-usr-e/:id' });
  this.route('data-line-data-line9-usr-e.new',
  { path: 'data-line-data-line9-usr-e/new' });
});

export default Router;
