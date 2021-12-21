import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavtabsComponent } from './favtabs.component';

describe('FavtabsComponent', () => {
  let component: FavtabsComponent;
  let fixture: ComponentFixture<FavtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavtabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
