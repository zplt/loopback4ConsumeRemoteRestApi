import {Entity, model, property} from '@loopback/repository';

@model()
export class Geocoder extends Entity {
  @property({
    type: 'string',
  })
  remindAtAddress?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  remindAtGeo?: string;


  constructor(data?: Partial<Geocoder>) {
    super(data);
  }
}

export interface GeocoderRelations {
  // describe navigational properties here
}

export type GeocoderWithRelations = Geocoder & GeocoderRelations;
