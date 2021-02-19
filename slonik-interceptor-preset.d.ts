declare module "slonik-interceptor-preset" {
  type UserConfigurationType = {
    benchmarkQueries?: boolean;
    logQueries?: boolean;
    normaliseQueries?: boolean;
    transformFieldNames?: boolean;
  };
  export function createInterceptors(
    UserConfigurationType
  ): readonly InterceptorType[];
}
