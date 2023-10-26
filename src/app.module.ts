import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidatorRegexController } from './controller/validator-regex/validator-regex.controller';
import { ValidatorRegexService } from './service/validator-regex/validator-regex.service';

@Module({
  imports: [],
  controllers: [AppController, ValidatorRegexController],
  providers: [AppService, ValidatorRegexService],
})
export class AppModule {}
