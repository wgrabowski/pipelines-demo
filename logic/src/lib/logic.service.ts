import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
  sum(summands: number[]): number {
    return summands.reduce((sum, term) => sum += term, 0);
  }
}
