import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ToolbarComponent, SearchbarComponent } from 'src/app/components';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToolbarComponent,
    SearchbarComponent
  ]
})
export class HomeModule { }
