import { bootstrap } from '@angular/platform-browser-dynamic';
import { FirstComponent } from './first.component';
import { twoComponent } from './second.component';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrap(FirstComponent).then(success => console.log('done 1')).catch(error => console.log(error));
bootstrap(twoComponent).then(success => console.log('done 2')).catch(error => console.log(error));