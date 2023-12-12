
import { AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator'
import { JsonObject } from 'json2typescript';
export class NumberValidator extends CustomValidator {
  lessThan: number | null = null;
  largerThan: number | null = null;
  lessThanEqual: number | null = null;
  largerThanEqual: number | null = null;
  equal: number | null = null;

  constructor() {
    super();
  }
  override getError(control: AbstractControl<any, any> | any, form: any, user: any): { [key: string]: any } | null {

    return (control.value
      && (this.lessThan || control.value < (this.lessThan!))
      && (!this.largerThanEqual || control.value >= (this.largerThanEqual))
      && (!this.lessThanEqual || control.value <= (this.lessThanEqual))
      && (!this.largerThan || control.value > (this.largerThan))
      && (!this.equal || control.value == (this.equal))) ? null : {
      res: this.message
    };
  }
}
