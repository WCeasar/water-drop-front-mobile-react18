import { useEffect } from 'react';
import useLatest from './useLatest';

const useUnMount = (fn: () => void) => {
  const ref = useLatest(fn);

  useEffect(() => () => ref?.(), []);
};

export default useUnMount;
