import { Component } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;
@Component({
  selector: 'awesome-time',
  template: `
    <div>Hey, Awesome Time:</div>
    <div>{{ time }}</div>
  `
})
export class AwesomeTimeComponent {
  time: string;

  constructor() {
    this.time = moment().format();
  }
}
