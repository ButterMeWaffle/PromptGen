import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsManagerComponent } from './options-manager.component';

describe('OptionsManagerComponent', () => {
  let component: OptionsManagerComponent;
  let fixture: ComponentFixture<OptionsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsManagerComponent]
    });
    fixture = TestBed.createComponent(OptionsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
