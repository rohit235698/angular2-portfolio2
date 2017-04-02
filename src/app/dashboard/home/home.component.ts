import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from '../service/data.service';
import { PagerService } from '../service/pager.service';

declare var $:any;  
@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
        pager: any = {};
        projects =[];
        pagedItems= [];
        sortby ='';
    constructor(public service : DataService , public pagerService : PagerService){
    }
    ngOnInit(){
        console.log(this.projects.length);

//        this.projects=this.service.getCacheProjects(); 
  //                            if(!this.projects)
  if(this.service.getCacheProjects()){
    this.projects = this.service.getCacheProjects();
         this.setPage(this.getPage());   
        }
        else{
                this.service.getProjects().subscribe((projects)=>{
                   this.projects=projects;
                   this.setPage(1);
                   console.log(this.projects);
                   this.service.setCacheProjects(projects);
                    });
                    }
            // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
      // $.getScript('.../../../assets/js/charts.js');
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.projects.length, page);

        // get current page of items
        this.pagedItems = this.projects.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    getPage(){
      return this.pagerService.getPageNo();
    }
    getTitle(){

      return this.service.getTitle() || 'Title';
    }
    getSortBy() {
       return this.service.getSortBy();
    }
    more(project){
      this.service.moreDetails(project);
    }
}

