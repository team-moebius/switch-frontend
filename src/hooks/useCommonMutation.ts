import { useCallback } from 'react';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosResponse } from 'axios';

interface UseCommonMutationParam<Response, Request>
  extends Pick<
    UseMutationOptions<Response, unknown, Request>,
    'mutationKey' | 'onSuccess' | 'onError' | 'onMutate' | 'onSettled'
  > {
  api: (request1: Request) => Promise<AxiosResponse<Response>>;
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
      api(param).then((res) => {
        return res.data;
      }),
    [api]
  );
  const mutate = useMutation<Response, TError, Request, TContext>({
    // @ts-expect-error
    mutationFn: func,
    ...props,
  });
  return mutate;
};
