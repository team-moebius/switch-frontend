import { useCallback } from 'react';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';

interface UseCommonMutationParam<Response, Reqeust>
  extends Pick<
    UseMutationOptions<Response, unknown, Reqeust>,
    'mutationKey' | 'onSuccess' | 'onError'
  > {
  api: (
    request1: Reqeust,
    requst2: Reqeust
  ) => Promise<AxiosResponse<Response>>;
}

export const useCommonMutation = <
  Response = unknown,
  Request = void,
  TError = unknown,
  TContext = unknown
>({
  api,
  ...props
}: UseCommonMutationParam<Response, Request>) => {
  const func = useCallback(
    (param: Request) => api(param, param).then((res) => res.data),
    [api]
  );
  const mutate = useMutation<Response, TError, Request, TContext>({
    mutationFn: func,
    ...props,
  });
  return mutate;
};
