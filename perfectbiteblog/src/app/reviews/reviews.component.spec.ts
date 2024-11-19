import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsComponent } from './reviews.component';
import { TestHelper } from '../testHelper.spec';
import { DatePipe } from '@angular/common';

describe('Reviews Component', () => {
  let fixture: ComponentFixture<ReviewsComponent>;
  let helper: TestHelper<ReviewsComponent>;

  const reviewCount = 1;

  beforeEach(async () => {
    await TestHelper.configureTestBed([ReviewsComponent]);

    fixture = TestBed.createComponent(ReviewsComponent);
    helper = new TestHelper<ReviewsComponent>(fixture);
  });

  it('should create the reviews component', () => {
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should render the "Reviews" header', () => {
    fixture.detectChanges();
    helper.expectTextContent('h1', 'Reviews');
  });

  it('should render review links correctly', () => {
    fixture.detectChanges();
    const reviews = fixture.componentInstance.reviews;
    expect(reviews.length).toBe(reviewCount);
    
    const links = helper.expectCount('li a', reviewCount);
    const datePipe = new DatePipe('en-us');

    for(let i = 0; i < reviewCount; i++) {
      const date = datePipe.transform(reviews[i].date, 'shortDate');
      helper.expectLinkElement(links[i], `${date}: ${reviews[i].title}`, '/' + reviews[i].route);
    }
  });

  it('should sort reviews by date descending', () => {
    fixture.detectChanges();
    const reviews = fixture.componentInstance.reviews;

    for(let i = 1; i < reviewCount; i++) {
      expect(reviews[i - 1].date.getTime()).toBeGreaterThan(reviews[i].date.getTime());
    }
  });
});
