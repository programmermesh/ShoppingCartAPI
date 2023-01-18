using EShoppingWebAPI.Models.OrderModels;
using FluentValidation;

namespace EShoppingWebAPI.Models.OrderModels
{
    public class OrderUpdateRequestModelValidator : AbstractValidator<OrderUpdateRequestModel>
    {
        public OrderUpdateRequestModelValidator()
        {
            RuleFor(x => x.ShippingAdress)
           .NotNull()
           .NotEmpty()
           .Length(2, 100);
        }
    }
}