import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import * as Joi from 'joi';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export const updateTaskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    user_id: Joi.number().required()
  });