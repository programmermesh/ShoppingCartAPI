using EShopping.Core.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShopping.Core.Persitence
{
    public static class Initializer
    {
        public static void Initialize(EShoppingDbContext context)
        {
            context.Database.Migrate();
         
        }
    }
}
