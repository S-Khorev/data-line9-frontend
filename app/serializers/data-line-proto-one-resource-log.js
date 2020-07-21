import { Serializer as resource_logSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-resource-log';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_logSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
