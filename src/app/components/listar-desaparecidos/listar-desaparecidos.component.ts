import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DesaparecidosService } from 'src/app/services/desaparecidos.service';

@Component({
  selector: 'app-listar-desaparecidos',
  templateUrl: './listar-desaparecidos.component.html',
  styleUrls: ['./listar-desaparecidos.component.scss'],
})
export class ListarDesaparecidosComponent implements OnInit {
  constructor(
    private _desaparecidosService: DesaparecidosService,
    private _router: Router
  ) {}

  loading:boolean=true

  gridColumns = 4;  //controle itens por linha
  public lista: any[] = []; //lista com todos os desaparecidos
  parametros:any
  
  pageSize=12
  
  @ViewChild('paginator') paginator!: MatPaginator;

  
  //cotrole da paginação
  paginacao = {
    length : 0,
    pageIndex : 0,
    pageSize:12,
    showPageSizeOptions : true,
    showFirstLastButtons : true,
    disabled : false,
  }


  //busca lista primeira vez
  ngOnInit(): void {
    this._desaparecidosService.parametros$.subscribe((parametros:any) => {
      this.parametros = parametros
      if(parametros!=null){
        this.buscarDesaparecidos(this.parametros);
      }
    });
   
  }


  //função para buscar lista
  buscarDesaparecidos(params: any): void {
    this.loading=true
    this._desaparecidosService.getDesaparecidos(params).subscribe((data: any) => {  
        this.paginacao.length=data.totalElements
        this.lista = data.content;
        this.loading=false;
        if(data.first){
          this.paginator?.firstPage();
          this.paginacao.pageIndex=0;
        }
      });
  }


  handlePageEvent(e: PageEvent) {
    this.paginacao.pageIndex = e.pageIndex
    this.parametros.pagina = e.pageIndex;
    this.buscarDesaparecidos(this.parametros);
    this.paginacao.length = e.length;
    this.paginacao.pageSize = e.pageSize;
  }

  maisInfomacoes(id : any){
    this._router.navigate(['detalhes', id]);
  }
}
