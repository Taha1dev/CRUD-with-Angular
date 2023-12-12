import { Component } from '@angular/core';
import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-new-complaint',
  templateUrl: './new-complaint.component.html',
  styleUrls: ['./new-complaint.component.scss']
})
export class NewComplaintComponent {
  data: any = {
    property1: '',
    property2: '',
  };

  constructor(private _comp: EmployeeService) { }

  handleFormSubmit() {

    const data = {
      'نص الشكوى': this.data.property1,
      'عنوان الشكوى': this.data.property2
    };
    console.log(data);

    this._comp.addComplaint(data).subscribe(
      response => {
        console.log('request Successfully Done ✅', response);
      },
      error => {
        console.error(error);
      }
    );
  }
}
