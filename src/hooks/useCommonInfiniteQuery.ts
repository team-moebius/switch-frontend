import { useCallback, useState } from 'react';

import { Pageable } from '@team-moebius/api-typescript';

import { AxiosResponse } from 'axios';
import {
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from 'react-query';

interface UseCommonInfiniteQueryParam<
  Response,
  Request extends Pageable,
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
  api: (args: Request) => Promise<AxiosResponse<Response>>;
  queryString: Pageable;
}

export const useCommonInfiniteQuery = <
  Response,
  Request extends Pageable,
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
>({
  api,
  queryKey,
  queryString,
  ...props
}: UseCommonInfiniteQueryParam<Response, Request, TError, TQueryKey>) => {
  const queryFn = useCallback(
    ({ pageParam = 0 }) => {
      return api({
        ...queryString,
        page: pageParam,
      } as unknown as Request).then((res) => res.data);
    },
    [api, queryKey]
  );

  const query = useInfiniteQuery<Response, TError, Response, TQueryKey>({
    queryFn,
    ...props,
  });

  return query;
};
