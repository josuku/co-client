import { Component, Input } from '@angular/core';
import { Logistic } from '../../models/logistic';

@Component({
  selector: 'logistic-list',
  templateUrl: './logistic-list.component.html',
  styleUrls: ['./logistic-list.component.css']
})
export class LogisticListComponent {
  @Input() logistic: Logistic[] = [];

  constructor() { }
}
