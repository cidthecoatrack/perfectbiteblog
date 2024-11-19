import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestHelper } from '../../testHelper.spec';
import { FirstRecipeComponent } from './first-recipe.component';

describe('First Recipe Component', () => {
  let fixture: ComponentFixture<FirstRecipeComponent>;
  let helper: TestHelper<FirstRecipeComponent>;

  beforeEach(async () => {
    await TestHelper.configureTestBed([FirstRecipeComponent]);

    fixture = TestBed.createComponent(FirstRecipeComponent);
    helper = new TestHelper<FirstRecipeComponent>(fixture);
  });

  it('should have the first recipe data', () => {
    expect(FirstRecipeComponent.recipe.date).toEqual(new Date(2024, 10, 19));
    expect(FirstRecipeComponent.recipe.title).toEqual('First Recipe');
    expect(FirstRecipeComponent.recipe.route).toEqual('recipe/first');

    expect(fixture.componentInstance.recipe).toEqual(FirstRecipeComponent.recipe);
  });

  it('should create the first recipe component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the "First Recipe" header', () => {
    fixture.detectChanges();
    helper.expectTextContent('h1', 'First Recipe');
  });
});
