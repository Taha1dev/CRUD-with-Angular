import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { complaintUrl, headers} from '../utils/setting';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  definedProcess = async (): Promise<any> =>  {

    const result: any = await firstValueFrom(
      this.http.get(complaintUrl+'process',{headers:headers})
    );
    console.log(result);
    console.log("result");
    if (result?.ErrorCode) {
      throw new HttpErrorResponse({ error: result });
    }
    return result[0];
  }
  formSubmit = async (request: any,processId:any) => {

    const result: any = await firstValueFrom(
      this.http.post(complaintUrl+'new/'+processId, request, {headers:headers})
    );
    if (result?.ErrorCode) {
      throw new HttpErrorResponse({ error: result });
    }
    return result;
  }
  getForm = async (processId:any) => {

    const result: any = [await firstValueFrom(
      this.http.get(complaintUrl+'process/'+processId, {headers:headers})
    )];
    if (result?.ErrorCode) {
      throw new HttpErrorResponse({ error: result });
    }

    return result ;
  }
  getComplaints = async () => {

    const result: any = await firstValueFrom(
      this.http.post(complaintUrl, {headers:headers})
    );
    if (result?.ErrorCode) {
      throw new HttpErrorResponse({ error: result });
    }
    return result;
  }
}
