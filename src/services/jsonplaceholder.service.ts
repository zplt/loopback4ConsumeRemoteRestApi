import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {JsonplaceholderDataSource} from '../datasources';


export interface Jsonplaceholder {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getPost():Promise<PostValues>;
  getPostById(id:number):Promise<PostValues>;
  updatePost(userId:number,title:number,body:string):Promise<PostValues>;
}

export class JsonplaceholderProvider implements Provider<Jsonplaceholder> {
  constructor(
    // jsonplaceholder must match the name property in the datasource json file
    @inject('datasources.jsonplaceholder')
    protected dataSource: JsonplaceholderDataSource = new JsonplaceholderDataSource(),
  ) {}

  value(): Promise<Jsonplaceholder> {
    return getService(this.dataSource);
  }
}

export interface PostValues{
  userId:number;
  id?:number;
  title:string;
  body:string;
}