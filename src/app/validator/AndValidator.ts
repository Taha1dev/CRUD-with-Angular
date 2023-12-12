
import { AbstractControl, FormGroup } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
export class AndValidator extends CustomValidator {
  validator: CustomValidator[] | null | undefined;
  constructor() {
    super();
  }
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {
    return (this.validator == null || this.validator.length == 0 ? null :
      (this.validator.filter(x => x?.isApplicable(form, user)).map(x => x.getError(control, form, user)).reduce((p, a) => (p && a)) ? null : {
        res: this.message
      }))
  }

}
