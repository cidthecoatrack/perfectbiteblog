import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FirstReviewComponent } from './reviews/reviews/first-review.component';
import { FirstRecipeComponent } from './recipes/recipes/first-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: "/", pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'reviews', component: ReviewsComponent, pathMatch: 'full' },
    { path: FirstReviewComponent.review.route, component: FirstReviewComponent, pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, pathMatch: 'full' },
    { path: FirstRecipeComponent.recipe.route, component: FirstRecipeComponent, pathMatch: 'full' },
    { path: 'error', component: ErrorComponent, pathMatch: 'full' },
    { path: '**', component: ErrorComponent, pathMatch: 'full' },
];
