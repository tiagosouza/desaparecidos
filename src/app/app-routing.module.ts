import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDesaparecidosComponent } from './components/listar-desaparecidos/listar-desaparecidos.component';
import { DatalhesDesaparecidoComponent } from './components/datalhes-desaparecido/datalhes-desaparecido.component';

const routes: Routes = [{ 
  path: '',
  redirectTo: 'lista', 
  pathMatch: 'full' },
  { 
    path: 'lista', 
    component: ListarDesaparecidosComponent 
  },
  { 
    path: 'detalhes/:id', 
    component: DatalhesDesaparecidoComponent 
  },
  { 
    path: '**',
    redirectTo: '',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
