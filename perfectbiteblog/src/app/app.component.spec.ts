import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestHelper } from './testHelper.spec';
import { RouterTestingHarness } from '@angular/router/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let helper: TestHelper<AppComponent>;

  beforeEach(async () => {
    await TestHelper.configureTestBed([AppComponent]);
    
    fixture = TestBed.createComponent(AppComponent);
    helper = new TestHelper<AppComponent>(fixture);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'The Perfect Bite' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('The Perfect Bite');
  });
  
  it('should render the navigation bar', () => {
    fixture.detectChanges();
    helper.expectLink('a.navbar-brand', 'The Perfect Bite', '/', false);
  });

  it('should render the router outlet', () => {
    fixture.detectChanges();
    helper.expectExists('router-outlet');
  });

  describe('routing', () => {
    let harness: RouterTestingHarness;
    
    beforeEach(async () => {
      harness = await RouterTestingHarness.create();
    });

    describe('by url', () => {
      it('routes to the root page', async () => {
        await harness.navigateByUrl('/');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('Welcome!');
      });
      
      it('routes to the home page', async () => {
        await harness.navigateByUrl('/home');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('Welcome!');
      });
      
      it('routes to the error page', async () => {
        await harness.navigateByUrl('/error');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('Still Baking!');
      });
      
      it('routes a bad url', async () => {
        await harness.navigateByUrl('/whatever');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('Still Baking!');
      });
      
      it('routes to the about page', async () => {
        await harness.navigateByUrl('/about');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('About Christine');
      });
      
      it('routes to the reviews page', async () => {
        await harness.navigateByUrl('/reviews');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('Reviews');
      });
      
      it('routes to the first review page', async () => {
        await harness.navigateByUrl('/review/first');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('First Review');
      });
      
      it('routes to the recipes page', async () => {
        await harness.navigateByUrl('/recipes');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('Recipes');
      });
      
      it('routes to the first recipe page', async () => {
        await harness.navigateByUrl('/recipe/first');
        const heading = harness.routeNativeElement?.querySelector('h1');
        expect(heading?.textContent).toBe('First Recipe');
      });
    });
  });
});
