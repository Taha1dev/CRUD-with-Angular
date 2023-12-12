import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { TransferChoicesComponent } from '../transfer-choices/transfer-choices.component';

@Component({
  selector: 'app-admin-transfer-complaint-page',
  templateUrl: './admin-transfer-complaint-page.component.html',
  styleUrls: ['./admin-transfer-complaint-page.component.scss']
})
export class AdminTransferComplaintPageComponent {
  icon1 = 'settings';
  @ViewChild(TransferChoicesComponent) transferChoicesComponent: TransferChoicesComponent = TransferChoicesComponent;
  component!: any;
  isShown: boolean = false;
  // displayedColumns = [
  //   'id',
    //   'نص الشكوى',
  //   'عنوان الشكوى',
  //   'no',
  //   'result',
  //   'status',
  //   'action',
  //   'stattus',
  // ];
  constructor() { }
  isAdminTable: boolean = true
  ngOnInit() {
    this.component = this.transferChoicesComponent;
  }
  
}
