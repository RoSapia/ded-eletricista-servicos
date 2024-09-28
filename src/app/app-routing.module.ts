import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AgendamentoServicoComponent } from './agendamento-servico/agendamento-servico.component';

const routes: Routes = [
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'agendamento-servico', component: AgendamentoServicoComponent },
  { path: '', redirectTo: '/cadastro-cliente', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
