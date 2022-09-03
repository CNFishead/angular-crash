import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // takes in a { Task } and outputs it
  // set Input to the Task type with default value of null
  // ignore the no intializer error
  @Input() task: Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false,
  };
  // output onDelete to the parent component
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  // set the icon to the faTimes icon
  // now we can use it in the template
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    // emit the task to the parent component
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    // toggle the reminder
    this.onToggleReminder.emit(task);
  }
}
