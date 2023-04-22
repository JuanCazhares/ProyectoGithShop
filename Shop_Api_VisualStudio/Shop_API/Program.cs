using Microsoft.EntityFrameworkCore;
using Shop_API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ProductosDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ProductosDBContext")));

builder.Services.AddDbContext<CarritoDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CarritoDBContext")));

builder.Services.AddDbContext<UsuariosDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("UsuariosDBContext")));

var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();

builder.Services.AddCors(options =>
{
    var frontendURL = configuration.GetValue<string>("frontend_url");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
}
);

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
