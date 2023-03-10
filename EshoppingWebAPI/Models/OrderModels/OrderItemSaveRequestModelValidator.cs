using EShoppingWebAPI.Models.OrderModels;
using FluentValidation;

namespace EShoppingWebAPI.Models.OrderModels
{
    public class OrderItemSaveRequestModelValidator : AbstractValidator<OrderItemSaveRequestModel>
    {
        public OrderItemSaveRequestModelValidator()
        {
            RuleFor(x => x.ProductName)
            .NotNull().WithMessage("Please enter a product");

            RuleFor(x => x.Price)
            .NotNull().WithMessage("Please enter price");
        }
    }
}