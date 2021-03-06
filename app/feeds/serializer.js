import DS from "ember-data";
import Serializer from "nextfeed/application/serializer";

export default Serializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    folder: {
      desirialize: false,
      serialize: false
    }
  }
});
