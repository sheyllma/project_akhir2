import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MasukanListComponent } from './masukan-list/masukan-list.component';
import { MahasiswaDetailComponent } from './mahasiswa/mahasiswa-detail/mahasiswa-detail.component';
import { MahasiswaListComponent } from './mahasiswa/mahasiswa-list/mahasiswa-list.component';
import { MahasiswaItemComponent } from './mahasiswa/mahasiswa-list/mahasiswa-item/mahasiswa-item.component';
import { MasukanEditComponent } from './masukan-list/masukan-edit/masukan-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MasukanListService } from './masukan-list/masukan-list.service';
import { MahasiswaStartComponent } from './mahasiswa/mahasiswa-start/mahasiswa-start.component';
import { MahasiswaEditComponent } from './mahasiswa/mahasiswa-edit/mahasiswa-edit.component';
import { MahasiswaService } from './mahasiswa/mahasiswa.service';
import { DataStorageService } from './shared/data-storage.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MahasiswaComponent,
    MasukanListComponent,
    MahasiswaListComponent,
    MahasiswaDetailComponent,
    MahasiswaItemComponent,
    MasukanEditComponent,
    DropdownDirective,
    MahasiswaStartComponent,
    MahasiswaEditComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MasukanListService, MahasiswaService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
