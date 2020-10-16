import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  //ds property will be passed as props to the child component
  loggedIn = true;

  //ds property "childProp" will store the value of the props passed from the child
  @ViewChild(ChildComponent) childProp: ChildComponent;

  //Inside ds lifecycle hook we have access to the child props we received using the @ViewChild
  ngAfterViewInit(): void {
    // we get the name field of the child and change it value to something else
    this.childProp.name = 'Ferume';
  }
}
