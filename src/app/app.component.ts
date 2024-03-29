import {ChangeDetectionStrategy, Component} from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-root',
  template: `
    <app-list-directive></app-list-directive>
    <app-list-renderer></app-list-renderer>
    <app-list-native></app-list-native>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public static readonly ITEM_COUNT = 2400;
  public static readonly NUMBER_OF_TESTS = 101;

  private static readonly OUTPUT_STYLE = 'color: white; border-radius: 4px; padding: 2px 4px; font-weight: bold;';
  private static RESULTS = [];

  static round(x) {
    return Math.round(x * 100) / 100;
  }

  static test = (f: () => void, tag: string) => {
    const startTime = new Date().toLocaleTimeString();

    const start = performance.now();
    for (let i = 0; i < AppComponent.NUMBER_OF_TESTS; i++) {
      f();
    }
    const end = performance.now();

    const workTime = AppComponent.round(end - start);
    AppComponent.RESULTS.push(workTime);

    console.log(
      '%c' + startTime + ' ' + tag,
      AppComponent.OUTPUT_STYLE + (tag === 'renderer' ? 'background: blue;' : 'background: red;'),
      `${workTime}ms`
    );

  }

  constructor() {
    window.clearResults = () => AppComponent.RESULTS = [];
  }

}
