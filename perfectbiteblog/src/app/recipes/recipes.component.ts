import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from './models/recipe.model';
import { DatePipe } from '@angular/common';
import { FirstRecipeComponent } from './recipes/first-recipe.component';

@Component({
    selector: 'perfectbite-recipes',
    templateUrl: './recipes.component.html',
    standalone: true,
    providers: [DatePipe],
    imports: [RouterLink, DatePipe]
})
export class RecipesComponent {
    public recipes: Recipe[];

    constructor() {
        this.recipes = [
            FirstRecipeComponent.recipe,
        ].sort((a: Recipe, b: Recipe) => {
            return b.date.getTime() - a.date.getTime();
        });
    }
}
