import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _mainTheme$: BehaviorSubject<string> = new BehaviorSubject('theme-linear');
  private _darkMode$: BehaviorSubject<string> = new BehaviorSubject('theme-linear');

  darkMode$: Observable<string> = this._darkMode$.asObservable();
  private _renderer: Renderer2;
  private head: HTMLElement;
  private themeLinks: HTMLElement[] = [];

  theme$: Observable<[string, string]>;

  constructor(rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) document: Document) { 
      this.head = document.head;
    this._renderer = rendererFactory.createRenderer(null, null);
    this.theme$ = combineLatest(this._mainTheme$, this._darkMode$);
    this.theme$.subscribe(async ([mainTheme, darkMode]) => {
      const cssExt = '.css';
      console.log("darkMode ", darkMode);
      const cssFilename = darkMode + cssExt;
      //const cssFilename = mainTheme + '-dark' + cssExt ;
      await this.loadCss(cssFilename);
      if (this.themeLinks.length == 2)
        this._renderer.removeChild(this.head, this.themeLinks.shift());
    })
  }
  setMainTheme(name: string) {
    this._mainTheme$.next(name);
  }

  setDarkMode(value: string) {
    this._darkMode$.next(value);
  }
  private async loadCss(filename: string) {
    return new Promise(resolve => {
      const linkEl: HTMLElement = this._renderer.createElement('link');
      this._renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this._renderer.setAttribute(linkEl, 'href', filename);
      this._renderer.setProperty(linkEl, 'onload', resolve);
      this._renderer.appendChild(this.head, linkEl);
      this.themeLinks = [...this.themeLinks, linkEl];
    })
  }
}
