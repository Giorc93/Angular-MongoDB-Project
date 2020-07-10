import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global} from './global';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) { 
    this.url = Global.url;
  }

  testService(){
    return 'Testing angular service';
  }

  saveProject(project: Project): Observable<any>{
    let body = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'save', body, {headers: headers});
  }

  getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this._http.get(this.url+'getA',{headers: headers});
  }

  getProject(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this._http.get(this.url+'getP/'+id, {headers: headers});
  }

  deleteProject(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this._http.delete(this.url+'delete/'+id, {headers: headers});
  }

  updateProject(project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this._http.put(this.url+'update/'+project._id, params);
  }
}
