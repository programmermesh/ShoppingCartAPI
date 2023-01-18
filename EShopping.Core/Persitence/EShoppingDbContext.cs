using EShopping.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace EShopping.Core.Persistence
{
    public class EShoppingDbContext : DbContext
    {
        public virtual DbSet<Order> Orders { get; set; }

        public EShoppingDbContext(DbContextOptions<EShoppingDbContext> dbContextOptions)
            : base(dbContextOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Scans a given assembly for all types that implement IEntityTypeConfiguration, and registers each one automatically
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
        }
    }
}