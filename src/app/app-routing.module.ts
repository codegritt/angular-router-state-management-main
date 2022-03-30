import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';


const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full',
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./views/company/company.module').then((m) => m.CompanyModule),
  },
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren: usersModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
