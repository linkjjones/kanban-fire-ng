import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: 'go to Costco',
      description: 'eggs, milk, bread, ground turkey'
    },
    {
      title: 'Get gas',
      description: 'Costo gas is CHEAP!'
    }
  ];
}
