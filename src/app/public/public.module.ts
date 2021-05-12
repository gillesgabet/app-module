import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { SHAREDModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    PublicRoutingModule,
    HomeModule,
    RegisterModule,
    LoginModule,
    SHAREDModule
  ]
})
export class PublicModule { }
