export interface OrderData {
    Id: number;
    ProductName: string;
    Amount: number;
    OrderId:number,
    TrackNumber: string;
    ShippingAddress: string;
    OrderDate: string;
    Unit: number;
  }
  
export interface newOrder {
    shippingAdress: string,
    orderItemsDtoModel: 
    [
      {
        productName: string,
        price: {
          amount: number,
          unit: number
          }
      }
     
    ]
}
