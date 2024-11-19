import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { TestHelper } from '../testHelper.spec';

describe('About Component', () => {
  describe('integration', () => {
    let fixture: ComponentFixture<AboutComponent>;
    let helper: TestHelper<AboutComponent>;
  
    beforeEach(async () => {
      await TestHelper.configureTestBed([AboutComponent]);
  
      fixture = TestBed.createComponent(AboutComponent);
      helper = new TestHelper<AboutComponent>(fixture);
    });
  
    it('should create the about component', () => {
      const home = fixture.componentInstance;
      expect(home).toBeTruthy();
    });
  
    it('should render the "About Christine" header', () => {
      fixture.detectChanges();
      helper.expectTextContent('h1', 'About Christine');
    });
  });
});
