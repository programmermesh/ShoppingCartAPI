import {Component, AfterViewInit, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { OrderData } from 'src/app/Models/OrderData';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  title = 'ShoppingCart';
  selectedOrder: any;
    Id: number;
    ProductName: string;
    Amount: number;
    OrderId:number;
    TrackNumber: string;
    ShippingAddress: string;
    Unit: number
    OrderDate: string;

  result: any[] = [];
  orderForm: FormGroup;
  updateForm: FormGroup;
  orders: any[] = [];
  @ViewChild("updateModal", { static: true }) updateModal: TemplateRef<any>;
  @ViewChild("newModal", { static: true }) newModal: TemplateRef<any>;
  
  displayedColumns: string[] = ['Id', 'ProductName', 'Amount', 'OrderId', 'TrackNumber', 'ShippingAddress', 'OrderDate', 'Actions'];
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<OrderData>([]);

  
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder,
              private notificationService: NotificationService, 
              private apiService: ApiService) {

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
      this.getAllOrders();
    //   this.orders = [
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    //     {
    //     Id: 1, ProductName: "6789", Amount:1, ShippingAddress:"567890", OrderDate: "4567890-0", TrackNumber:"34567890"
    //   },
    // ]
    // this.dataSource = new MatTableDataSource<OrderData>(this.orders)
    }
    
    
    
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    
    /* ----------==========     OnSelected User    ==========---------- */
    
    onSelected(row: any) {
      this.selectedOrder = row;
      console.log(this.selectedOrder);
    }
    
    /* ----------==========     Subscribing to the order service to create new order    ==========---------- */
    createOrder(){
      if (this.orderForm.invalid) {
        return this.notificationService.error("Kindly fill all fields");
      }
      let model = {
        "shippingAdress": this.orderForm.value.shippingAddress,
        "orderItemsDtoModel": 
        [
          {
            "productName": this.orderForm.value.productName,
            "price": {
              "amount": this.orderForm.value.amount,
              "unit": parseInt(this.orderForm.value.unit)
            }
          }
          
        ]
      }
      this.apiService.createUser(model).subscribe((data:any) =>{
        this.notificationService.success("Order created successfuly");
        this.orderForm.reset();
        this.closeModal();
      })
    }
    
    /* ----------==========     Get All Orders    ==========---------- */
    getAllOrders(){
      this.apiService.getAllOrders().subscribe((data:any) =>{
        let hmm = new Array ;
        this.orders = data.entities;
        
        data.entities.forEach((x:any) => {
          x.orderItems.forEach((y:any) => {
            switch(y.price.unit) {
              case 1:
                y.price.unit = "N"
                break;
              case 2:
                y.price.unit = "$"
                break;
              default:
                y.price.unit = "€"
            }
            this.result.push(
              {
                "Id" :  x.id,
                "TrackNumber" :  x.trackingNumber,
                "OrderDate": x.orderDate,
                "ShippingAddress": x.shippingAdress,
                "OrderId": y.id,
                "ProductName": y.productName,
                "Amount": y.price.amount,
                "Unit": y.price.unit
              } )
              console.log(this.result)
              this.dataSource = new MatTableDataSource<OrderData>(this.result)
            });
            
        });
     })
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
