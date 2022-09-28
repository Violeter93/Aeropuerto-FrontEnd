import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAeropuertoComponent } from './list-aeropuerto.component';

describe('ListAeropuertoComponent', () => {
  let component: ListAeropuertoComponent;
  let fixture: ComponentFixture<ListAeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAeropuertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
