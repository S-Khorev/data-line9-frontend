import { Serializer as resource_characteristicSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-resource-characteristic';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_characteristicSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
