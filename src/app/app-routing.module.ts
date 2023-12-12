
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { TransferComponent } from './transfer/transfer.component';
import { ComplaintPaperComponent } from './complaint-paper/complaint-paper.component';
import { AdminTransferComplaintPageComponent } from './admin-transfer-complaint-page/admin-transfer-complaint-page.component';
import { AdminDashboardStatisticsComponent } from './admin-dashboard-statistics/admin-dashboard-statistics.component';
import { NewComplaintComponent } from './new-complaint/new-complaint.component';
import { UserMyComplaintsComponent } from './user-my-complaints/user-my-complaints.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupOneComponent } from './group-one/group-one.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  { path: 'login', component: LoginComponent },
  { path: 's', component: TransferComponent },
  { path: 'ss', component: ComplaintPaperComponent },
  { path: 'admintr', component: AdminTransferComplaintPageComponent },
  { path: 'adminst', component: AdminDashboardStatisticsComponent },
  { path: 'new', component: NewComplaintComponent },
  { path: 'user', component: UserMyComplaintsComponent },
  { path: 'group', component: GroupOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
