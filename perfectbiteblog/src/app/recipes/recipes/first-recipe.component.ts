import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'perfectbite-recipe-first',
    templateUrl: './first-recipe.component.html',
    standalone: true,
    providers: [DatePipe],
    imports: [DatePipe]
})
export class FirstRecipeComponent {
    public static get recipe(): Recipe { 
        return new Recipe('recipe/first', new Date(2024, 10, 19), 'First Recipe');
    };

    public get recipe(): Recipe {
        return FirstRecipeComponent.recipe;
    }
}
