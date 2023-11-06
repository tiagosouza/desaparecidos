import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DesaparecidosService } from 'src/app/services/desaparecidos.service';

@Component({
  selector: 'app-enviar-informacoes',
  templateUrl: './enviar-informacoes.component.html',
  styleUrls: ['./enviar-informacoes.component.scss']
})
export class EnviarInformacoesComponent {
  data:any = {}

  constructor(
    private _desaparecidosService: DesaparecidosService,
    public dialogRef: MatDialogRef<EnviarInformacoesComponent>,
    @Inject(MAT_DIALOG_DATA) public id: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



  enviarInfo(){
    //faz um post na api
    console.log("Enviar id = " , this.id);
    console.log("Enviar dados  = " , this.data);
    
    this._desaparecidosService.salvaInfoDesaparecido(this.id,this.data).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
        
      }
    );
    
  }
}