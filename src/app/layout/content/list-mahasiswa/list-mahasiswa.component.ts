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
  isStatusModal:string = ''
  public idMahasiswa:number;
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


  updateMahasiswa(id:number){
    this._api.getDataBy(id).subscribe(result => {
      let finalResult = Object(result);
        this.idMahasiswa = finalResult.data.id;
        this.setDataSiswa.nama_mahasiswa = finalResult.data.nama_mahasiswa;
        this.setDataSiswa.nim = finalResult.data.nim;
        this.setDataSiswa.jurusan = finalResult.data.jurusan;
    })
    setTimeout(()=> {
      this.openModal("exampleModal");
    },300);
    
  }

  deleteMahasiswaById(id:number){
    if(confirm("yakin ingin delete??")){
      this._api.deleteData(id).subscribe(() => 
        {
          alert("Berhasil hapus data");
          this.showListMahasiswa();
        }
        , error => console.log(error));
    }
  }

  onSumbit(e){
    e.preventDefault();
  }
  onClickCloseModal(){
    this.closeModal("exampleModal");
  }
  onClick(){
    this._api.updateData(this.idMahasiswa,this.setDataSiswa).subscribe((result)=>{
      this.showListMahasiswa();
      alert('data berhasil diupdate');
      this.closeModal("exampleModal");
      console.log(result);
    },error => console.log(error));
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
