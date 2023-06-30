import { useCallback, useState } from 'react';
import useMount from './useMount';

interface RequestType {
  params?: Record<string, string>;
  manual?: boolean;
  onSuccess?: (res: unknown) => void;
  onFail?: (err: unknown) => void;
}
const useRequest = (
  service: (params?: Record<string, string>) => Promise<unknown>,
  options: RequestType,
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState(false);

  const init = useCallback(
    (cueParams?: Record<string, string>) => {
      setLoading(true);
      return service(cueParams)
        .then((res) => {
          setData(res);
          setLoading(false);
          if (options.onSuccess) options.onSuccess(res);
        })
        .catch((error) => {
          setLoading(false);
          if (options.onFail) options.onFail(error);
        });
    },
    [service],
  );

  useMount(() => {
    if (!options?.manual) init(options.params);
  });

  // 这个参数是调用的时候传进来的
  const run = (runParams: Record<string, string>) => init(runParams);
  return { data, loading, run };
};

export default useRequest;
