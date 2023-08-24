// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {inject} from '@loopback/core';
import {JsonPlaceHolderBinding} from '../binding/keys';
import {Jsonplaceholder, PostValues} from '../services';
import {del, get, param, post, requestBody, response} from '@loopback/rest';

export class JsonplaceholderController {
  constructor(
    @inject(JsonPlaceHolderBinding.JSON_PLACE_HOLDER_PROVIDER)
    protected jsonPlaceHolderService:Jsonplaceholder
  ) {}

  @get('/post')
  @response(200)
  /*eslint-disable*/
  async getPosts():Promise<PostValues>{
    const result=await this.jsonPlaceHolderService.getPost();
    return result;
  }

  @get('/post/{id}')
  @response(200)
  /*eslint-disable*/
  async getPostsById(
    @param.path.integer('id') id:number,
  ):Promise<PostValues>{
    const result=await this.jsonPlaceHolderService.getPostById(id);
    delete result.id;
    return result;
  }

  @post('/post')
  @response(200)
  /*eslint-disable*/
  async updatePost(
    @requestBody() bodyData:{userId:number,title:number,body:string},
  ):Promise<any>{
    const result=await this.jsonPlaceHolderService.updatePost(
      bodyData.userId,
      bodyData.title,
      bodyData.body
    );
    return result;
  }
}
