import { NgModule } from '@angular/core';
import { SHAREDModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SHAREDModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
