import { Component, OnInit } from '@angular/core';
import { UnrelatedComponentService } from '../unrelated-component.service';

@Component({
  selector: 'app-parent-service',
  templateUrl: './parent-service.component.html',
  styleUrls: ['./parent-service.component.css'],
})
export class ParentServiceComponent implements OnInit {
  constructor(private _unrelatedService: UnrelatedComponentService) {}

  ngOnInit(): void {}

  appreciateStudent() {
    this._unrelatedService.sendMessage('Good Job!');
  }

  greetStudent() {
    this._unrelatedService.sendMessage('Good Morning!');
  }
}
