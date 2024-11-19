import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { TestHelper } from '../testHelper.spec';

describe('Error Component', () => {
  let fixture: ComponentFixture<ErrorComponent>;
  let helper: TestHelper<ErrorComponent>;

  beforeEach(async () => {
    await TestHelper.configureTestBed([ErrorComponent]);

    fixture = TestBed.createComponent(ErrorComponent);
    helper = new TestHelper<ErrorComponent>(fixture);
  });

  it('should create the error component', () => {
    const error = fixture.componentInstance;
    expect(error).toBeTruthy();
  });

  it('should render the "Still Baking" header', () => {
    fixture.detectChanges();
    helper.expectTextContent('h1', 'Still Baking!');
  });
});
