import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduzioneAiComponenti } from './introduzione-ai-componenti';

describe('IntroduzioneAiComponenti', () => {
  let component: IntroduzioneAiComponenti;
  let fixture: ComponentFixture<IntroduzioneAiComponenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduzioneAiComponenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduzioneAiComponenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
