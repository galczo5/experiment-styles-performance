import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {BackgroundService} from '../background.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list-native',
  providers: [BackgroundService],
  template: `
    <div class="header">
      <code>nativeElement.classList.add(color)</code>
      <button (click)="changeColorAll()">CHANGE ALL</button>
      <button (click)="changeColorHalf()">CHANGE HALF</button>
      <button (click)="changeColorOne()">CHANGE ONE</button>
    </div>
    <div class="list">
      <app-list-item-native *ngFor="let x of iterator" [id]="x"></app-list-item-native>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListNativeComponent implements OnInit {

  color: 'coral' | 'darkcyan' = 'coral';
  iterator = [];

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit() {
    for (let i = 0; i < AppComponent.ITEM_COUNT; i++) {
      this.iterator.push(i);
    }
  }

  changeColorAll() {
    AppComponent.test(() => {
      this.color = this.color === 'coral' ? 'darkcyan' : 'coral';
      this.changeForAll(this.color);
    }, 'native');
  }

  changeColorHalf() {
    AppComponent.test(() => {
      this.color = this.color === 'coral' ? 'darkcyan' : 'coral';
      this.changeForHalf(this.color);
    }, 'native');
  }

  changeColorOne() {
    AppComponent.test(() => {
      this.color = this.color === 'coral' ? 'darkcyan' : 'coral';
      this.backgroundService.set(1, this.color);
    }, 'native');
  }

  private changeForAll(color: string): void {
    for (const id of this.iterator) {
      this.backgroundService.set(id, color);
    }
  }

  private changeForHalf(color: string): void {
    for (const id of this.iterator) {
      if (id % 2) {
        this.backgroundService.set(id, color);
      }
    }
  }

}
