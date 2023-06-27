import { ApiProperty } from "@nestjs/swagger";
export class CreateTaskDto {

    @ApiProperty ({
        description: "Заголовок"
    })
    title: string

    @ApiProperty ({
        description: "Описание"
    })
    description: string

    @ApiProperty ({
        description: "ID пользователя",
        minimum: 1
    })
   user_id: number
}
