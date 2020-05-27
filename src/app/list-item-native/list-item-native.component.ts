import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BackgroundService} from '../background.service';

@Component({
  selector: 'app-list-item-native',
  template: `
    <div #item>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemNativeComponent implements OnInit {

  @ViewChild('item', { static: true, read: ElementRef })
  item: ElementRef;

  @Input()
  id: number;

  constructor(private backgroundService: BackgroundService,
              private renderer: Renderer2) { }

  ngOnInit(): void {

    this.backgroundService.get(this.id)
      .subscribe(color => {
        this.item.nativeElement.style.background = color;
      });

  }

}
