import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DesaparecidosService } from '../../services/desaparecidos.service';

@Component({
  selector: 'app-buscar-desaparecidos',
  templateUrl: './buscar-desaparecidos.component.html',
  styleUrls: ['./buscar-desaparecidos.component.scss'],
})
export class BuscarDesaparecidosComponent implements OnInit {
  empForm: FormGroup;
  data: any;

  constructor(
    private _fb: FormBuilder,
    private _desaparecidosService: DesaparecidosService
  ) {
    this.empForm = this._fb.group({
      nome: '',
      faixaIdadeInicial: '',
      faixaIdadeFinal: '',
      porPagina: '12',
      sexo: '',
      status: 'DESAPARECIDO',
      pagina: '',
    });
  }

  ngOnInit(): void {
    this._desaparecidosService.notificarAlteracao(this.empForm.value);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._desaparecidosService.notificarAlteracao(this.empForm.value);
    }
  }
}
