import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // we bind Input() decorator to ds to state that the value for ds field will be passed as props from parent component
  // @Input() loggedIn: boolean;
  /*=======================================================================*/
  //use ds format if u want to use a different property name different from d parent property name inside ds child component => "childLoggedIn" will b used in ur child template while "childExpectedValue" will be used inside the parent view to pass d props with the name we have as arg inside the @Input decorator here
  // @Input('childExpectedValue') childLoggedIn: boolean;
  /*=======================================================================*/
  /*  //private field not available to d outside
  // private _loggedIn2: boolean;

    // ds field will change base on the boolean value
  message: string;

  //a getter method d outside calls to retrieve the value of the private field
  get loggedIn2(): boolean {
    return this._loggedIn2;
  }

  //a setter method dt will receive props from parent and then store the prop received into the private property
  @Input() set loggedIn2(value: boolean) {
    this._loggedIn2 = value;
    //we check if d prop passed to ds component is true,
    if (value) {
      //we welcome the user
      this.message = 'Welcome Back Michael';
    } else {
      // else we tell user to log in
      this.message = 'Please Log In';
    }
  }*/
  /*=======================================================================*/
  //ngOnChanges lifecycle hook
  /*  @Input() loggedInPropWithNgOnChange: boolean; //ds is d prop dt will b passed from the parent
  message: string; // we will store d message to render in the child template in ds var so we display it on d screen

  //ds hook is called when d value of props passed to ds component via "@Input()" changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    /!*Console log : -
    {
    loggedInPropWithNgOnChange: SimpleChange
    currentValue: true
    firstChange: true
    previousValue: undefined
}
*!/
    const loggedInValue = changes['loggedInPropWithNgOnChange']; // from the 'changes' arg of ds lifecycle, we can use d input name as d key to extract the value passed from the parent and run a check if its true or false and then do something.
    if (loggedInValue) {
      this.message = 'Welcome Back Michaelz!';
    } else {
      this.message = 'Please Log In!';
    }
  }*/

  /*=======================================================================*/
  // Template ref variable

  name = 'Michaelz';

  greetMichaelz() {
    alert('Hey Michaelz');
  }
}
