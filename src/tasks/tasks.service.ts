import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm'; //чтобы передать репозиторий/место хранения через абстракцию
import { Repository } from 'typeorm';  //для типизации при объявлении конструктора 
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>     //чтобы можно было работать через репозиторий
  ) { }

  create(data: CreateTaskDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateTaskDto) {
    return this.repository.save({...data, id});
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
