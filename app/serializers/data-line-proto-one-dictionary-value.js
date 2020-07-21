import { Serializer as dictionary_valueSerializer } from
  '../mixins/regenerated/serializers/data-line-proto-one-dictionary-value';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(dictionary_valueSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
