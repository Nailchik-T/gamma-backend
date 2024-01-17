import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Certificate } from '../entities/certificate.entity';
import { City } from '../entities/city.entity';
import { Patient } from '../entities/patient.entity';
import { Photo } from '../entities/photo.entity';
import { Post } from '../entities/post.entity';
import { Psychologist } from '../entities/psychologist.entity';
import { Record } from '../entities/record.entity';
import { Role } from '../entities/role.entity';
import { Symptom } from '../entities/symptom.entity';
import { Technique } from '../entities/technique.entity';
import { TherapyMethod } from '../entities/therapyMethod.entity';
import { User } from '../entities/user.entity';
import { ViewedPsychologists } from '../entities/viewedPsychologists.entity';
import { WorkTime } from '../entities/workTime.entity';
import { env } from '../env';
import SymptomsSeeder from 'src/db/seeds/symptoms.seeds';
import { PatientFactory } from 'src/db/factories/patient.factory';
import { PostFactory } from 'src/db/factories/post.factory';
import { PsychologistFactory } from 'src/db/factories/psychologist.factory';
import { SymptomsFactory } from 'src/db/factories/symptoms.factory';
import { TechniqueFactory } from 'src/db/factories/technique.factory';
import { TherapyMethodFactory } from 'src/db/factories/therapyMethod.factory';
import PatientSeeder from 'src/db/seeds/patient.seeds';
import PostSeeder from 'src/db/seeds/post.seeds';
import PsychologistSeeder from 'src/db/seeds/psychologist.seeds';
import TechniqueSeeder from 'src/db/seeds/technique.seeds';
import TherapyMethodSeeder from 'src/db/seeds/therapyMethod.seeds';
import MainSeeder from 'src/db/seeds/main.seeds';
import UserSeeder from 'src/db/seeds/user.seed';
import { RoleFactory } from 'src/db/factories/role.factory';
import { UserFactory } from 'src/db/factories/user.factory';
const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: env.host || 'mysql',
  port: 3306,
  database: 'psyhelp_online',
  username: env.dbUser,
  password: env.dbPassword,
  synchronize: true,
  logging: true,
  entities: [
    Certificate,
    City,
    Patient,
    Photo,
    Post,
    Psychologist,
    Record,
    Role,
    Symptom,
    Technique,
    TherapyMethod,
    User,
    ViewedPsychologists,
    WorkTime,
  ],
  seeds: [MainSeeder, SymptomsSeeder, TherapyMethodSeeder, TechniqueSeeder, UserSeeder, PsychologistSeeder, PatientSeeder, PostSeeder],
  factories: [RoleFactory, SymptomsFactory, TherapyMethodFactory, TechniqueFactory, UserFactory, PsychologistFactory, PatientFactory, PostFactory],
};

export const appDataSource = new DataSource(options);
