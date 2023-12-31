import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('moderation')
export class ModerationProcessor {
  @Process('moderate')
  async moderate(job: Job) {
    const start = Date.now();
    console.log(`Handling started`);

    // Имитируем выполнение 
    for (let i = 0; i <= 100; i++) {
      console.log(`Выполнено ${i}%`);//cтатус выполнения из локального счетчика
      await job.progress(i); //передаем текущий прогресс

      //выполнение пустых операций
      for (let j = 0; j <= 100000; j++) {
        for (let k = 0; k < 5000; k++) {
          j + i;
        }
      }
    }

    console.log(`Handling finished (${Date.now() - start} ms)`);//задача завершена
    return {};//возвращаем пустой объект
  }
}