import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service'
import { Global } from '../../services/global'; 

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService
    )  { 
    this.title = 'Create Project';
    this.project = new Project('','','','',2020,'','');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project){
          //After data is saved, upload the file
          this._uploadService.makeFileRequest(this.url+'uploadImg/'+response.project._id, [], this.filesToUpload, 'image').then((result:any) => {
            this.status = "true";
            console.log(result);
            form.reset();
          });
        }else{
          this.status = "false";
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
