import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-group-one',
  templateUrl: './group-one.component.html',
  styleUrls: ['./group-one.component.scss']
})
export class GroupOneComponent {
  constructor(private _comps: EmployeeService) {
  }
  GroupComplaint: any = []

  async ngOnInit() {
    await this.getUserComplaints()
    console.log(this.GroupComplaint);
  }

  async getUserComplaints() {
    this._comps.getComplaintsAdmin(false).subscribe({
      next: (res) => {
        console.log('done ✅', res);
        this.GroupComplaint = res;
      },
      error: console.error,
    });
  }
  assign(id: any, taskKey: any) {
    this._comps.claimNewComplaint(id, taskKey).subscribe({
      error: console.error
    },)
    console.log('moved id:', id, 'successfully');
    location.reload()
  }
}
