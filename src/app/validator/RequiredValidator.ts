
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
import { JsonObject } from 'json2typescript';
export class RequiredValidator extends CustomValidator {
  constructor() {
    super();
  }
  override getError(control: AbstractControl<any, any>, form: any, user: any): { [key: string]: any } | null {
    return control.value && (!control.value.trim() ||
      control.value.length != 0 || control.value != 'undefine' ||
      control.value != null) ? null : {
      res: this.message
    };
  }
}
