import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgIf,registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import Componets
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { ListarDesaparecidosComponent } from './components/listar-desaparecidos/listar-desaparecidos.component';
import { DatalhesDesaparecidoComponent } from './components/datalhes-desaparecido/datalhes-desaparecido.component';
import { BuscarDesaparecidosComponent } from './components/buscar-desaparecidos/buscar-desaparecidos.component';
import { EnviarInformacoesComponent } from './components/enviar-informacoes/enviar-informacoes.component';

//imports Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

//import flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

//
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr, 'pt-BR');

export function loadCrucialData() {
  return function () {
    // or use UserService
    return delay(3000);
  };
}

export function delay(delay: number) {
  return function () {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    ListarDesaparecidosComponent,
    DatalhesDesaparecidoComponent,
    BuscarDesaparecidosComponent,
    EnviarInformacoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    FormsModule,
    NgIf,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
