import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
// import the TaskService
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // set the tasks to an array of type { Task }
  tasks: Task[] = [];

  // inject the TaskService into the constructor
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    // call the getTasks method from the TaskService
    // and set the tasks to the returned value
    // subscribe to the observable
    // mimic the async pipe by subscribing to the observable or such as a promise
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    // call the deleteTask method from the TaskService
    // and pass in the task
    // subscribe to the observable
    this.taskService.deleteTask(task).subscribe(() => {
      // filter out the deleted task
      // return new array of tasks where the task that was deleted is removed from the array
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  // toggle the reminder
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
