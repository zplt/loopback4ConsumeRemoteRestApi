import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'restGorestCo',
  connector: 'rest',
  baseURL: 'https://gorest.co.in/',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users',
      },
      functions: {
        getUsers: [],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestGorestCoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'restGorestCo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.restGorestCo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
