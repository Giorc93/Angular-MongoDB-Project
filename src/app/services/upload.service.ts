import { Injectable } from '@angular/core';
import { Global } from './global'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public url: string;

  constructor() { 
    this.url = Global.url;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
    return new Promise(function(resolve, reject){
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();

      for (var )
    })
  }
}
