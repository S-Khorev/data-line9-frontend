import { Serializer as grpSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-grp';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(grpSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
