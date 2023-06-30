import { useRef } from 'react';

const useLatest = <T>(val: T) => {
  const ref = useRef(val);
  ref.current = val;

  return ref.current;
};

export default useLatest;
