import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-mahasiswa',
  templateUrl: './form-mahasiswa.component.html',
  styleUrls: ['./form-mahasiswa.component.css']
})
export class FormMahasiswaComponent implements OnInit {
  public dataMahasiswa = {
    nama_siswa :'',
    nim_siswa : '',
    jurusan :''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(e):void {
    e.preventDefault();
    console.log(this.dataMahasiswa)
  }

}
