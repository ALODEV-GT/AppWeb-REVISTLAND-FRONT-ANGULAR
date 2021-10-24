import { Component, OnInit } from '@angular/core';
import { CostoDiarioService } from '../../services/costo-diario.service';
import { RevistaCostoM } from '../../../../../control/costo-por-dia/RevistaCostoM';

@Component({
  selector: 'app-pagina-costo-por-dia',
  templateUrl: './pagina-costo-por-dia.component.html',
  styleUrls: ['./pagina-costo-por-dia.component.css']
})
export class PaginaCostoPorDiaComponent implements OnInit {

  revistasCostos: RevistaCostoM[] = [];

  constructor(
    private costoDiarioService: CostoDiarioService
  ) {
    this.costoDiarioService.obtenerRevistasConCosto().subscribe((res: RevistaCostoM[]) => {
      this.revistasCostos = res;
    });
  }

  ngOnInit(): void {
  }

}
