import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-proto-one-cardinality-type', 'Unit | Model | data-line-proto-one-cardinality-type', {
  // Specify the other units that are required for this test.
  needs: [
    'model:data-line-proto-one-cardinality-type',
    'model:data-line-proto-one-catalog',
    'model:data-line-proto-one-characteristic-type',
    'model:data-line-proto-one-contragent',
    'model:data-line-proto-one-customer-acl',
    'model:data-line-proto-one-customer',
    'model:data-line-proto-one-dba',
    'model:data-line-proto-one-dictionary-value',
    'model:data-line-proto-one-dictionary',
    'model:data-line-proto-one-grp',
    'model:data-line-proto-one-order-item',
    'model:data-line-proto-one-order-state',
    'model:data-line-proto-one-product-catalog',
    'model:data-line-proto-one-resource-characteristic-log',
    'model:data-line-proto-one-resource-characteristic',
    'model:data-line-proto-one-resource-common',
    'model:data-line-proto-one-resource-log',
    'model:data-line-proto-one-resource-shared',
    'model:data-line-proto-one-resource-spec-characteristic',
    'model:data-line-proto-one-resource-spec',
    'model:data-line-proto-one-resource-usage-spec',
    'model:data-line-proto-one-resource',
    'model:data-line-proto-one-role',
    'model:data-line-proto-one-service-characteristic-log',
    'model:data-line-proto-one-service-characteristic',
    'model:data-line-proto-one-service-log',
    'model:data-line-proto-one-service-order',
    'model:data-line-proto-one-service-spec-acl',
    'model:data-line-proto-one-service-spec-characteristic',
    'model:data-line-proto-one-service-spec',
    'model:data-line-proto-one-service-state',
    'model:data-line-proto-one-service-usage-spec',
    'model:data-line-proto-one-service',
    'model:data-line-proto-one-user-group',
    'model:data-line-proto-one-user-resource-spec',
    'model:data-line-proto-one-user-role',
    'model:data-line-proto-one-user-service-order',
    'model:data-line-proto-one-user-service-spec',
    'model:data-line-proto-one-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
