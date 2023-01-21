using EShopping.Core.Domain;
using EShopping.Core.Persistence;
using EShopping.Core.Persitence;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
namespace EShoppingWebAPI;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

        builder.WebHost.UseConfiguration(builder.Configuration);


        builder.Services.AddDbContext<EShoppingDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("EShoppingDB")));

        builder.Services.AddDatabaseDeveloperPageExceptionFilter();


        builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

        builder.Services.AddAutoMapper(typeof(Program));

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        SeedDatabase();

        void SeedDatabase()
        {
            using var scope = app.Services.CreateScope();
            var scopedContext = scope.ServiceProvider.GetRequiredService<EShoppingDbContext>();
            Initializer.Initialize(scopedContext);
        }


        app.UseSwagger();
        app.UseSwaggerUI();
        // Configure the HTTP request pipeline.
        //if (app.Environment.IsDevelopment())
        //{
        //}


        app.UseAuthorization();

        app.MapControllers();

        app.Run();

    }
}


