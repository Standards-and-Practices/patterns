import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum PatternType {
  PATHWAY = "PATHWAY",
  EXPERIENCE = "EXPERIENCE",
  ACTIVITY = "ACTIVITY",
  LAYOUT = "LAYOUT",
  XBLOCK = "XBLOCK"
}

export enum LifecycleStatus {
  PROPOSED = "PROPOSED",
  DRAFT = "DRAFT",
  STANDARD = "STANDARD",
  BESTCURRENTPRACTICE = "BESTCURRENTPRACTICE",
  EXPERIMENTAL = "EXPERIMENTAL",
  HISTORIC = "HISTORIC",
  INFORMATIONAL = "INFORMATIONAL"
}



type EagerPattern = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pattern, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly problem?: string | null;
  readonly context?: string | null;
  readonly structure?: string | null;
  readonly contraindications?: (string | null)[] | null;
  readonly examples?: (string | null)[] | null;
  readonly references?: (string | null)[] | null;
  readonly forces?: (string | null)[] | null;
  readonly alsoKnowAs?: (string | null)[] | null;
  readonly applicability?: (string | null)[] | null;
  readonly status?: LifecycleStatus | keyof typeof LifecycleStatus | null;
  readonly author?: (string | null)[] | null;
  readonly DOI?: string | null;
  readonly history?: (string | null)[] | null;
  readonly parentOf?: (Pattern | null)[] | null;
  readonly childOf?: Pattern | null;
  readonly supercedes?: (Pattern | null)[] | null;
  readonly patternType?: PatternType | keyof typeof PatternType | null;
  readonly documentation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patternParentOfId?: string | null;
  readonly patternSupercedesId?: string | null;
}

type LazyPattern = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pattern, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly problem?: string | null;
  readonly context?: string | null;
  readonly structure?: string | null;
  readonly contraindications?: (string | null)[] | null;
  readonly examples?: (string | null)[] | null;
  readonly references?: (string | null)[] | null;
  readonly forces?: (string | null)[] | null;
  readonly alsoKnowAs?: (string | null)[] | null;
  readonly applicability?: (string | null)[] | null;
  readonly status?: LifecycleStatus | keyof typeof LifecycleStatus | null;
  readonly author?: (string | null)[] | null;
  readonly DOI?: string | null;
  readonly history?: (string | null)[] | null;
  readonly parentOf: AsyncCollection<Pattern>;
  readonly childOf: AsyncItem<Pattern | undefined>;
  readonly supercedes: AsyncCollection<Pattern>;
  readonly patternType?: PatternType | keyof typeof PatternType | null;
  readonly documentation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patternParentOfId?: string | null;
  readonly patternSupercedesId?: string | null;
}

export declare type Pattern = LazyLoading extends LazyLoadingDisabled ? EagerPattern : LazyPattern

export declare const Pattern: (new (init: ModelInit<Pattern>) => Pattern) & {
  copyOf(source: Pattern, mutator: (draft: MutableModel<Pattern>) => MutableModel<Pattern> | void): Pattern;
}