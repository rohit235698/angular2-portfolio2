import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions , Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {


  private projects = [];
  private searchedProject = [];
  private projectsUrl = 'http://starlord.hackerearth.com/kickstarter';
  private sortByTitle = '';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,  private router: Router) { }

  getProjects():Observable<any> {
    console.log('before making request');
    return this.http.get(this.projectsUrl).map(this.extractProjects);
  }
  getCacheProjects() : any {
    return this.searchedProject.length ? this.searchedProject : (this.projects.length ? this.projects : null );
  }
  setCacheProjects(projects){
    this.projects=projects;
  }
  getProjectNames() : Observable<any> {

    return this.http.get(this.projectsUrl).map(this.extractProjectNames);
  }
  getProjectCacheNames() {
    return this.projects.length ? this.projects.map((project)=> {return project.title}) :null;
  }
  sortProjects(by,highToLow) {
    this.sortByTitle = by;
    this.projects=this.projects.sort((a,b) => { 
        if(a[by]>b[by] && highToLow)
            return -1;
        else if(a[by]==b[by])
          return 0;
         
         return 1;

    });
    this.searchedProject = [];
       this.router.navigate(['/notifications'],{ skipLocationChange: true });
       
    

  }
 private extractProjects(res: Response){
   //console.log(res.json());
    return res.json().map((project) => {
          project.url='https://www.kickstarter.com'+project.url;
          return project;
    }) || {};
  }

  private extractProjectNames(res: Response){
  
    return res.json().map((project)=> {return project.title;}) || {};
  }
selectProject = (selected)=>{
 this.searchedProject = this.projects.filter((project)=>{
      return project.title == selected ;
 });
 console.log(this.searchedProject);
 this.router.navigate(['/notifications'],{ skipLocationChange: true });
}
goBack() {
this.searchedProject=[];
this.router.navigate(['/notifications'],{ skipLocationChange: true });
}
getTitle() {
if(this.sortByTitle.indexOf('.')!=-1) {
   let title = this.sortByTitle.split('.');  
   return title[0]+' '+title[1];
}
  return this.sortByTitle;
}
getSortBy() {
  return this.sortByTitle;
}
moreDetails(project) {
  this.searchedProject = project;
  this.router.navigate(['/more'],{ skipLocationChange :true });
}
getSelectedProject() {
  return this.searchedProject;
}
getRawPage(page) : Observable <any> {
  console.log(page);
  return this.http.post('http://localhost:4300/getPage',JSON.stringify(page),this.options).map(this.extractHtml);
}

private extractHtml(res : Response) {
console.log(res);
  return res.json() || '';
}
}