import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Task } from '../Task';
// get http client
import { HttpClient, HttpHeaders } from '@angular/common/http';

// set the headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // set the url to the json server
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(
    // inject the HttpClient
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    // return an observable of type {Task[]}
    return this.http.get<Task[]>(this.apiUrl)
  }
  // delete a task
  deleteTask(task: Task): Observable<Task> {
    // set the url to the task id
    const url = `${this.apiUrl}/${task.id}`;
    // return the observable
    return this.http.delete<Task>(url, httpOptions);
  }
  // update Task Reminder
  updateTaskReminder(task: Task): Observable<Task> {
    // set the url to the task id
    const url = `${this.apiUrl}/${task.id}`;
    // return the observable
    return this.http.put<Task>(url, task, httpOptions);
  }
  // add a task
  addTask(task: Task): Observable<Task> {
    // return the observable
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
