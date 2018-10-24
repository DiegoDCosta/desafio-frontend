import { TestBed } from '@angular/core/testing';

import { CriarCursoService } from './criar-curso.service';

describe('CriarCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriarCursoService = TestBed.get(CriarCursoService);
    expect(service).toBeTruthy();
  });
});
