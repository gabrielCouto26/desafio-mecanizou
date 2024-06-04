import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WorkshopModule } from '../src/workshops/workshops.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateWorkshopDto } from '../src/workshops/dto/create-workshop.dto';
import { AppDataSource } from '../src/data-source'

describe('Workshops - /workshops (e2e)', () => {
  const workshops = {
    id: 1,
    name: 'Name #1',
    address: 'Address #1',
    latitude: 0,
    longitude: 0
  };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(AppDataSource.options),
        WorkshopModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create [POST /workshops]', () => {
    return request(app.getHttpServer())
      .post('/workshops')
      .send(workshops as CreateWorkshopDto)
      .expect(201)
      .then(({ body }) => {
        expect(body).toEqual(workshops);
      });
  });

  it('Get all workshops [GET /workshops]', () => {
    return request(app.getHttpServer())
      .get('/workshops')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Get one workshop [GET /workshops/:id]', () => {
    return request(app.getHttpServer())
      .get('/workshops/2')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Delete one workshop [DELETE /workshops/:id]', () => {
    return request(app.getHttpServer()).delete('/workshops/1').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});