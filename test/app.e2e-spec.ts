import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // //done
  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  // // // //done
  // it('/comments (GET)', () => {
  //   return request(app.getHttpServer()).get('/comments').expect(200).expect([]);
  // });

  // // //done
  // it('/comments/1 (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/comments/1')
  //     .expect(200)
  //     .expect('');
  // });

  // //done
  // it('/comments (POST)', () => {
  //   return request(app.getHttpServer())
  //     .post('/comments')
  //     .send({ text: 'New' })
  //     .expect(201)
  //     .expect((res) => {
  //       expect(res.body).toEqual(
  //         expect.objectContaining({
  //           id: expect.any(Number),
  //           text: expect.any(String),
  //         }),
  //       );
  //     });
  // });

  it('/tasks (GET)', async () => {
    const loginResponse = await request(app.getHttpServer())
      .post('auth/login')
      .expect(201)
      .send({ email: 'test@test.com', password: '123456' });
    const { access_token } = loginResponse.body;
    return request(app.getHttpServer())
      .get('/tasks')
      .set('Authorization', 'Bearer' + access_token)
      .expect(200)
      .expect([]);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
