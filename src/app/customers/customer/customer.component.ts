import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/shared/customer.service'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
  
export class CustomerComponent implements OnInit {

  constructor(private service: CustomerService,
  private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      id: null,
      email: '',
      first_name: '',
      last_name: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.CustomerID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCustomer(form.value).subscribe(res => {
      alert('Successfully Added To Customer Database')
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  
  updateRecord(form: NgForm) {
    this.service.putCustomer(form.value).subscribe(res => {
      alert('Customer Successfully Updated')
      this.resetForm(form);
      this.service.refreshList();

    });
  }
}
