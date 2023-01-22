import {Component, AfterViewInit, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { OrderData } from 'src/app/Models/OrderData';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  title = 'ShoppingCart';
  selectedOrder: any;
  orderForm: FormGroup;
  updateForm: FormGroup;
  orders: OrderData[] = [];
  @ViewChild("updateModal", { static: true }) updateModal: TemplateRef<any>;
  @ViewChild("newModal", { static: true }) newModal: TemplateRef<any>;
  
  displayedColumns: string[] = ['Id', 'ProductName', 'Amount', 'OrderId', 'TrackNumber', 'ShippingAddress', 'OrderDate', 'Actions'];
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<OrderData>([]);

  
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder,private notificationService: NotificationService) {
    this.orderForm = this._formBuilder.group({
      productName: ["", [Validators.required]],
      amount: ["", Validators.required],
      shippingAddress: ["", Validators.required],
      unit: ["", Validators.required],
    });

    this.updateForm = this._formBuilder.group({
      Id:[null],
      productName: [null],
      amount: [null],
      shippingAddress: [null],
      unit: [null],
    });
  }
  
  ngOnInit(): void {

    this.orders = [    
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 2, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 3, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      {Id: 1, ProductName: 'Bread', Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'}
    ]

      this.dataSource = new MatTableDataSource<OrderData>(this.orders)
  }

  
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    /* ----------==========     OnSelected User    ==========---------- */

    onSelected(row: any) {
      this.selectedOrder = row;
      console.log(this.selectedOrder);
    }

    createOrder(){
      if (this.orderForm.invalid) {
        return this.notificationService.error("Kindly fill all fields");
      }
      let model = {
        shippingAddress: this.orderForm.value.shippingAddress,
        "orderItemsDtoModel": [
          {
            productName: this.orderForm.value.productName,
            "price": {
              amount: this.orderForm.value.amount,
              unit: this.orderForm.value.unit
            }
          }
        ]
      }

    }

    openUpdateModal(){
      this.dialog.open(this.updateModal,{
        minWidth:'800px',
        minHeight:'350px'

      })
    }
    openNewModal(){
      this.dialog.open(this.newModal,{
        minWidth:'800px',
        minHeight:'350px'

      })
    }

    closeModal(){
      this.dialog.closeAll()
    }

}
