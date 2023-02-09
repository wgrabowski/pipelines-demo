import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pipelines-demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() label = 'Kliknij';
  @Output() action: EventEmitter<void> = new EventEmitter<void>();
}

