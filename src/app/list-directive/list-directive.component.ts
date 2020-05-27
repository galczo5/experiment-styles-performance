import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list-directive',
  template: `
    <div class="header">
      <code>[style.background]="color"</code>
      <button (click)="changeColorAll()">CHANGE ALL</button>
      <button (click)="changeColorHalf()">CHANGE HALF</button>
      <button (click)="changeColorOne()">CHANGE ONE</button>
    </div>
    <div class="list">
      <app-list-item-directive *ngFor="let x of iterator" [color]="idToColor.get(x)"></app-list-item-directive>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDirectiveComponent implements OnInit {

  color: 'orange' | 'gray' = 'orange';

  iterator = [];

  idToColor: Map<number, string> = new Map<number, string>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    for (let i = 0; i < AppComponent.ITEM_COUNT; i++) {
      this.iterator.push(i);
    }
  }

  changeColorAll() {
    AppComponent.test(() => {
      this.color = this.color === 'orange' ? 'gray' : 'orange';
      this.changeForAll(this.color);
      this.changeDetectorRef.detectChanges();
    }, 'directive');
  }

  changeColorHalf() {
    AppComponent.test(() => {
      this.color = this.color === 'orange' ? 'gray' : 'orange';
      this.changeForHalf(this.color);
      this.changeDetectorRef.detectChanges();
    }, 'directive');
  }

  changeColorOne() {
    AppComponent.test(() => {
      this.color = this.color === 'orange' ? 'gray' : 'orange';
      this.idToColor.set(1, this.color);
      this.changeDetectorRef.detectChanges();
    }, 'directive');
  }

  private changeForAll(color: string): void {
    for (const id of this.iterator) {
      this.idToColor.set(id, color);
    }
  }

  private changeForHalf(color: string): void {
    for (const id of this.iterator) {
      if (id % 2) {
        this.idToColor.set(id, color);
      }
    }
  }

}
