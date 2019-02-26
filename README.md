# slonik-interceptor-preset

[![Travis build status](http://img.shields.io/travis/gajus/slonik-interceptor-preset/master.svg?style=flat-square)](https://travis-ci.org/gajus/slonik-interceptor-preset)
[![NPM version](http://img.shields.io/npm/v/slonik-interceptor-preset.svg?style=flat-square)](https://www.npmjs.org/package/slonik-interceptor-preset)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

[Slonik](https://github.com/gajus/slonik) interceptor preset.

## API

```js
import {
  createInterceptors
} from 'slonik';

```

```js
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
  +transformFieldNames: boolean
|};

(userConfiguration: UserConfigurationType) => $ReadOnlyArray<InterceptorType>;

```

## Example usage

```js
import {
  createPool
} from 'slonik';
import {
  createInterceptors
} from 'slonik-interceptor-preset';

const connection = createPool('postgres://', {
  interceptors: [
    ...createInterceptors()
  ]
});

```
