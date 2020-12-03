import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../core/services/api/api-services.service';

@Component({
  selector: 'app-list-mahasiswa',
  templateUrl: './list-mahasiswa.component.html',
  styleUrls: ['./list-mahasiswa.component.css'],
  providers: [ApiServicesService]
})
export class ListMahasiswaComponent implements OnInit {
  titleModal:string = '';
  setDataSiswa = {
    nama_mahasiswa : '',
    nim: '',
    jurusan : ''
  };
  constructor(private _api:ApiServicesService) { }
  ngOnInit(): void {
    this.showListMahasiswa();
  }

  // untuk menampung data
  dataMahasiswa:any = []; 
  getDataMahasiswa:any = [];

  showListMahasiswa(){
    this._api.readData(false).subscribe(result=>{
  	  this.dataMahasiswa=result;
    },error=>console.log(error));
  }

  getListMahasiswaById(id:number){
    return this._api.getDataBy(id).subscribe(result => {
      this.getDataMahasiswa = result
    }, error => console.log(error));
  }

  updateMahasiswa(id:number){
    let tester = this.getListMahasiswaById(id);
    this.openModal("exampleModal");
    console.log(tester);
  }

  deleteMahasiswaById(id:number){
    this._api.deleteData(id).subscribe(result => {
      return result
    }, error => console.log(error));
  }

  onSumbit(e){
    e.preventDefault();
    console.log(e);
  }
  onClickCloseModal(){
    this.closeModal("exampleModal");
  }
  onClick(){

  }
  openModal(idName:any){
    this.titleModal = 'Update Mahasiswa';
    let showModal:any = document.getElementById(idName);
    showModal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    showModal.style.display = 'block';
    setTimeout(()=> {
      showModal.style.opacity = 1
    });
  }
  closeModal(idName:any){
    let showModal:any = document.getElementById(idName);
    showModal.style.display = 'none';
    showModal.style.opacity = 0;
  }
}
