import { Component, Input, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { deserializeForm, objectify } from '../utils/functionComplaint';
import { Field } from '../Field';
import { FormService } from '../services/form.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employees.service';

const jsonData = [{
  "availability": null,
  "readOnly": null,
  "hidden": null,
  "personal": null,
  "id": "1",
  "name": "تقديم شكوى",
  "steps": [
    {
      "availability": null,
      "readOnly": null,
      "hidden": null,
      "personal": null,
      "order": 1,
      "name": "تفاصيل الشكوى",
      "fields": [
        {
          "availability": null,
          "readOnly": null,
          "hidden": null,
          "personal": null,
          "id": "123",
          "name": "نص الشكوى",
          "order": 2,
          "paramName": "نص الشكوى",
          "description": "الرجاء كتابة المشكلة مع التفاصيل",
          "type": "TEXT",
          "defaultValue": null,
          "choices": null,
          "validator": [
            {
              "@type": "required",
              "applyRules": null,
              "message": "الحقل اجباري"
            }
          ]
        },
        {
          "availability": null,
          "readOnly": null,
          "hidden": null,
          "personal": null,
          "id": "1",
          "name": "عنوان الشكوى",
          "order": 1,
          "paramName": "عنوان الشكوى",
          "description": "ملخص",
          "type": "TEXT",
          "defaultValue": null,
          "choices": null,
          "validator": [
            {
              "@type": "required",
              "applyRules": null,
              "message": "الحقل اجباري"
            }
          ]
        }
      ]
    }
  ]
}]

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  dynamicFilterCtrl: FormControl = new FormControl();
  filteredEntries: any[] = [];
  allEntries!: any[];
  // res = data[0].steps[0].fields;
  form: FormGroup = new FormGroup({});
  devices: any = [];
  active: any = [];
  result: any = [];
  jsonFields: any[] = [];
  process: any;
  processId: any;
  protected _onDestroy = new Subject();
  constructor(private router: Router, private toaster: ToastrService, private fb: FormBuilder, private formService: FormService, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private _comps: EmployeeService) { }

  async ngOnInit() {
    let devices: Field | Field[] = deserializeForm(this.data.jsonData)![0].steps![0].fields!;
    this.form = this.createForm(devices);
    this.devices = devices;
    this.active = devices;

  }

  createForm = (devices: any[]) => {
    const validators: ValidatorFn[] = [];
    devices.forEach((control: any) => {
      if (control.type === 'COMBOBOX') {
        this.jsonFields = this.data.jsonData[0].steps[0].fields;
        this.allEntries = this.jsonFields.filter(x => x.id == control.id)[0].choices || [];
        this.filteredEntries = objectify(this.allEntries);
        this.dynamicFilterCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.entryFilterChanged();
          });
      }
      this.form.addControl(control.paramName, new FormControl(control.defaultValue));
    });
    this.form.addValidators(this.test(devices));
    return this.form;
  }

  test(res: Field[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      res.forEach((r: Field) => {
        if (r.isAvailable(control, null) == false || r.isHidden(control, null) == false) {
          if ((control as FormGroup).controls[r.paramName!] != undefined) {
            (control as FormGroup).removeControl(r.paramName!);
            this.active = res.filter(r => r.isAvailable(control, null) || r.isAvailable(control, null));
          }
        }
        else if (r.isAvailable(control, null) != false || r.isHidden(control, null) != false) {
          if ((control as FormGroup).controls[r.paramName!] === undefined) {
            this.active.push(r);
            this.form.addControl(r.paramName!, new FormControl(''));
          }
        }
        else if (r.isReadOnly(control, null) == false) {
          (control as FormGroup).disable();
        }
        else if (r.isReadOnly(control, null) != false) {
          (control as FormGroup).enable();
        }
      });
      return res.filter((r: Field) => r.isAvailable(control, null) === true && r.isHidden(control, null) == true).map(x => x.isValid(control, null));
    }
  }

  submit = async () => {
    await this.formService.formSubmit(this.form.value, this.data.processId);
    this.toaster.success('تم إضافة الشكوى بنجاح');
    this.dialog.closeAll();
    location.reload()
  }
  entryFilterChanged = () => {
    this.filteredEntries = this.allEntries.filter(a => (a.name + '').toLocaleLowerCase().includes((this.dynamicFilterCtrl.value + "").toLocaleLowerCase()));
  }
}
