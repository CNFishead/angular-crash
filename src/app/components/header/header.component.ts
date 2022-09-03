import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // attributes
  title: string = 'Task tracker';
  constructor() { }

  // lifecycle method
  // similar to useEffect in react
  ngOnInit(): void {
  }

  // methods
  toggleAddTask(){
    console.log('toggle');
  }
}
