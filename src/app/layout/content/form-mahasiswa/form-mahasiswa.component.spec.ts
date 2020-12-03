import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMahasiswaComponent } from './form-mahasiswa.component';

describe('FormMahasiswaComponent', () => {
  let component: FormMahasiswaComponent;
  let fixture: ComponentFixture<FormMahasiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMahasiswaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
