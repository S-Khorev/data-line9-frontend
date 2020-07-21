import { Serializer as characteristic_typeSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-characteristic-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(characteristic_typeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
