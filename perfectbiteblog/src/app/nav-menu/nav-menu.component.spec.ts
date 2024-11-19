import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';
import { TestHelper } from '../testHelper.spec';

describe('Nav-Menu Component', () => {
  describe('integration', () => {
    let fixture: ComponentFixture<NavMenuComponent>;
    let helper: TestHelper<NavMenuComponent>;
  
    beforeEach(async () => {
      await TestHelper.configureTestBed([NavMenuComponent]);
  
      fixture = TestBed.createComponent(NavMenuComponent);
      helper = new TestHelper(fixture);
      
      fixture.detectChanges();
    });
  
    it('should create the navigation menu', () => {
      const menu = fixture.componentInstance;
      expect(menu).toBeTruthy();
    });
  
    it('should render the Perfect Bite brand', () => {
      helper.expectLink('#rootLink.navbar-brand', 'The Perfect Bite', '/', false);
    });
  
    it('should render the main page links', () => {
      helper.expectElements('#collapsibleNavbar > ul.navbar-nav > li.nav-item > a.nav-link', [
        'Reviews',
        'Recipes',
      ]);
      helper.expectLink('#collapsibleNavbar #reviewsLink.nav-link', 'Reviews', '/reviews', false);
      helper.expectLink('#collapsibleNavbar #recipesLink.nav-link', 'Recipes', '/recipes', false);
      
      helper.expectElements('#leftLinks > ul.navbar-nav > li.nav-item > a.nav-link', [
        'About Christine',
      ]);
      helper.expectLink('#leftLinks #aboutLink.nav-link', 'About Christine', '/about', false);
    });
  });
});
