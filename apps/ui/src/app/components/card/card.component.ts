import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() day: string | undefined;
  @Input() weatherDescription: string | undefined;
  @Input() tempMin: number | undefined;
  @Input() tempMax: number | undefined;
  @Input() humidity: number | undefined;
  @Input() icon: string | undefined;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  public onClickEvent(event: any): void {
    this.clickEvent.emit(event);
  }
}
