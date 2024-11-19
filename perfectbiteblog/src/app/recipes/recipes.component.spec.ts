import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component';
import { TestHelper } from '../testHelper.spec';
import { DatePipe } from '@angular/common';

describe('Recipes Component', () => {
  let fixture: ComponentFixture<RecipesComponent>;
  let helper: TestHelper<RecipesComponent>;

  const recipeCount = 1;

  beforeEach(async () => {
    await TestHelper.configureTestBed([RecipesComponent]);

    fixture = TestBed.createComponent(RecipesComponent);
    helper = new TestHelper<RecipesComponent>(fixture);
  });

  it('should create the recipes component', () => {
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should render the "Recipes" header', () => {
    fixture.detectChanges();
    helper.expectTextContent('h1', 'Recipes');
  });

  it('should render recipe links correctly', () => {
    fixture.detectChanges();
    const recipes = fixture.componentInstance.recipes;
    expect(recipes.length).toBe(recipeCount);
    
    const links = helper.expectCount('li a', recipeCount);
    const datePipe = new DatePipe('en-us');

    for(let i = 0; i < recipeCount; i++) {
      const date = datePipe.transform(recipes[i].date, 'shortDate');
      helper.expectLinkElement(links[i], `${date}: ${recipes[i].title}`, '/' + recipes[i].route);
    }
  });

  it('should sort recipes by date descending', () => {
    fixture.detectChanges();
    const recipes = fixture.componentInstance.recipes;

    for(let i = 1; i < recipeCount; i++) {
      expect(recipes[i - 1].date.getTime()).toBeGreaterThan(recipes[i].date.getTime());
    }
  });
});
