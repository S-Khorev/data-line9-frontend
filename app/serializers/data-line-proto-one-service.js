import { Serializer as serviceSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-service';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(serviceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
