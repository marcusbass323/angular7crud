import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/shared/customer.service';
import { Customer } from 'app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private service : CustomerService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cust : Customer) {
    this.service.formData = Object.assign({}, cust);
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.service.deleteCustomer(id).subscribe(res => {
        this.service.refreshList();
        alert('Successfully Deleted')
      })
    }
  }
}
