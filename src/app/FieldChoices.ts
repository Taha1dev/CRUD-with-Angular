import { AbstractControl, Validator } from '@angular/forms';
import { CustomValidator } from './validator/CustomValidator';
import { BaseAttributes } from './validator/BaseAttributes';
export class FieldChoices extends BaseAttributes {
  name: string  = '';
  value: any|null=null ;
  override isValid(form: any, user: any): { [key: string]: any; } | null {
   return null;
  }


}
