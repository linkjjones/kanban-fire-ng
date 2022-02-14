import { Component } from '@angular/core';
import { Task } from './task/task';
import { transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  // swim lanes
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
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void { }
  drop(event: CdkDragDrop<Task[] | any>): void {
    // if the task is in the same container, don't do anything
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
