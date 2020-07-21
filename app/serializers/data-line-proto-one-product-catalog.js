import { Serializer as product_catalogSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-product-catalog';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(product_catalogSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
