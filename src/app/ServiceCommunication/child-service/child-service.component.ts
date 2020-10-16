import { Component, OnInit } from '@angular/core';
import { UnrelatedComponentService } from '../unrelated-component.service';

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.css'],
})
export class ChildServiceComponent implements OnInit {
  //we inject our service
  constructor(private _unrelatedService: UnrelatedComponentService) {}

  //we subscribe to d observable in d service (teacherMessages$) and we extract the message sent
  ngOnInit(): void {
    this._unrelatedService.teacherMessages$.subscribe((message) => {
      if (message.toLowerCase() === 'good morning!') {
        alert('Good Morning Teacher!');
      } else {
        alert('Thank You Teacher!');
      }
    });
  }
}
