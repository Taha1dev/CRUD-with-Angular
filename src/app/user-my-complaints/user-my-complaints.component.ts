import { Component } from '@angular/core';
import { EmployeeService } from '../services/employees.service';
export interface Complaints {
  data: Data
  id: string,
  no: string,
  result: string,
  status: string
}
export interface Data {
  'نص الشكوى': string,
  'عنوان الشكوى': string
}
@Component({
  selector: 'app-user-my-complaints',
  templateUrl: './user-my-complaints.component.html',
  styleUrls: ['./user-my-complaints.component.scss']
})
export class UserMyComplaintsComponent {
  complaints!: Complaints[]

  constructor(private _comps: EmployeeService) {
    this.getUserComplaints();
  }

  getUserComplaints() {
    this._comps.getuserComplaint().subscribe({
      next: (res) => {
        this.complaints = res;
        console.log(res);
      },
      error: console.log,
    });
  }

  openAddEditEmpForm() {

  }
}
