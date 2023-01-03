import { useEffect, useState } from 'react';

const filterMap = new Map<string | object, object>();

export interface IFilter<T> {
  setFilter: (key: keyof T, value: any) => void;
  resetFilter: () => void;
  filter: T;
}

export interface ConfigProps {
  key?: string;
}

export function useFilter<T extends object>(
  filters: T,
  config?: ConfigProps
): IFilter<T> {
  const data = filterMap.get(config?.key || filters) as T;

  const [filterState, setFilterState] = useState<T>(data || filters);

  /**
   * This will set the filter values in state
   * @param key based on key of your object
   * @param value
   */
  function setFilter(key: keyof T, value: any) {
    setFilterState((current) => ({ ...current, [key as string]: value }));
  }

  /**
   * This will reset the state values to default
   */
  const resetFilter = () => {
    setFilterState(filters);
  };

  /**
   *  if un-mounted. the state object will save to map
   */
  useEffect(
    () => () => {
      filterMap.set(config?.key || filters, filterState);
    },
    [filterState, filters, config?.key]
  );

  return {
    setFilter,
    resetFilter,
    filter: filterState,
  };
}
