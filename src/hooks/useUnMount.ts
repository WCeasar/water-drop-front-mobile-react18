import { useEffect } from 'react';
import useLatest from './useLatest';

/**
 * 组件卸载时执行
 * @param fn
 */

const useUnMount = (fn: () => void) => {
  const ref = useLatest(fn);

  useEffect(() => () => ref.current?.(), []);
};

export default useUnMount;
