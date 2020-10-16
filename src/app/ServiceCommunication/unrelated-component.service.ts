import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnrelatedComponentService {
  private _teacherMessageSource = new Subject<string>(); // ds subject will receive and dispatch strings
  teacherMessages$ = this._teacherMessageSource.asObservable(); // we expose _teacherMessageSource private property as an observable
  constructor() {}

  // ds method receive a msg string and dispatch it out
  sendMessage(msg: string) {
    this._teacherMessageSource.next(msg);
  }
}
