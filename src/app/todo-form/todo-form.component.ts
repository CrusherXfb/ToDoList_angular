import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newTodo: string = '';
  @Output() add = new EventEmitter<string>();

  addTodo() {
    if (this.newTodo.trim()) {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
