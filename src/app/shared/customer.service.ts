import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formData : Customer;
  list : Customer[];
  readonly rootURL = 'http://localhost:57046//api';

  constructor(private http: HttpClient) { }

  //POST METHOD
  postCustomer(formData: Customer) {
    console.log(formData);
    return this.http.post(this.rootURL + '/Customer', formData); 
  }

    //METHOD WILL REFRESH CUSTOMER LIST
  refreshList() {
    this.http.get(this.rootURL + '/Customer')
    .toPromise().then(res => this.list = res as Customer[]);
  }

    //PUT METHOD
  putCustomer(formData: Customer) {
    console.log(formData);
    return this.http.put(this.rootURL + '/Customer/'+formData.id, formData); 
  }

    //DELETE METHOD
  deleteCustomer(id: number) {
    return this.http.delete(this.rootURL + '/Customer/' + id);
  }

}
