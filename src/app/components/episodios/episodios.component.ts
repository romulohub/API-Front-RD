import { Component, OnInit } from '@angular/core';
import { Iepisodios } from 'src/app/interfaces/iepisodios';
import { EpisodioService } from '../../services/episodio.service'
import { EpisodioModel } from '../../model/episodioModel'
import { UsuarioModel } from '../../model/usuarioModel'
import { MatFormFieldModule} from '@angular/material/form-field';
import { IUsuario } from '../../interfaces/IUsuario'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {
 
  displayedColumns: string[] = [ 'Editar', 'id', 'name', 'resumo', 'personagem', 'duracao', 'Excluir'];
  // origem dos dados
  dataSource!: MatTableDataSource<Iepisodios>;
  

  constructor(private episodiosSrv: EpisodioService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    console.log("inicio")
    const episodios = await this.episodiosSrv.GetAll();
    console.log ("----");
    console.log(episodios);
    console.log ("----");
    this.dataSource = new MatTableDataSource(episodios.data);    
  }

  async delete(episodio: EpisodioModel): Promise<void> {
    const result = await this.episodiosSrv.delete(episodio.id);
    this.bind();     
    this.router.navigateByUrl('/episodios');      
}
}
