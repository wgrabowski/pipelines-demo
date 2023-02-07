import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pipelines-demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() label: string = 'Kliknij';
  @Output() action: EventEmitter<void> = new EventEmitter<void>();
}

