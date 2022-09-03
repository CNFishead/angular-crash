import { Component } from '@angular/core';

// declration of the component
@Component({
  selector: 'app-root',
  // This is the html template that will be rendered, the relative path to the .html file
  templateUrl: './app.component.html',
  // This is the css file that will be applied to the template, the relative path to the .css file
  // is an array of css files
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}
