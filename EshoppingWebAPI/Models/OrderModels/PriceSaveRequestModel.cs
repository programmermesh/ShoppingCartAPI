using EShopping.Core.Domain.Enums;
namespace EShoppingWebAPI.Models.OrderModels
{
    public class PriceSaveRequestModel
    {
        public int? Amount { get; set; }

        public MoneyUnit? Unit { get; set; } = MoneyUnit.UnSpecified;
    }
}