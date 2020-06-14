import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTask();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Delete(':id')
    deleteTaskById(@Param('id') id: string): void {
        this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus
    ): Task {
        return this.tasksService.updateTaskStatus(id, status)
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {

        return this.tasksService.createTask(createTaskDto)
    }
}