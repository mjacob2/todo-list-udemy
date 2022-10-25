import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = ''
  taskDeadline = ''
  title: string = "Lista zadań";
  tasks: Task[] = [];

  addTask() {
    const newTask: Task = {
      name: this.taskName,
      deadline: this.taskDeadline,
      done: false,
    };
    this.tasks.push(newTask);
    this.taskName = ''
    this.taskDeadline = ''
    this.sortTasks();

  }

  clearTasks() {
    this.tasks = [];
  }


  get footer(): string {
    return "© Lista zadań,All rights reserved."
  }

  getDate(): Date {
    return new Date();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }

}
