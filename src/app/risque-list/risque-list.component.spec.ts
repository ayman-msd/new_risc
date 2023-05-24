import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueListComponent } from './risque-list.component';

describe('RisqueListComponent', () => {
  let component: RisqueListComponent;
  let fixture: ComponentFixture<RisqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisqueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
