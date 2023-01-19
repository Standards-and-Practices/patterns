// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PatternType = {
  "PATHWAY": "PATHWAY",
  "EXPERIENCE": "EXPERIENCE",
  "ACTIVITY": "ACTIVITY",
  "LAYOUT": "LAYOUT",
  "XBLOCK": "XBLOCK"
};

const LifecycleStatus = {
  "PROPOSED": "PROPOSED",
  "DRAFT": "DRAFT",
  "STANDARD": "STANDARD",
  "BESTCURRENTPRACTICE": "BESTCURRENTPRACTICE",
  "EXPERIMENTAL": "EXPERIMENTAL",
  "HISTORIC": "HISTORIC",
  "INFORMATIONAL": "INFORMATIONAL"
};

const { Pattern } = initSchema(schema);

export {
  Pattern,
  PatternType,
  LifecycleStatus
};