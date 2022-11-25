import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"episodios", component:EpisodiosComponent},
  {path:"questoes", component: QuestionarioComponent},
  { path:"Usuario", component: UsuarioComponent},
  { path:"Usuario/:id", component: UsuarioComponent},
  { path:"Episodio", component: EpisodioComponent},
  { path:"Episodio/:id", component: EpisodioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
