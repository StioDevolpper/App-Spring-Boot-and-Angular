import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../services/catalogue.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Product;
  public url: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private catService: CatalogueService) {
  }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.catService.getResource(this.url)
      .subscribe(data => {
        this.currentProduct = data;
      }, err => console.log(err));
    console.log('Url decode : ', this.url);
  }

  onUpdateProduct(data) {
    this.catService.updateResource(this.url, data)
      .subscribe(data => {
        alert('Mise à jour effectuée avec succes!');
        this.route.navigateByUrl('/produits');
      }, err => console.log(err));
  }
}
