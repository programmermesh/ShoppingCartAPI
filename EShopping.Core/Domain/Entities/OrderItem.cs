using EShopping.Core.Domain.ValueObjects;
using SharedKernel.Exceptions;
using System.Diagnostics;

namespace EShopping.Core.Domain.Entities
{
    public class OrderItem
    {
        public int Id { get; protected set; }

        public string ProductName { get; protected set; }

        public Price Price { get; protected set; }

        public int OrderId { get; protected set; }


        protected OrderItem() // For Entity Framework Core
        {
        }

        public OrderItem(string ProductName, Price price)
        {
            ProductName = ProductName;

            Price = price;

            CheckForBrokenRules();
        }

        private void CheckForBrokenRules()
        {
            if (ProductName == null)
                throw new BusinessRuleBrokenException("You must supply valid Product!");

            if (Price is null)
                throw new BusinessRuleBrokenException("You must supply an Order Item!");
        }
    }
}