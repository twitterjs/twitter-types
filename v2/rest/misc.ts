// eslint-disable-next-line no-unused-vars
export type Without<FirstType, SecondType> = { [KeyType in Exclude<keyof FirstType, keyof SecondType>]?: never };

export type MergeExclusive<FirstType, SecondType> = FirstType | SecondType extends object
  ? (Without<FirstType, SecondType> & SecondType) | (Without<SecondType, FirstType> & FirstType)
  : FirstType | SecondType;
