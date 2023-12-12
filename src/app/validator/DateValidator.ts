
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
import { LocalDateRule } from './LocalDateRule';
export class DateValidator extends CustomValidator {
  lessThan !: LocalDateRule;
  lessThanEqual !: LocalDateRule;
  largerThan !: LocalDateRule;
  largerThanEqual !: LocalDateRule;
  equal !: LocalDateRule;
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {
    return (control.value as Date != null &&
      (this.lessThan == null || this.lessThan < control.value) &&
      (this.largerThan == null || control.value > this.largerThan) &&
      (this.largerThanEqual == null || control.value >= this.largerThanEqual) &&
      (this.lessThanEqual == null || this.lessThanEqual <= control.value) &&
      (this.equal == null || this.equal == control.value)) ? null : { res: this.message };
  }
}
