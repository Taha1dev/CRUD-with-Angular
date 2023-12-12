import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../services/employees.service'
import { TransferComponent } from '../transfer/transfer.component';
import { ComplaintPaperComponent } from '../complaint-paper/complaint-paper.component';
import { Complaints } from '../user-my-complaints/user-my-complaints.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormService } from '../services/form.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  @Input() isShown: boolean = true;

  @Input() displayedColumns = [
    'id',
    'name',
    'taskKey',
    'action',
    'my status',
  ];
  @Input() icon1!: string;
  @Input() component!: (TemplateRef<any> | undefined);
  dataSource!: MatTableDataSource<any>;
  @Input() isAdminTable: boolean = false
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  complaints!: Complaints
  process: any;
  processId: any;
  constructor(private _dialog: MatDialog, private _comps: EmployeeService, private formService: FormService) {
    this.getAdminComplaints()
  }
  getAdminComplaints() {
    this._comps.getComplaintsAdmin(true).subscribe({
      next: (res) => {
        this.complaints = res;
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('data is', res);
      },
      error: console.error,
    });
  }

  async openAddEditEmpForm() {
    this.process = await this.formService.definedProcess();
    console.log(this.process.id + 'hhghdh');

    this.processId = this.process.id;
    const jsonData = await this.formService.getForm(this.processId);
    // const dialogRef = this._dialog.open(NewComplaintComponent);
    const dialogRef = this._dialog.open(DynamicFormComponent, {
      data: {
        jsonData: jsonData
        , processId: this.processId
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  replyToComplaint(data: any) {
    this._dialog.open(this.component ? this.component : DynamicFormComponent, {
      data: {
        jsonData:[data.form],
        processId:'123'
      }
    });
  }

  transferComplait() {
    this._dialog.open(TransferComponent, {
    });
  }
}
