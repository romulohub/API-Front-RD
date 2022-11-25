import { Component, OnInit } from '@angular/core';
import { EpisodioModel } from 'src/app/model/episodioModel';
import { EpisodioService } from '../../services/episodio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit {
  
  model: EpisodioModel = new EpisodioModel();
    
  constructor(
    private episodioSrv: EpisodioService,
    private router: Router,
    private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.episodioSrv.GetById(id);
    this.model = result.data as EpisodioModel;
  }
  async save(): Promise<void> {
    const result = await this.episodioSrv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/episodios');
    }
  }
}
