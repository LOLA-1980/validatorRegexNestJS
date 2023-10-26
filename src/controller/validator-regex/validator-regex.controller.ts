import { Controller, Body, Post } from '@nestjs/common';
import { ValidatorRegexService } from '../../service/validator-regex/validator-regex.service';

//El decorador @Controller define esto como un controlador y establece el prefijo de ruta como /validator-regex
@Controller('validator-regex')
export class ValidatorRegexController {
  //El constructor inyecta el servicio ValidatorRegexService
  constructor(private validatorRegexService: ValidatorRegexService) {}

  //EndPoint
  //El decorador @Post define que es un endpoint POST en /regex
  @Post('regex')

  //El decorador @Body() inyecta los datos del cuerpo de la solicitud
  validate(@Body() body: { text: string }) {
    //El string body.text se pasa al método validate() del servicio
    return this.validatorRegexService.validate(body.text);
  }
}
