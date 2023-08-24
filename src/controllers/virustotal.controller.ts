// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {inject} from '@loopback/core';
import {VirustotalBinding} from '../binding/keys';
import {Virustotal} from '../services';
import {post, Request, requestBody, RestBindings} from '@loopback/rest';

export class VirustotalController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private request: Request,
    @inject(VirustotalBinding.VIRUS_TOTAL_SERVICE_PROVIDER)
    protected virustotalRemoteService:Virustotal
  ) {}

  @post('/url/scan',{
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: '',
      },
    },
  })
  async getUrlScan(
    @requestBody() bodyData:{apikey:string, url:string}
    /*eslint-disable*/
  ):Promise<any> {

    const result =await this.virustotalRemoteService.getUrlStatus(bodyData.apikey,bodyData.url);
  }

}
