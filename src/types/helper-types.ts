export type StateObject<StateName extends string, StateType> = {
  [K in StateName as `${K}`]: StateType;
} & {
  [K in StateName as `set${Capitalize<K>}`]: React.Dispatch<
    React.SetStateAction<StateType>
  >;
};
