import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProveedoresComponent } from './info-proveedores.component';

describe('InfoProveedoresComponent', () => {
  let component: InfoProveedoresComponent;
  let fixture: ComponentFixture<InfoProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProveedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
