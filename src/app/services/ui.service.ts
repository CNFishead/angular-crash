import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // set the subject
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  // toggle the add task
  // doesnt return anything
  // just toggles the value
  toggleAddTask(): void {
    // set the value to the opposite of what it is
    this.showAddTask = !this.showAddTask;
    // emit the value, using the .next() method
    this.subject.next(this.showAddTask);
  }

  // this retuns the subject as an observable, so we can subscribe to it
  // in the component
  onToggle(): Observable<any> {
    // return the subject
    return this.subject.asObservable();
  }
}
