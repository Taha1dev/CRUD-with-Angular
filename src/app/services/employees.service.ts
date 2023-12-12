import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) { }


  addComplaint(data: any): Observable<any> {
    return this.http.post('http://172.16.80.190:8083/new/123', data)
  }

  getuserComplaint(): Observable<any> {
    return this.http.get('http://172.16.80.190:8083/');
  }
  getComplaintsAdmin(bool: boolean): Observable<any> {
    return this.http.get(`http://172.16.80.190:8083/admin?user=${bool}`);
  }
  claimNewComplaint(complaintId: string, taskKey: string): Observable<any> {
    return this.http.get(`http://172.16.80.190:8083/admin/claim/${complaintId}?taskKey=${taskKey}`);
  }
  getComplaints(): Observable<any> {
    return this.http.get('http://172.16.80.190:8083/process/123');
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this.http.get('http://localhost:3000/employees');
  }


  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

}
