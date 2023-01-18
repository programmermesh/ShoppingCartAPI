﻿using EShoppingWebAPI.Models.OrderModels;
using System;
using System.Collections.Generic;

namespace EShoppingWebAPI.Models.OrderModels
{
    public class OrderViewModel
    {
        public int? Id { get; set; }

        public Guid? TrackingNumber { get; set; }

        public string? ShippingAdress { get; set; }

        public DateTime OrderDate { get; set; }

        public IEnumerable<OrderItemViewModel>? OrderItems { get; set; }
    }
}