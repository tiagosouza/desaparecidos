import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDesaparecidosComponent } from './buscar-desaparecidos.component';

describe('BuscarDesaparecidosComponent', () => {
  let component: BuscarDesaparecidosComponent;
  let fixture: ComponentFixture<BuscarDesaparecidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarDesaparecidosComponent]
    });
    fixture = TestBed.createComponent(BuscarDesaparecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
