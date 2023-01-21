import {Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ShoppingCart';
  orders: OrderData[] = [];
  
  displayedColumns: string[] = ['Id', 'ProductId', 'Amount', 'OrderId', 'TrackNumber', 'ShippingAddress', 'OrderDate', 'Actions'];
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<OrderData>([]);

  constructor(public dialog: MatDialog) {}

  newOrder() {
    this.dialog.open(AppComponent);
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



