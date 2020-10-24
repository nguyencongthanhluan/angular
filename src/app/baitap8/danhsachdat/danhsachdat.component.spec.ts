import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachdatComponent } from './danhsachdat.component';

describe('DanhsachdatComponent', () => {
  let component: DanhsachdatComponent;
  let fixture: ComponentFixture<DanhsachdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachdatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
