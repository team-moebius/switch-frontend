import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react';

interface UseCommonQueryParam<
  Response,
  Request extends any[],
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
> extends Pick<
    UseQueryOptions<Response, TError, Response, TQueryKey>,
    'queryKey' | 'queryFn' | 'onSuccess' | 'onError' | 'enabled'
  > {
  api: (...args: Request) => Promise<AxiosResponse<Response>>;
}

export const useCommonQuery = <
  Response,
  Request extends any[],
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
>({
  api,
  queryKey,
  ...props
}: UseCommonQueryParam<Response, Request, TError, TQueryKey>) => {
  const queryFn = useCallback(() => {
    let params: any[] = [];
    if (Array.isArray(queryKey) && queryKey.length > 1) {
      params = queryKey.slice(1);
    }
    return api(...(params as Request)).then((res) => res.data);
  }, [api, queryKey]);
  const query = useQuery<Response, TError, Response, TQueryKey>({
    queryFn,
    ...props,
  });
  return query;
};
