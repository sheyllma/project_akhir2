import { Injectable } from '@angular/core';
import { Mahasiswa } from '../mahasiswa/mahasiswa.model';

import { Ingredient } from '../shared/ingredient.model';
import { MasukanListService } from '../masukan-list/masukan-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class MahasiswaService {
  mahasiswasChanged = new Subject<Mahasiswa[]>();


  mahasiswas:Mahasiswa[]=[
    new Mahasiswa('Sella Rahma P',
    'Sella Rahma Putri adalah Mahasiswi Politeknik Negeri Malang, dengan jurusan Teknologi Informasi, Prodi : D-III Manajemen Informatika',
    '../src/app/img/pasti.jpg',
  [
    new Ingredient('Jurusan : Teknologi Informasi',2),
    new Ingredient('Prodi : Managemen Informatika',2),
    new Ingredient('Coding sangat susah',1)
  ]),
    new Mahasiswa('Sheyllma Nabila P',
    'Sheyllma Nabila Prayudati adalah Mahasiswi Politeknik Negeri Malang, dengan jurusan Teknologi Informasi, Prodi : D-III Manajemen Informatika',
    '../src/app/img/pasti.jpg',
  [
    new Ingredient('Jurusan : Teknologi Informasi',2),
    new Ingredient('Prodi : Managemen Informatika',2),
    new Ingredient('Coding sangat sulit',1)
  ]),
  ];
  constructor(private slService: MasukanListService) { }

  setMahasiswas(mahasiswas: Mahasiswa[]){
    this.mahasiswas = mahasiswas;
    this.mahasiswasChanged.next(this.mahasiswas.slice());
  }
  getMahasiswas(){
    return this.mahasiswas.slice();
  }
  addIngredientsMasukanList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  addMahasiswa (mahasiswa : Mahasiswa ){
    this.mahasiswas.push(mahasiswa);
    this.mahasiswasChanged.next(this.mahasiswas.slice());
  }
  updateMahasiswa(index: number, newMahasiswa: Mahasiswa){
    this.mahasiswas[index] = newMahasiswa;
    this.mahasiswasChanged.next(this.mahasiswas.slice());
  }
  deleteMahasiswa(index:number){
    this.mahasiswas.splice(index, 1);
    this.mahasiswasChanged.next(this.mahasiswas.slice());
  }
  getMahasiswa(index:number){
    return this.mahasiswas[index];
  }
}
