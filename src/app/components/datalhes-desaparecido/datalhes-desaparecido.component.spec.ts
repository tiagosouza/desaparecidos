import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalhesDesaparecidoComponent } from './datalhes-desaparecido.component';

describe('DatalhesDesaparecidoComponent', () => {
  let component: DatalhesDesaparecidoComponent;
  let fixture: ComponentFixture<DatalhesDesaparecidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatalhesDesaparecidoComponent]
    });
    fixture = TestBed.createComponent(DatalhesDesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
