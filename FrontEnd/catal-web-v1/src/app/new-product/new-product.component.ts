import {Component, OnInit} from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {subscribeOn} from 'rxjs/operators';
import {Route, Router} from '@angular/router';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public currentProduct: Product;
  public mode: number = 1;

  constructor(private catService: CatalogueService, private router: Router) {
  }

  ngOnInit() {
  }

  onSaveProduct(data: any) {
    this.catService.saveResource(this.catService.host + '/produits', data)
      .subscribe(res => {
        this.currentProduct = res;
        this.mode = 2;
        console.log(res);
      }, err => console.log(err));
  }

  onNewProduit() {
    this.mode = 1;
  }
}
