using System.Collections.Generic;
using EShopping.Core.Domain.Enums;

namespace EShopping.Core.Domain.ValueObjects
{
    public static class MoneySymbols
    {
        private static Dictionary<MoneyUnit, string> _symbols;

        static MoneySymbols()
        {
            if (_symbols != null)
                return;

            _symbols = new Dictionary<MoneyUnit, string>
            {
                { MoneyUnit.UnSpecified, string.Empty },

                { MoneyUnit.Dollar, "$" },

                { MoneyUnit.Euro, "€" },

                { MoneyUnit.Naira, "N" },
            };
        }

        public static string GetSymbol(MoneyUnit moneyUnit)
        {
            return _symbols[moneyUnit].ToString();
        }
    }
}