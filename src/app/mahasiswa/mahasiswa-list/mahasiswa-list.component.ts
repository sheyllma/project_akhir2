import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Mahasiswa } from '../mahasiswa.model';
import { MahasiswaService } from '../mahasiswa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mahasiswa-list',
  templateUrl: './mahasiswa-list.component.html',
  styleUrls: ['./mahasiswa-list.component.css']
})
export class MahasiswaListComponent implements OnInit, OnDestroy {

  //@Output() mahasiswaWasSelected=new EventEmitter<Mahasiswa>();
  mahasiswas:Mahasiswa[];
  subscription: Subscription;
  //property:class mahasiswa
 
  constructor(private mahasiswaService:MahasiswaService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.mahasiswaService.mahasiswasChanged
      .subscribe(
        (mahasiswas: Mahasiswa[])=> {
          this.mahasiswas = mahasiswas;
        }
      ); 
    this.mahasiswas=this.mahasiswaService.getMahasiswas();
  }

  onNewMahasiswa(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  //onMahasiswaSelected(mahasiswa:Mahasiswa){
    //this.mahasiswaWasSelected.emit(mahasiswa);
  //}
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
