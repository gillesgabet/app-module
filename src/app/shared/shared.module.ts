import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxBootstrapModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxBootstrapModule
  ]
})
export class SHAREDModule { }
