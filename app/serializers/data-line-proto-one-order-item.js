import { Serializer as order_itemSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-order-item';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(order_itemSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
