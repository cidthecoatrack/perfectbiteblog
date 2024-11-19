import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Review } from './models/review.model';
import { DatePipe } from '@angular/common';
import { FirstReviewComponent } from './reviews/first-review.component';

@Component({
    selector: 'perfectbite-reviews',
    templateUrl: './reviews.component.html',
    standalone: true,
    providers: [DatePipe],
    imports: [RouterLink, DatePipe]
})
export class ReviewsComponent {
    public reviews: Review[];

    constructor() {
        this.reviews = [
            FirstReviewComponent.review,
        ].sort((a: Review, b: Review) => {
            return b.date.getTime() - a.date.getTime();
        });
    }
}
