import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../core/services/api/api-services.service';

@Component({
  selector: 'app-form-mahasiswa',
  templateUrl: './form-mahasiswa.component.html',
  styleUrls: ['./form-mahasiswa.component.css']
})
export class FormMahasiswaComponent implements OnInit {
  public enteredValue =  {
    nama_mahasiswa: '',
    nim: '',
    jurusan: ''
  }

  constructor(private _api : ApiServicesService) { }

  ngOnInit(): void {
  }
  onSubmit(e):void {
    e.preventDefault();
  }
  onClick():void {
    // console.log(this.enteredValue);
    this._api.postData(this.enteredValue).subscribe(result=>{
  		console.log(result);
  	},error=>{
  		console.log(error);
  	})
  }

}
