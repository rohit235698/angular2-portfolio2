import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';

@NgModule({
    imports: [ TypeaheadModule.forRoot(),RouterModule, CommonModule ,FormsModule],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
