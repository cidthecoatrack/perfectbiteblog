import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { FirstRecipeComponent } from './recipes/recipes/first-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FirstReviewComponent } from './reviews/reviews/first-review.component';
import { ReviewsComponent } from './reviews/reviews.component';

describe('App Routes', () => {
  describe('unit', () => {
    it('should contain all routes', () => {
      expect(routes.length).toEqual(9);
    });
    
    it('should contain default route', () => {
      let route = routes.find(r => r.path == '');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('');
      expect(route?.component).toEqual(HomeComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain home route', () => {
      let route = routes.find(r => r.path == 'home');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('home');
      expect(route?.redirectTo).toEqual('/');
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain explicit error route', () => {
      let route = routes.find(r => r.path == 'error');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('error');
      expect(route?.component).toEqual(ErrorComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain reviews route', () => {
      let route = routes.find(r => r.path == 'reviews');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('reviews');
      expect(route?.component).toEqual(ReviewsComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain first review route', () => {
      let route = routes.find(r => r.path == FirstReviewComponent.review.route);
      expect(route).toBeTruthy();
      expect(route?.path).toEqual(FirstReviewComponent.review.route);
      expect(route?.component).toEqual(FirstReviewComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain recipes route', () => {
      let route = routes.find(r => r.path == 'recipes');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('recipes');
      expect(route?.component).toEqual(RecipesComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain first recipe route', () => {
      let route = routes.find(r => r.path == FirstRecipeComponent.recipe.route);
      expect(route).toBeTruthy();
      expect(route?.path).toEqual(FirstRecipeComponent.recipe.route);
      expect(route?.component).toEqual(FirstRecipeComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain about route', () => {
      let route = routes.find(r => r.path == 'about');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('about');
      expect(route?.component).toEqual(AboutComponent);
      expect(route?.pathMatch).toEqual('full');
    });
    
    it('should contain catch-all error route', () => {
      let route = routes.find(r => r.path == '**');
      expect(route).toBeTruthy();
      expect(route?.path).toEqual('**');
      expect(route?.component).toEqual(ErrorComponent);
      expect(route?.pathMatch).toEqual('full');

      expect(route).toBe(routes[routes.length - 1]);
    });
  });
});
