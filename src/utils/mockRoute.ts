export const mockRoute = <T, U extends keyof T>(params: T[U], name: U) => ({
  params,
  name,
  key: Object(),
  path: Object(),
});
