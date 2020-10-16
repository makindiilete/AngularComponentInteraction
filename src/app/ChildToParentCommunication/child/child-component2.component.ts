import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent2 {
  name = 'Debo'; // d name of the user we want the parent to greet
  @Output() greetEvent = new EventEmitter(); //inside d selector of ds child class in the parent template, we will pass ds field name as props and assign a method to it in the parent class

  //when ds method is called, we want to execute the greet() of d parent class
  callParentGreetMethod() {
    this.greetEvent.emit(this.name);
  }
}
