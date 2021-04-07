import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    //Cuando alguien entre a este path carga a sus hijos
    path:"auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"heroes",
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'noFound',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'noFound'
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
  
})
export class AppRoutingModule { }
