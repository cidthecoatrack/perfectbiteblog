import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TestHelper } from '../testHelper.spec';

describe('Home Component', () => {
  describe('integration', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let helper: TestHelper<HomeComponent>;
  
    beforeEach(async () => {
      await TestHelper.configureTestBed([HomeComponent]);
  
      fixture = TestBed.createComponent(HomeComponent);
      helper = new TestHelper<HomeComponent>(fixture);
    });
  
    it('should create the home component', () => {
      const home = fixture.componentInstance;
      expect(home).toBeTruthy();
    });
  
    it('should render the "Welcome" header', () => {
      fixture.detectChanges();
      helper.expectTextContent('h1', 'Welcome!');
    });
  });
});
