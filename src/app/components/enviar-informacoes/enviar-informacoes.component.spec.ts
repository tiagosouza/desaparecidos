import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarInformacoesComponent } from './enviar-informacoes.component';

describe('EnviarInformacoesComponent', () => {
  let component: EnviarInformacoesComponent;
  let fixture: ComponentFixture<EnviarInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviarInformacoesComponent]
    });
    fixture = TestBed.createComponent(EnviarInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
