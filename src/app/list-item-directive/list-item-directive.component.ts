import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-item-directive',
  template: `
    <div [style.background]="color">Lorem ipsum dolor sit amet enim.</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemDirectiveComponent {

  @Input()
  color: string;

}
