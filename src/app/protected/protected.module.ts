import { NgModule } from '@angular/core';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfilModule } from './profil/profil.module';
import { SettingsModule } from './settings/settings.module';
import { SHAREDModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SHAREDModule,
    ProtectedRoutingModule,
    DashboardModule,
    ProfilModule,
    SettingsModule
  ]
})
export class ProtectedModule { }
