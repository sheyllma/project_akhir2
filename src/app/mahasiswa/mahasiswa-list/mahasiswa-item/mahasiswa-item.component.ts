import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mahasiswa } from '../../mahasiswa.model';
import { MahasiswaService } from '../../mahasiswa.service';

@Component({
  selector: 'app-mahasiswa-item',
  templateUrl: './mahasiswa-item.component.html',
  styleUrls: ['./mahasiswa-item.component.css']
})
export class MahasiswaItemComponent implements OnInit {

  @Input() mahasiswa:Mahasiswa;
  @Input() index:number;
  //@Output() mahasiswaSelected=new EventEmitter<void>();

  //constructor(private mahasiswaService:MahasiswaService) { }

  ngOnInit() {
  }

  //onSelected(){
    // //this.mahasiswaSelected.emit();
    //this.mahasiswaService.mahasiswaSelected.emit(this.mahasiswa);
  //}
}
