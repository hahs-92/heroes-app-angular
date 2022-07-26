import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeroeComponent } from './card-heroe.component';

describe('CardHeroeComponent', () => {
  let component: CardHeroeComponent;
  let fixture: ComponentFixture<CardHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
