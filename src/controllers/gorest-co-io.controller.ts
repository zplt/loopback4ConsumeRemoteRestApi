// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {inject} from '@loopback/core';
import {get, response} from '@loopback/rest';
import {ConsumeRest} from '../services';
import {GorestServiceBinding} from '../binding/keys';

export class GorestCoIoController {
  constructor(
    @inject(GorestServiceBinding.GOREST_GO_REMOTE_SERVICE_PROVIDER)
    protected gorestService:ConsumeRest
  ) {}


  @get('/users')
  @response(200)
  async getUsers(): Promise<void>{
    return this.gorestService.getUsers().then((result)=>{
      console.log(result);
    })
  }
}
