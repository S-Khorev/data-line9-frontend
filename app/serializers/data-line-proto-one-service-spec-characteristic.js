import { Serializer as service_spec_characteristicSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-service-spec-characteristic';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_spec_characteristicSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
