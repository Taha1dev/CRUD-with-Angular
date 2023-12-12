
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
import { LocalDateRule } from './LocalDateRule';
import { LocalDateTimeRule } from './LocalDateTimeRule';
export class DateTimeValidator extends CustomValidator {
  lessThan !: LocalDateTimeRule;
  lessThanEqual !: LocalDateTimeRule;
  largerThan !: LocalDateTimeRule;
  largerThanEqual !: LocalDateTimeRule;
  equal !: LocalDateTimeRule;
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {
    return (control.value as Date != null &&
      (this.lessThan == null || this.lessThan < control.value) &&
      (this.largerThan == null || control.value > this.largerThan) &&
      (this.largerThanEqual == null || control.value >= this.largerThanEqual) &&
      (this.lessThanEqual == null || this.lessThanEqual <= control.value) &&
      (this.equal == null || this.equal == control.value)) ? null : { res: this.message };
  }
}
