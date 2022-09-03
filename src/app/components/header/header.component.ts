import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // attributes
  title: string = 'Task tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService
  ) {
    // subscribe to the observable
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  // lifecycle method
  // similar to useEffect in react
  ngOnInit(): void {
  }

  // methods
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
