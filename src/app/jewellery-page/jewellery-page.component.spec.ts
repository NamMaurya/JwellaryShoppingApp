import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryPageComponent } from './jewellery-page.component';

describe('JewelleryPageComponent', () => {
  let component: JewelleryPageComponent;
  let fixture: ComponentFixture<JewelleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelleryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
