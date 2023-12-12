import { AbstractControl, FormGroup } from '@angular/forms';
import { ApplyRule } from './ApplyRule';

export abstract class CustomValidator {
  message: string | null;
  applyRules: ApplyRule[] | null = null;

  constructor(message?: string) {
    this.message = message ? message : null;
  }
  validate(control: AbstractControl<any, any>, form: any, user: any): { [key: string]: any } | null {
    var errors: { [key: string]: any } | null = this.getError(control, form, user);
    if (errors)
      control.setErrors(errors);
    return errors;
  }
  abstract getError(control: AbstractControl<any, any> | null, form: any, user: any): { [key: string]: any } | null;
  public isApplicable(form: any, user: any): boolean {
    return (this.applyRules == null || this.applyRules.length == 0 ||
      this.applyRules.filter(x => x.validator?.isApplicable(form, user)).map(x => x.validator?.getError((form as FormGroup).controls[x.key], form, user) == null
      ).reduce((p, a) => p && a));
  }
}

