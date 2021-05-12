import { NgModule } from '@angular/core';
import { SHAREDModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SHAREDModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
