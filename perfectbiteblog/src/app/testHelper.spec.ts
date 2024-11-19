import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { importProvidersFrom } from "@angular/core";
import { provideRouter, RouterOutlet } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { routes } from "./app.routes";
import { provideLocationMocks } from "@angular/common/testing";

export class TestHelper<T> {
  constructor(
    private fixture: ComponentFixture<T>
  ) { }

  public static async configureTestBed(imports: any[] = []) {
    await TestBed.configureTestingModule({
      imports: imports,
      providers: [
          importProvidersFrom(BrowserModule, RouterOutlet, NgbModule),
          { provide: 'APP_ID', useValue: 'perfectbiteblog' },
          provideRouter(routes),
          provideLocationMocks(),
      ]
    }).compileComponents();
  }

  public expectTextContent(selector: string, text: string) {
    const element = this.expectExists(selector);
    this.expectTextContentElement(element, text);
  }

  public expectTextContentElement(element: Element | null, text: string) {
    this.expectExistsElement(element);
    expect(element!.textContent).toEqual(text);
  }

  public expectTextContents(selector: string, text: string[]) {
    const listItems = this.compiled.querySelectorAll(selector);
    expect(listItems).toBeTruthy();
    expect(listItems.length).toEqual(text.length);

    for(var i = 0; i < listItems.length; i++) {
      expect(listItems.item(i).textContent).toEqual(text[i]);
    }
  }

  public expectExists(selector: string, exists: boolean = true): Element | null {
    const element = this.compiled.querySelector(selector);
    return this.expectExistsElement(element, exists);
  }

  public expectExistsElement(element: Element | null, exists: boolean = true): Element | null {
    if (exists) {
      expect(element).toBeTruthy();
    } else {
      expect(element).toBeFalsy();
    }

    return element;
  }

  private get compiled(): HTMLElement {
    return this.fixture.nativeElement as HTMLElement;
  }

  public expectHasAttribute(selector: string, attribute: string, hasAttribute: boolean) {
    const element = this.expectExists(selector);
    this.expectHasAttributeElement(element, attribute, hasAttribute);
  }

  public expectHasAttributeElement(element: Element | null, attribute: string, hasAttribute: boolean) {
    this.expectExistsElement(element);
    expect(element!.hasAttribute(attribute)).toBe(hasAttribute);
  }

  public expectAttribute(selector: string, attribute: string, value: string) {
    const element = this.expectExists(selector);
    this.expectAttributeElement(element, attribute, value);
  }

  public expectAttributeElement(element: Element | null, attribute: string, value: string) {
    this.expectExistsElement(element);
    expect(element!.getAttribute(attribute)).toEqual(value);
  }

  public expectAttributeContains(selector: string, attribute: string, value: string) {
    const element = this.expectExists(selector);
    expect(element!.getAttribute(attribute)).toContain(value);
  }

  public expectElement(selector: string, text: string) {
    const element = this.expectExists(selector);
    expect(element!.textContent).toEqual(text);
  }

  public expectElements(selector: string, text: string[]) {
    const elements = this.compiled.querySelectorAll(selector);
    expect(elements).toBeTruthy();
    expect(elements!.length).toEqual(text.length);

    for(var i = 0; i < elements.length; i++) {
      expect(elements.item(i).textContent).toEqual(text[i]);
    }
  }

  public expectCount(selector: string, count: number): NodeListOf<Element> {
    const elements = this.compiled.querySelectorAll(selector);
    expect(elements).toBeTruthy();
    expect(elements!.length).toEqual(count);

    return elements;
  }

  public expectLink(selector: string, text: string, link: string, external: boolean = false) {
    const element = this.expectExists(selector);
    this.expectLinkElement(element!, text, link, external);
  }

  public expectLinkElement(element: Element, text: string, link: string, external: boolean = false) {
    this.expectTextContentElement(element, text);
    this.expectAttributeElement(element, 'href', link);
    
    if (external) {
      this.expectAttributeElement(element, 'target', '_blank');
    } else {
      this.expectHasAttributeElement(element, 'target', false);
    }
  }

  public clickLink(selector: string) {
    this.expectExists(selector);

    const link = this.compiled.querySelector(selector) as HTMLAnchorElement;

    link.click();
  }
}
