import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type NewTaskData} from '../task/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';

  private tasksService = inject(TasksService)

  onCloseDialog() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDueDate,
    }, this.userId);
    this.close.emit();
  }
}
