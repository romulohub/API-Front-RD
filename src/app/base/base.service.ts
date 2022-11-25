import { environment } from './../../environments/environment';
import { HttpService } from './../services/http.service';
import { IResultHttp } from '../interfaces/IResultHttp';

export abstract class BaseService<T> {

  urlBase: string = '';

  constructor(
    public url: string,
    public http: HttpService) {
    this.urlBase = `${environment.url_api}/${this.url}`;
  }

  public GetAll(): Promise<IResultHttp> {
    console.log("antes")
    return this.http.get(this.urlBase);
    console.log ("depois")
  }

  public GetById(id: string): Promise<IResultHttp> {
    return this.http.get(`${this.urlBase}/${id}`);
  }

  public post(model: T): Promise<IResultHttp> {
    return this.http.post(this.urlBase, model);
  }

  public delete(id: string|undefined): Promise<IResultHttp> {    
    return this.http.delete(`${this.urlBase}/${id}`);
  }

}