import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeformComponent, RecipeviewComponent } from './components';

const routes: Routes = [
  {
    path:'',
    component: RecipeComponent,
    children: [
      { path: 'add', component: RecipeformComponent },
      { path: 'view/:id', component: RecipeviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
