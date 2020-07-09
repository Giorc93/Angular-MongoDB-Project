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
}
