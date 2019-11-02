// @flow

import {
  createFieldNameTransformationInterceptor,
} from 'slonik-interceptor-field-name-transformation';
import {
  createQueryNormalisationInterceptor,
} from 'slonik-interceptor-query-normalisation';
import {
  createQueryBenchmarkingInterceptor,
} from 'slonik-interceptor-query-benchmarking';
import {
  createQueryLoggingInterceptor,
} from 'slonik-interceptor-query-logging';

/**
 * @property benchmarkQueries Dictates whether to enable the [query benchmarking interceptor](https://github.com/gajus/slonik-interceptor-query-benchmarking). (Default: false)
 * @property logQueries Dictates whether to enable the [query logging interceptor](https://github.com/gajus/slonik-interceptor-query-logging). (Default: true)
 * @property normaliseQueries Dictates whether to enable the [query normalisation interceptor](https://github.com/gajus/slonik-interceptor-query-normalisation). (Default: true)
 * @property transformFieldNames Dictates whether to enable the [field name transformation interceptor](https://github.com/gajus/slonik-interceptor-field-name-transformation). (Default: true)
 */
type UserConfigurationType = {|
  +benchmarkQueries: boolean,
  +logQueries: boolean,
  +normaliseQueries: boolean,
  +transformFieldNames: boolean,
|};

const defaultConfiguration = {
  benchmarkQueries: false,
  logQueries: true,
  normaliseQueries: true,
  transformFieldNames: true,
};

export default (userConfiguration: UserConfigurationType = defaultConfiguration) => {
  const configuration = {
    ...defaultConfiguration,
    ...userConfiguration,
  };

  const interceptors = [];

  if (configuration.transformFieldNames) {
    interceptors.push(
      createFieldNameTransformationInterceptor({
        format: 'CAMEL_CASE',
      }),
    );
  }

  if (configuration.normaliseQueries) {
    interceptors.push(
      createQueryNormalisationInterceptor({
        stripComments: true,
      }),
    );
  }

  if (configuration.benchmarkQueries) {
    interceptors.push(
      createQueryBenchmarkingInterceptor(),
    );
  }

  if (configuration.logQueries) {
    interceptors.push(
      createQueryLoggingInterceptor(),
    );
  }

  return interceptors;
};
