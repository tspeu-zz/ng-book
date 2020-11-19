import { FormControl } from '@angular/forms';

export class ValidatorCustom {

  static skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
    return {invalidSku: true};
    }
  }


}
