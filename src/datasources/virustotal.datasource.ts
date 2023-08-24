import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
// import * as config from './virustotal-config.json'

const config = {
  name: 'virustotal',
  connector: 'rest',
  baseURL: 'https://www.virustotal.com/vtapi/v2',
  crud: false,
  options: {
    headers: {
      accept: 'application/json', // Set the accept header to JSON
      'content-type': '*/*',
    },
  },
  operations: [
    {
      template: {
        method: 'POST',
        url: 'https://www.virustotal.com/vtapi/v2/url/scan',
        form: {
          apikey: '${apikey}',
          url: '${url}',
        },
      },
      functions: {
        getUrlStatus: ['apikey', 'url'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class VirustotalDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'virustotal';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.virustotal', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
