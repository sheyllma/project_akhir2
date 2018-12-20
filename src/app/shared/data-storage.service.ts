import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { MahasiswaService } from "../mahasiswa/mahasiswa.service";
import { Mahasiswa } from "../mahasiswa/mahasiswa.model";
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private mahasiswaService: MahasiswaService){}

    storeMahasiswas(){
        return this.http.put('https://mahasiswa-1bdf0.firebaseio.com/mahasiswa.json', this.mahasiswaService.getMahasiswas());
    }
    
    getMahasiswas(){
        this.http.get('https://mahasiswa-1bdf0.firebaseio.com/mahasiswa.json')
        .map(
             (response: Response) => {
                const mahasiswas: Mahasiswa[] = response.json();
                for (let mahasiswa of mahasiswas) {
                 if (!mahasiswa['ingredients']){
                    mahasiswa['ingredients'] = [];
                 }   
                }
                return mahasiswas;  
             }
        )
        .subscribe(
            (mahasiswas: Mahasiswa[]) => {
                this.mahasiswaService.setMahasiswas(mahasiswas);
            }
        );
    }
}