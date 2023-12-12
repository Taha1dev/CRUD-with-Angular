import { HttpHeaders } from "@angular/common/http";

export const complaintUrl = 'http://172.16.80.190:8083/';
export const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Source: 'WEB',
})
