import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-order-dailog',
  templateUrl: './new-order-dailog.component.html',
  styleUrls: ['./new-order-dailog.component.css']
})
export class NewOrderDailogComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewOrderDailogComponent>,){
  }
  
  ngOnInit() {
    this.orderForm = this._formBuilder.group({
      productId: ["", [Validators.required]],
      amount: ["", Validators.required],
      shippingAddress: ["", Validators.required],
      unit: ["", Validators.required],
    });
    
  }

  onCloseDialog() {
    this.dialogRef.close();
}
}
