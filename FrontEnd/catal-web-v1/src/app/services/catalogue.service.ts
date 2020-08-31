import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  //Host provider
  public host: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  //get product resources
  public getProducts(page: number, size: number) {
    return this.httpClient.get(this.host + '/produits?page=' + page + '&size=' + size);
  }

//get Product by Keyword
  public getProductsByKeyword(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + '/produits/search/byDesignationPage?mc=' + mc + '&page=' + page + '&size=' + size);
  }

// delete ressources
  public deleteResource(url) {
    return this.httpClient.delete(url);
  }

//save resource
  public saveResource(url, data): Observable<Product> {
    return this.httpClient.post<Product>(url, data);
  }

//get resouces by url
  public getResource(url): Observable<Product> {
    return this.httpClient.get<Product>(url);
  }

// update resource
  public updateResource(url, data) {
    return this.httpClient.put(url, data);
  }

}
