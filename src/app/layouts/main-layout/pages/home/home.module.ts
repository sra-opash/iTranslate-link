import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ConferenceLinkComponent } from './conference-link/conference-link.component';


@NgModule({
  declarations: [
    HomeComponent,
    ConferenceLinkComponent
  ],
  exports: [],
  imports: [HomeRoutingModule, PickerModule, SharedModule],
})
export class HomeModule { }
