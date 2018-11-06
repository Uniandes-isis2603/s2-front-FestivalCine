import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing';

import { CriticoListComponent } from './critico-list/critico-list.component';
import { CriticoService } from './critico.service';
import { CriticoDetailComponent } from './critico-detail/critico-detail.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CriticoListComponent, CriticoDetailComponent],
  providers: [CriticoService],
    exports: [CriticoListComponent, CriticoDetailComponent]
})
export class CriticoModule { }
