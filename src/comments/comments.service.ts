import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm'; //чтобы передать репозиторий/место хранения через абстракцию
import { Repository } from 'typeorm';  //для типизации при объявлении конструктора 
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>     //чтобы можно было работать через репозиторий
  ) { }

  create(data: CreateCommentDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateCommentDto) {
    return this.repository.save({...data, id});
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
