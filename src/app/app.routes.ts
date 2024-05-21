import { Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreakingBadComponent } from './breaking-bad/breaking-bad.component';

export const routes: Routes = [
    {path: 'dogs', component:DogsComponent},
    {path: 'braking-bad', component:BreakingBadComponent},
    {path: '',redirectTo: '/dogs', pathMatch:'full'},
    {path: '**',component:PageNotFoundComponent}
];
