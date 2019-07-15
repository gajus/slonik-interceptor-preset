# slonik-interceptor-preset

[![Travis build status](http://img.shields.io/travis/gajus/slonik-interceptor-preset/master.svg?style=flat-square)](https://travis-ci.org/gajus/slonik-interceptor-preset)
[![NPM version](http://img.shields.io/npm/v/slonik-interceptor-preset.svg?style=flat-square)](https://www.npmjs.org/package/slonik-interceptor-preset)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

[Slonik](https://github.com/gajus/slonik) interceptor preset.

## Motivation

Slonik functionality is extendable using interceptors. Each interceptor is contained in a separate package. Installing and configuring each interceptor becomes a tedious task when using Slonik across multiple projects. `slonik-interceptor-preset` provides a factory function (`createInterceptors`) for constructing a collection of selected interceptors.

`slonik-interceptor-preset` installs these presets:

|Name|Description|
|---|---|
|[`slonik-interceptor-field-name-transformation`](https://github.com/gajus/slonik-interceptor-field-name-transformation)|Transforms Slonik query result field names.|
|[`slonik-interceptor-query-benchmarking`](https://github.com/gajus/slonik-interceptor-query-benchmarking)|Benchmarks Slonik queries.|
|[`slonik-interceptor-query-logging`](https://github.com/gajus/slonik-interceptor-query-logging)|Logs Slonik queries.|
|[`slonik-interceptor-query-normalisation`](https://github.com/gajus/slonik-interceptor-query-normalisation)|Normalises Slonik queries.|

Each interceptor can be selectively enabled/ disabled (see [API](#api)).

## API

```js
import {
  createInterceptors
} from 'slonik-interceptor-preset';

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
