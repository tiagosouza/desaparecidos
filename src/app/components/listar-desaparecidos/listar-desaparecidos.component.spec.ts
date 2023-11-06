import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDesaparecidosComponent } from './listar-desaparecidos.component';

describe('ListarDesaparecidosComponent', () => {
  let component: ListarDesaparecidosComponent;
  let fixture: ComponentFixture<ListarDesaparecidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDesaparecidosComponent]
    });
    fixture = TestBed.createComponent(ListarDesaparecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
