import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { ROUTER_CONFIGURATION } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Api = " http://localhost:3000/posts"
  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get(this.Api)
  }
  postApi(data) {
    return this.http.post(this.Api,data)
  }

  deleteApi(ID: string){
    
    return this.http.delete(this.Api+'/'+ID)
  }
  editApi(data:any,id:number){
   
   return this.http.patch(this.Api+'/'+id,data)
   
   
  }
}

// editProduct(product: Product): Observable<any> {
//   return this.http.put(this.productsUrl + product.id, product);






