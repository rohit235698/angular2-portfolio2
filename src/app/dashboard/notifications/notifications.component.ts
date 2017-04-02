import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent {
private wait = true;
constructor(private router :Router){

	setTimeout(()=>{
		this.wait = false;
	router.navigate(['/dashboard']);
},1500);
}

}
