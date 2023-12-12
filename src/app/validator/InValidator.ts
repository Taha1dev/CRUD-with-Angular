
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
import { JsonObject } from 'json2typescript';
export class InValidator extends CustomValidator {
  value: any[] = [];
  constructor() {
    super();
  }
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {
    return control.value && this.value.includes(control.value) ? null : {
      res: this.message
    };
  }
}
