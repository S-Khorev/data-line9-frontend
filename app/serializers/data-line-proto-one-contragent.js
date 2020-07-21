import { Serializer as contragentSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-contragent';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(contragentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
