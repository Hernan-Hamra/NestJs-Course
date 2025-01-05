import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
    }

  getTask(id: number) {
    const taskfound = this.tasks.find((task) => task.id === id)
      if (!taskfound) {
        return new NotFoundException('Task with id ${id} not found')
    }
      
    return taskfound
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

    updateTask(task: UpdateTaskDto) {
      console.log(task)
    return 'Actializando tareas';
  }

  deleteTask() {
    return 'Borrando tareas';
  }

  updateTaskStatus() {
    return 'Actualizando estado de una tarea';
  }
}

