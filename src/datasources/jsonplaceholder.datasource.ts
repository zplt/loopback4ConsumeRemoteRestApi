import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './jsonplaceholder-config.json'

// const config = {
//   name: 'jsonplaceholder',
//   connector: 'rest',
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   crud: false,
// };

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class JsonplaceholderDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'jsonplaceholder';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.jsonplaceholder', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
