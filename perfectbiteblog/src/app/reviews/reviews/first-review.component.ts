import { Component } from '@angular/core';
import { Review } from '.././models/review.model';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'perfectbite-review-first',
    templateUrl: './first-review.component.html',
    standalone: true,
    providers: [DatePipe],
    imports: [DatePipe]
})
export class FirstReviewComponent {
    public static get review(): Review { 
        return new Review('review/first', new Date(2024, 10, 19), 'First Review');
    };

    public get review(): Review {
        return FirstReviewComponent.review;
    }
}
