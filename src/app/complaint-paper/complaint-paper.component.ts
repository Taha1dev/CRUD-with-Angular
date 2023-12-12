import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-complaint-paper',
  templateUrl: './complaint-paper.component.html',
  styleUrls: ['./complaint-paper.component.scss']
})
export class ComplaintPaperComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('All Data',data);
    console.log('id',data.id);
    console.log('name',data.name);
  }
}
