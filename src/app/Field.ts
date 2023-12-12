import { CustomValidator } from './validator/CustomValidator';
import { BaseAttributes } from './validator/BaseAttributes';
import {FormGroup} from "@angular/forms";
import { FieldChoices } from './FieldChoices';
export class Field extends BaseAttributes {
  id: number|null;

  name: string|null;

  order: number|null;

  validator: CustomValidator[] |null;

  type: string|null;

  paramName: string|null;

  choices: FieldChoices[]|null;

  constructor(id?: number, name?: string, order?: number, validator?: CustomValidator[], type?: string, paramName?: string,choices?:FieldChoices[]) {
    super();
    this.id = id?id:null;
    this.name = name?name:null;
    this.order = order?order:null;
    this.validator = validator?validator:null;
    this.type = type?type:null;
    this.paramName = paramName?paramName:null;
    this.choices = choices?choices:null;

  }
  override isValid(form: any,user:any): { [key: string]: any } | null {
    return  this.validator==null||this.validator.length==0?null:
    this.validator.filter(x=>x?.isApplicable(form,user)).map(x=>x?.validate((form as FormGroup).controls[this.paramName!],form,user))
;
  }
  // validate(control: AbstractControl<any, any>): { [key: string]: any } | null {
  //   return this.validator!.map(x => x.validate((control as FormGroup).controls[this.name!], control.value,null));

  // }
}
