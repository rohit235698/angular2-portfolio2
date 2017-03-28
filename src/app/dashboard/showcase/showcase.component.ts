import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../service/data.service';
//import initDemo = require('../../../assets/js/charts.js');


declare var $:any;

@Component({
    selector: 'showcase-cmp',
    moduleId: module.id,
    templateUrl: 'showcase.component.html'
})

export class ShowcaseComponent implements OnInit{
    public songs : any[];
    public selectedsong = {};
   
    constructor(public service : DataService){
        service.getGames().subscribe(songs=>{this.songs=songs;
                                              this.selectedsong = songs[0];
                                             });

     }
    ngOnInit(){
        $.getScript('../assets/js/visualization.js');
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
       // initDemo();

    }
    action(player,song){
        this.selectedsong = song || this.selectedsong;
        console.log(player);
        if(player.paused){
             setTimeout(() => {
                      player.play();
                    }, 100);
            console.log(player.paused);
        }
        else{
            player.pause();
        }
   /*     if(action=='play')
            music.play();
        if(action=='pause')
            music.pause();
        if(action=='High')
            music.volume+=0.1;
        if(action=='Low')
            music.volume-=0.1;
        */
    }
    currentStep(player){
        return (player.currentTime/player.duration)*100;
    }
}
