import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import { MenuType } from '../.././sidebar/sidebar.metadata';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { DataService } from '../../dashboard/service/data.service';
import 'rxjs/add/observable/of';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    public projectNames: any[];
    public selected : string;
    location: Location;
    constructor(location:Location, private service : DataService ,private router :Router) {
        this.location = location;
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle.menuType !== MenuType.BRAND);
        if(this.service.getProjectCacheNames()){
            this.projectNames = this.service.getProjectCacheNames();
            console.log(this.projectNames);
        }
        else{
            this.service.getProjectNames().subscribe((projectNames) =>{ this.projectNames =projectNames;
                                                                        console.log(this.projectNames);
                                                                        });
        }
    }
    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    sortProject(by,highToLow) {
        this.service.sortProjects(by,highToLow);
        //this.router.navigate(['/dashboard'],{ replaceUrl: true });
    }
    onSubmit() {
        console.log('click');
        this.service.selectProject(this.selected);        
    }
    back() {
        console.log('back');
        this.service.goBack();
    }
}
