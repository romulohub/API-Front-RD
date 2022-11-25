import { BaseModel } from './baseModel';

export class EpisodioModel extends BaseModel {  
  name: string | undefined;
  resumo: string | undefined;
  capa: number | undefined;
  personagem: string | undefined;
  duracao:  number | undefined;
}