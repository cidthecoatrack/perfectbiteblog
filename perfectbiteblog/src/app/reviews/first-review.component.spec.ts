import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestHelper } from '../testHelper.spec';
import { FirstReviewComponent } from './first-review.component';

describe('First Review Component', () => {
  let fixture: ComponentFixture<FirstReviewComponent>;
  let helper: TestHelper<FirstReviewComponent>;

  beforeEach(async () => {
    await TestHelper.configureTestBed([FirstReviewComponent]);

    fixture = TestBed.createComponent(FirstReviewComponent);
    helper = new TestHelper<FirstReviewComponent>(fixture);
  });

  it('should have the first review data', () => {
    expect(FirstReviewComponent.review.date).toEqual(new Date(2024, 10, 19));
    expect(FirstReviewComponent.review.title).toEqual('First Review');
    expect(FirstReviewComponent.review.route).toEqual('review/first');

    expect(fixture.componentInstance.review).toEqual(FirstReviewComponent.review);
  });

  it('should create the first review component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the "First Review" header', () => {
    fixture.detectChanges();
    helper.expectTextContent('h1', 'First Review');
  });
});
