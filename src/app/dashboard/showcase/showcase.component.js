"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('../service/data.service');
var ShowcaseComponent = (function () {
    function ShowcaseComponent(service) {
        var _this = this;
        this.service = service;
        this.selectedsong = {};
        service.getGames().subscribe(function (songs) {
            _this.songs = songs;
            _this.selectedsong = songs[0];
        });
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/visualization.js');
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        // initDemo();
    };
    ShowcaseComponent.prototype.action = function (player, song) {
        this.selectedsong = song || this.selectedsong;
        console.log(player);
        if (player.paused) {
            setTimeout(function () {
                player.play();
            }, 100);
            console.log(player.paused);
        }
        else {
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
    };
    ShowcaseComponent.prototype.currentStep = function (player) {
        return (player.currentTime / player.duration) * 100;
    };
    ShowcaseComponent = __decorate([
        core_1.Component({
            selector: 'showcase-cmp',
            moduleId: module.id,
            templateUrl: 'showcase.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());
exports.ShowcaseComponent = ShowcaseComponent;
//# sourceMappingURL=showcase.component.js.map