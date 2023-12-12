
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
export class RegexValidator extends CustomValidator {
  regex: RegExp | undefined;
  constructor() {
    super();
  }
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {
    return (control.value
      && ((control.value.match(this.regex)))) ? null : {
      res: this.message
    };
  }
}
