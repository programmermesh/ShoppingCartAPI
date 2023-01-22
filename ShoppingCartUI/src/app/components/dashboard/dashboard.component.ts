import {Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { NewOrderDailogComponent } from '../new-order-dailog/new-order-dailog.component';

export interface OrderData {
  Id: number;
  ProductId: number;
  Amount: number;
  OrderId:number,
  TrackNumber: string;
  ShippingAddress: string;
  OrderDate: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  title = 'ShoppingCart';
  orders: OrderData[] = [];
  newOrderDialogRef: MatDialogRef<NewOrderDailogComponent>
  
  displayedColumns: string[] = ['Id', 'ProductId', 'Amount', 'OrderId', 'TrackNumber', 'ShippingAddress', 'OrderDate', 'Actions'];
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<OrderData>([]);

  
  constructor(public dialog: MatDialog) {

  }

  newOrderDialog() {
    this.newOrderDialogRef = this.dialog.open(NewOrderDailogComponent,{
      minHeight:'400px',
      minWidth:'800px'
    });
  }
  
  ngOnInit(): void {
    this.orders = [    
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'},
      // {Id: 1, ProductId: 15, Amount: 1.0079, OrderId: 454545856, TrackNumber: '4464646445', ShippingAddress:'shsbhsjhjsv', OrderDate: 'bxcxcjshskd'}
    ]

      this.dataSource = new MatTableDataSource<OrderData>(this.orders)
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
