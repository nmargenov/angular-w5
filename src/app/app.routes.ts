import { Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { BrakingBadComponent } from './braking-bad/braking-bad.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'dogs', component:DogsComponent},
    {path: 'braking-bad', component:BrakingBadComponent},
    {path: '',redirectTo: '/dogs', pathMatch:'full'},
    {path: '**',component:PageNotFoundComponent}
];
