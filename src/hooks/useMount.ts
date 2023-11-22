import { useEffect } from 'react';

/**
 * 组件加载时执行
 * @param fn
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
