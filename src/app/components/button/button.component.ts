import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // accepts input from the parent component
  @Input() color: string = "green";
  @Input() text: string = "Click";
  // emits an event to the parent component
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }
}
