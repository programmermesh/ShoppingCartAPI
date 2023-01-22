using EShopping.Core.Domain.ValueObjects;

namespace EShoppingWebAPI.Models.OrderModels
{
    public class OrderItemSaveRequestModel
    {
        /// <example>1</example>
        public string ProductName { get; set; }

        public PriceSaveRequestModel Price { get; set; }
    }
}