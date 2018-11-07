import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { FestivalListComponent } from './festival-list/festival-list.component';
import { FestivalDetailComponent } from './festival-detail/festival-detail.component';
import {FestivalService} from './festival.service';
import { FestivalCreateComponent } from './festival-create/festival-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [FestivalListComponent, FestivalDetailComponent, FestivalCreateComponent],
  providers: [FestivalService],
  exports:[FestivalListComponent]
})
export class FestivalModule { }
