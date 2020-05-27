import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BackgroundService} from '../background.service';

@Component({
  selector: 'app-list-item-renderer',
  template: `
    <div #item>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemRendererComponent implements OnInit {

  @ViewChild('item', { static: true, read: ElementRef })
  item: ElementRef;

  @Input()
  id: number;

  constructor(private backgroundService: BackgroundService,
              private renderer: Renderer2) { }

  ngOnInit(): void {

    this.backgroundService.get(this.id)
      .subscribe(color => {
        if (color === 'coral') {
          this.renderer.removeClass(this.item.nativeElement, 'darkcyan');
        } else {
          this.renderer.removeClass(this.item.nativeElement, 'coral');
        }
        this.renderer.addClass(this.item.nativeElement, color);
      });

  }

}
