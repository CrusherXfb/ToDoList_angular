import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: { text: string, completed: boolean } = { text: '', completed: false };
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  toggleCompleted() {
    this.toggle.emit();
  }

  deleteItem() {
    this.delete.emit();
  }
}
