import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDetailsComponent } from './questions-details.component';

describe('QuestionsDetailsComponent', () => {
  let component: QuestionsDetailsComponent;
  let fixture: ComponentFixture<QuestionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionsDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
