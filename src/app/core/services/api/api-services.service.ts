import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private _urlApi :string = 'http://127.0.0.1:8000/mahasiswa';
  public _urlApiAnother : string = '';

  constructor(private _http:HttpClient) { }
  
  readData(isOtherUrl:boolean):Observable<any>{
    let myUrl = null;
    if(isOtherUrl){
      myUrl = this._urlApiAnother;
    } else {
      myUrl = this._urlApi;
    }
    return this._http.get(myUrl);
  }
  postData(data:any){
  	let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	  };
    return this._http.post(this._urlApi, this.serializeObj(data),options);
  }
  updateData(id:number,data:any){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	  };
    return this._http.put(this._urlApi + '/' + id,this.serializeObj(data),options);
  }
  deleteData(id:number){
    return this._http.delete(this._urlApi + '/' + id);
  }
  getDataBy(id:number){
    return this._http.get(this._urlApi + '/' + id);
  }

  serializeObj(obj:any) {
    let result = [];
    for (let property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
}
