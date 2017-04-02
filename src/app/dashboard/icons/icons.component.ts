import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent{

	project = {};
	framesrc = '';
	constructor(private service : DataService ){
	this.project = service.getSelectedProject();
	}
}
