import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestGorestCoDataSource} from '../datasources';

export interface ConsumeRest {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getUsers():Promise<void>;
}

export class ConsumeRestProvider implements Provider<ConsumeRest> {
  constructor(
    // restGorestCo must match the name property in the datasource json file
    @inject('datasources.restGorestCo')
    protected dataSource: RestGorestCoDataSource = new RestGorestCoDataSource(),
  ) {}

  value(): Promise<ConsumeRest> {
    return getService(this.dataSource);
  }
}
