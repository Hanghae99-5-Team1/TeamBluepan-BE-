import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ClassController } from './classes.controller';
import { ClassListRepository } from '../repository/class.repository';
import { ClassService } from './class.service';
import { ClassDateRepository } from '../repository/classDate.repository';
import { StudentRepository } from '../repository/student.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClassListRepository,
      ClassDateRepository,
      StudentRepository,
    ]),
    AuthModule,
  ],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
