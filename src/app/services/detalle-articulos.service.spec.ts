import { TestBed } from '@angular/core/testing';

import { DetalleArticulosService } from './detalle-articulos.service';

describe('DetalleArticulosService', () => {
  let service: DetalleArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
