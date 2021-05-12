import { NgModule } from '@angular/core';
import { SHAREDModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeFeatureCardComponent,
    HomeFeaturesComponent
  ],
  imports: [
    SHAREDModule
  ]
})
export class HomeModule { }
