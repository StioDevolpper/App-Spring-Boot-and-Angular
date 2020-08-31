import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';

const routes: Routes = [{
  path: 'produits', component: ProduitsComponent
},
  {
    path: 'new-product', component: NewProductComponent
  },
  {
    path: '', redirectTo: '/produits', pathMatch: 'full'
  },
  {
    path: 'edit-product/:id', component: EditProductComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
