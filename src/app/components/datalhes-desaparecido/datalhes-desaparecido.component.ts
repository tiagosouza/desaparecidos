import { DOCUMENT } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DesaparecidosService } from 'src/app/services/desaparecidos.service';
import { EnviarInformacoesComponent } from '../enviar-informacoes/enviar-informacoes.component';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window,
});

@Component({
  selector: 'app-datalhes-desaparecido',
  templateUrl: './datalhes-desaparecido.component.html',
  styleUrls: ['./datalhes-desaparecido.component.scss'],
})
export class DatalhesDesaparecidoComponent implements OnInit {
  pessoaDetalehes: any = null;
  loading: boolean = true;
  tempoDesaparecido!: number;

  id: any;

  currentURL = this.document.location.href;

  listaCartaz!: any;

  gridColumns = 4; //controle itens por linha
  data: any = {};

  constructor(
    private _desaparecidosService: DesaparecidosService,
    private _router: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
    this.id = _router.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    //busca detalhes
    this._desaparecidosService.getDetalhes(this.id).subscribe(
      (data) => {
        this.pessoaDetalehes = data;
        this.loading = false;
        this.conveterDados();
      },
      (err) => {
        console.log("Erro api",err);
        
      }
    );
  }

  //
  conveterDados() {
    //cria url para whatsapp
    this.currentURL = `https://api.whatsapp.com/send/?text=Esta pessoa encontra-se DESAPARECIDA: 
  ${this.pessoaDetalehes?.nome}(${
      this.pessoaDetalehes?.idade
    } anos)  Maiores Informações em 
  ${encodeURIComponent(this.document.location.href)}`;

    this.listaCartaz = this.pessoaDetalehes?.ultimaOcorrencia?.listaCartaz;

    this.data = this.pessoaDetalehes.ultimaOcorrencia?.dtDesaparecimento;
    if (this.data) {
      const timeDiff = Math.abs(Date.now() - new Date(this.data).getTime());
      this.tempoDesaparecido = Math.ceil(timeDiff / (1000 * 3600 * 24));
      console.log(this.tempoDesaparecido);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(EnviarInformacoesComponent, {
      // height: '400px',
      width: '100%',
      data: this.id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  async foto() {
    await this.download(this.pessoaDetalehes.urlFoto);
  }

  async instagram() {
    await this.download(
      this.listaCartaz[0]?.urlCartaz,
      this.listaCartaz[0]?.tipoCartaz
    );
  }

  async toDataURL(url: string) {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
  }

  async download(imageUrl: string, nome?: string) {
    if (nome === undefined) nome = 'imagem';
    const a = document.createElement('a');
    a.href = await this.toDataURL(imageUrl);
    a.download = nome + '.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
