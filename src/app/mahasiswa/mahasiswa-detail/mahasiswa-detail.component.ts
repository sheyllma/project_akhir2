import { Component, OnInit, Input } from '@angular/core';
import { Mahasiswa } from '../mahasiswa.model';
import { MahasiswaService } from '../mahasiswa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-detail',
  templateUrl: './mahasiswa-detail.component.html',
  styleUrls: ['./mahasiswa-detail.component.css']
})
export class MahasiswaDetailComponent implements OnInit {
  //@Input() mahasiswa:Mahasiswa;
  mahasiswa:Mahasiswa;
  id:number;

  constructor(private mahasiswaService:MahasiswaService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.mahasiswa=this.mahasiswaService.getMahasiswa(this.id);
      }
    )
  }

  onAddMasukanList(){
    this.mahasiswaService.addIngredientsMasukanList(this.mahasiswa.ingredients);
  }

  onEditMahasiswa(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteMahasiswa(){
    this.mahasiswaService.deleteMahasiswa(this.id);
    this.router.navigate(['/mahasiswas']);
  }
}
