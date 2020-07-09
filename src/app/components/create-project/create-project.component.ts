import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
 
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;

  constructor(private _projectService: ProjectService)  { 
    this.title = 'Create Project';
    this.project = new Project('','','','',2020,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project){
          this.status = "true";
          form.reset();
        }else{
          this.status = "false";
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }
}
