import { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import {
  QueryFunctionContext,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from 'react-query';

export interface Pageable {
  page?: number;
  size?: number;
  sort?: Array<string>;
}

interface UseCommonInfiniteQueryParam<
  Response,
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
> extends Pick<
    UseInfiniteQueryOptions<Response, TError, Response, TQueryKey>,
    | 'queryKey'
    | 'onSuccess'
    | 'onError'
    | 'enabled'
    | 'getNextPageParam'
    | 'getPreviousPageParam'
  > {
  api: (args: Pageable) => Promise<AxiosResponse<Response>>;
  queryString: Pageable;
}

export const useCommonInfiniteQuery = <
  Response,
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
>({
  api,
  queryKey,
  queryString,
  ...props
}: UseCommonInfiniteQueryParam<Response, TError, TQueryKey>) => {
  const queryFn = useCallback(
    ({ pageParam = 0 }: QueryFunctionContext) => {
      return api({
        ...queryString,
        page: pageParam,
      } as unknown as Pageable).then((res) => res.data);
    },
    [api, queryKey]
  );

  const query = useInfiniteQuery<Response, TError, Response, TQueryKey>({
    queryFn: queryFn,
    queryKey: queryKey as TQueryKey,
    ...props,
  });

  return query;
};
