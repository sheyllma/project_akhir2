import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MahasiswaService } from '../mahasiswa.service';
import { NumberFormatStyle } from '@angular/common';



@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.component.html',
  styleUrls: ['./mahasiswa-edit.component.css']
})
export class MahasiswaEditComponent implements OnInit {
  id:number;
  editMode=false;
  mahasiswaForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private mahasiswaService: MahasiswaService,
              private router: Router) { 

              }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
        // console.log(this.editMode);
      }
    )
  }

  onSubmit(){
      // const newMahasiswa = new Mahasiswa(
      // this.mahasiswaForm.value['name'],
      // this.mahasiswaForm.value['description'],
      // this.mahasiswaForm.value['imagePath'],
      // this.mahasiswaForm.value['ingredients']);
      if(this.editMode){
        this.mahasiswaService.updateMahasiswa(this.id,this.mahasiswaForm.value);
      } else {
        this.mahasiswaService.addMahasiswa(this.mahasiswaForm.value);
      }
      this.onCancel();
  } 

  onAddIngredient(){
    (<FormArray>this.mahasiswaForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.mahasiswaForm.get('ingredients')).removeAt(index);
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm(){
    let mahasiswaName = '';
    let mahasiswaImagePath = '';
    let mahasiswaDescription = '';
    let mahasiswaIngredients = new FormArray([]);

    if (this.editMode){
      const mahasiswa = this.mahasiswaService.getMahasiswa(this.id);
      mahasiswaName = mahasiswa.name;
      mahasiswaImagePath = mahasiswa.imagePath;
      mahasiswaDescription = mahasiswa.description;
      if (mahasiswa['ingredients']){
        for (let ingredient of mahasiswa.ingredients){
          mahasiswaIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }
    this.mahasiswaForm = new FormGroup({
      'name': new FormControl(mahasiswaName, Validators.required),
      'imagePath': new FormControl(mahasiswaImagePath, Validators.required),
      'description': new FormControl(mahasiswaDescription, Validators.required),
      'ingredients': mahasiswaIngredients
    });
  }

}
