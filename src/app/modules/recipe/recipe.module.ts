import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ToolbarComponent, SearchbarComponent } from 'src/app/components';
import { RecipecardComponent, RecipeformComponent, RecipeviewComponent } from './components';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipecardComponent,
    RecipeformComponent,
    RecipeviewComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    ToolbarComponent,
    SearchbarComponent
  ]
})
export class RecipeModule { }