import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPromptsComponent } from './saved-prompts.component';

describe('SavedPromptsComponent', () => {
  let component: SavedPromptsComponent;
  let fixture: ComponentFixture<SavedPromptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedPromptsComponent]
    });
    fixture = TestBed.createComponent(SavedPromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
