import { BaseModel } from './baseModel';

export class UsuarioModel extends BaseModel {  
  firstName: string | undefined;  
  lastName: string| undefined;
  age: BigInt | undefined;
}