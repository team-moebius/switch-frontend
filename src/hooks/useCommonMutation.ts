import { useCallback } from 'react';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosResponse } from 'axios';

interface UseCommonMutationParam<Response, Request>
  extends Pick<
    UseMutationOptions<Response, unknown, Request>,
    'mutationKey' | 'onSuccess' | 'onError'
  > {
  api: (
    request1: Request,
    request2: Request
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
    (param: Request) =>
      api(param, param).then((res) => {
        console.debug('aaaaa data aaaaa ::: ', res.data);
        return res.data;
      }),
    [api]
  );
  const mutate = useMutation<Response, TError, Request, TContext>({
    mutationFn: func,
    ...props,
  });
  return mutate;
};
