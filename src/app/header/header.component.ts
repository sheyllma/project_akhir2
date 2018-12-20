import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) { }
  onSaveData(){
     this.dataStorageService.storeMahasiswas()
      .subscribe(
         (response: Response) => {
           console.log(response);
         }
      );

  }
  onFetchData(){
    this.dataStorageService.getMahasiswas();
  }
  //@Output() featureSelected = new EventEmitter<string>();

  //onSelect(feature:string){
  //  this.featureSelected.emit(feature);
  //}



  ngOnInit() {
  }

}
