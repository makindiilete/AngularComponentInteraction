import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent2 {
  // from d child component, ds method will be triggered and send us a name to greet
  greetUser($event: string) {
    alert(`Hello ${$event}`);
  }
}
