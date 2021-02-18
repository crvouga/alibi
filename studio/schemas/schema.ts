import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import showcase from "./showcase";
import socialMedia from "./social-media";
import video from "./video";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([showcase, socialMedia, video]),
});