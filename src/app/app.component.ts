import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  //Interpolation => we bind ds to the html h1 tag to render the string we have here
  pageTitle = 'Angular Component Interaction';
  //PropertyBinding => We bind the value of ds property to the 'src' attribute of the htm <img/> tag
  imgSrc = 'https://picsum.photos/200';
  //Event binding => we bind the value of ds property to a click event in the template
  count = 0;
  //Two way binding => ds field by default does not have a value, its value will be set by users keystrokes in the template input field, so the template and class will be in sync to update each other on every keystrokes
  name: string;
  //ds will be used for split two way binding
  userName: string;
  //ds will b used for getters and setters (split 2 way binding alternative
  private _customerName: string;
  // we will use this for viewChildDecorator.. with d 'ViewChild' decorator, we pass the name of the variable we have in the view which we want this field to target
  @ViewChild('nameRef') nameElementRef: ElementRef;

  // its inside this lifecycle that all template variables becomes available when the component is rendered
  ngAfterViewInit(): void {
    // we call the nativeElement to access the focus() method dt set the focus to the input field we are referencing when the component is fully loaded..
    this.nameElementRef.nativeElement.focus();
    //ds gives us access to all properties and methods present inside nativeElement dt we can make use of
    console.log(this.nameElementRef);
  }

  // ds getter customerName private field on the fly as we type
  get customerName(): string {
    return this._customerName;
  }

  // ds is called to set the value of the private property and after every update, it checks if the total string equals to "michaelz" so it can greet the user
  set customerName(value: string) {
    this._customerName = value;
    if (value.toLowerCase() === 'michaelz') {
      window.alert('Hello Michaelz');
    }
  }

  // a method to increment the count property on every click, it is void bcos it returns no value, it only set a modify the value of a property
  incrementCount(): void {
    this.count++;
  }

  greetUser($event: string) {
    if ($event.toLowerCase() === 'michaelz') {
      window.alert('Welcome Michaelz');
    }
  }
}
