import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidatorRegexService {
  //El método validate() contiene el patrón regex para validar el texto de entrada
  validate(text: string) {
    //Patron regex
    const regex = /^[A-Za-z]{3}-[0-9]{5}-[0-9]{3}-[0-9]$/;

    //Devuelve true o false dependiendo de si el texto coincide con el patrón regex.
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  }
}
