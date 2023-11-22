import { useRef } from 'react';

/**
 * 获取最新的 value
 * @param val
 * @returns
 */
const useLatest = <T>(val: T) => {
  const ref = useRef(val);
  ref.current = val;

  return ref;
};

export default useLatest;
