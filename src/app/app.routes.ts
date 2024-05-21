import { Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreakingBadComponent } from './breaking-bad/breaking-bad.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'dogs', component:DogsComponent},
    {path: 'braking-bad', component:BreakingBadComponent},
    {path: 'about', component:AboutComponent},
    {path: '',redirectTo: '/about', pathMatch:'full'},
    {path: '**',component:PageNotFoundComponent}
];
