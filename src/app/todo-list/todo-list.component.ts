import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoFormComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(text: string) {
    this.todos.push({ text, completed: false });
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
