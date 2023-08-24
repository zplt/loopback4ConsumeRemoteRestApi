import {BindingKey} from '@loopback/core';

export namespace GorestServiceBinding {
  export const GOREST_GO_REMOTE_SERVICE_PROVIDER = BindingKey.create('service.gorest.go');
}

export namespace VirustotalBinding {
  export const VIRUS_TOTAL_SERVICE_PROVIDER = BindingKey.create('service.virustotal');
}

export namespace JsonPlaceHolderBinding{
  export const JSON_PLACE_HOLDER_PROVIDER=BindingKey.create('service.jsonplaceholder')
}