import { ApiProperty } from '@nestjs/swagger';
export class CreateCommentDto {
  @ApiProperty({
    description: 'Описание',
  })
  text: string;

  @ApiProperty({
    description: 'ID пользователя',
    minimum: 1,
  })
  user_id: number;
}
