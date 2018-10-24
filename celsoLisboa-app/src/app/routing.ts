import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './_guards/auth.guard';
import { CursosComponent } from './cursos/cursos.component';

const appRoutes: Routes = [
  // aqui vão as rotas (links de navegação)
  {
     path: '',
     component: LoginComponent
  },
  {
    path: 'cursos',
    component: CursosComponent,
    canActivate:[AuthGuard]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
