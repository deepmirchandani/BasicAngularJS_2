import {Component} from '@angular/core';

@Component({
    selector: 'my-twoComponent',
    template: '<h5>{{EmpData.EmpName}}</h5>'
})

export class twoComponent
{
    EmpData = {EmpName: 'Deep Mirchandani: Second Component'};
    // heroes: Hero[] = [];
    // constructor(
    //     private router: Router, 
    //     private heroService: HeroService
    // ){
    // }
    // Oninit(hero : twoComponent): void{
    //     this.heroService.getheroes()
    //     .then(success => this.heroes = heroes.slice(1,5));
    // }

    // GoTODetail(id: string): void{
    //     let link = ['/details', id.id];
    //     this.router.navigate(link);
    // }
}