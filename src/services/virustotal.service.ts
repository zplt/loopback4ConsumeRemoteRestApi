import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {VirustotalDataSource} from '../datasources';

export interface Virustotal {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  /*eslint-disable*/
  getUrlStatus(apikey:string, url:string):Promise<any>;
}

export class VirustotalProvider implements Provider<Virustotal> {
  constructor(
    // virustotal must match the name property in the datasource json file
    @inject('datasources.virustotal')
    protected dataSource: VirustotalDataSource = new VirustotalDataSource(),
  ) {}

  value(): Promise<Virustotal> {
    return getService(this.dataSource);
  }
}
