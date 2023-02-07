import { Component } from '@angular/core';
import { LogicService } from '../logic.service';
import { mapTo, Subject, switchMap } from 'rxjs';


@Component({
  selector: 'pipelines-demo-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss']
})
export class SumComponent {
  public numberA = 0;
  public numberB = 0;
  private trigger$ = new Subject<void>();
  public result = 0;


  constructor(private logicService: LogicService) {
  }

  sum() {
    this.result = this.logicService.sum([this.numberA,this.numberB])
  }
}
