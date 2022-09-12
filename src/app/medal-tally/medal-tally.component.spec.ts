import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalTallyComponent } from './medal-tally.component';

describe('MedalTallyComponent', () => {
  let component: MedalTallyComponent;
  let fixture: ComponentFixture<MedalTallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedalTallyComponent],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
